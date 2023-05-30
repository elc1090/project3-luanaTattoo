import React,{useState,useEffect} from 'react';
import './categoriaList.css';
import Axios from 'axios';
import NavBar from '../../components/NavBar2'
import { Link } from 'react-router-dom';


function Card({title,img,type}) {
    return (
      <div className='col-3'>
        <div className={`card ${type}`}>
          <h2>{title}</h2>
          <img src={img} className='card__image'></img>
          <Link to={`/categoria/${title}`}><button >View</button></Link>
        </div>
      </div>

    );
}
  
function CardRow() {
    const [categoriaList,setCategoriaList] = useState([]);

    
    useEffect(()=>{
        Axios.get("https://tattomarket-api.onrender.com/categorialist").then((response)=>{

        //Axios.get("http://localhost:3001/categorialist").then((response)=>{
            setCategoriaList(response.data);
        })
    },[]);

    return (
      <div className="row card-row-categoriaList">
        {categoriaList.map((card, index) => (
          <Card key={index} title={card.name} type="type1" img={card.img}/>
        ))}
      </div>
    );
}
  
function CategoriaList() {
   
  
    return (
      <div>
        <NavBar/>
        <div className='categoria-body-categoriaList'>
            <label className='label-categorias-categoriaList'>Categorias</label>
        </div>
        <div className='wrapper-categoriaList'>
          <CardRow />
        </div>
      </div>
    );
}
  
export default CategoriaList;