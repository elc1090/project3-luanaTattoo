import React,{useState,useEffect} from 'react';
import './tatuadorListStyle.css';
import Axios from 'axios';
import NavBar from '../../components/NavBar2'
import { Link } from 'react-router-dom';




function Card({title,img,type}) {
    return (
    <div className='col-4'>
        <Link to={`/tatuador/${title}`} className='link-card'>
            <div className={`card ${type}`}>
                <h2>{title}</h2>
                <img src={img} className='card__image'></img>
            </div>
        </Link>
    </div>

    );
}
  


function CardColumn() {
    const [tatuadorList,setTatuadorList] = useState([]);
    
    useEffect(()=>{
        Axios.get("https://tattomarket-api.onrender.com/tatuadorlist").then((response)=>{
        //Axios.get("http://localhost:3001/tatuadorlist").then((response)=>{
            setTatuadorList(response.data);
        })
    },[]);

    return (
    
      <div className="row card-column-tatuadorList">
        {tatuadorList.map((card, index) => (
          <Card key={index} title={card.name} type="type2" img={card.foto_perfil}/>
        ))}
      </div>
    );
}
  
function TatuadorList() {
   
    return (
      <div>
        <NavBar/>
        <div className='tatuadores-body-tatuadorList'>
            <label className='label-tatuadores-tatuadorList'>Tatuadores</label>
        </div>
        <div>
            <Link to={`../tatuadorForm`}><button className='novoTatuador-body'><span className='label-novoTatuador'>+ Novo Tatuador</span></button></Link>
        </div>
        <div>
            <CardColumn />
        </div>
        
      </div>
    );
}
  
export default TatuadorList;