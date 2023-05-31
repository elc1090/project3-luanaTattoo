import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './categoriaSingle.css';
import Axios from 'axios';
import NavBar from '../../components/NavBar2';
import { Link } from 'react-router-dom';


function CategoriaSingle() {
    const params = useParams();
    const categoriaName = params.categoriaName;

    const [tatuadorList,setTatuadorList] = useState([]);
 
//buscar a lista de tatuadores q estao nessa categoria

    useEffect(()=>{
        //Axios.get("https://tattomarket-api.onrender.com/categoria",{params:{categoriaName:categoriaName}}).then((response)=>{
        Axios.get("http://localhost:3001/categoria",{params:{categoriaName:categoriaName}}).then((response)=>{
            setTatuadorList(response.data);
        })
    },[]);


    return (
      <div>
        <NavBar/>
          <div className='tatuadores-body-tatuadorList'>
              <label className='label-tatuadores-tatuadorList'>{categoriaName}</label>
          </div>
          <div className="card-column-tatuadorList">
          {tatuadorList.map((card, index) => (
            <Card key={index} title={card.name} type="type2" img={card.foto_perfil}/>
          ))}
          </div>
        
      </div>
    );
}

export default CategoriaSingle;



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
  


function CardColumn(tatuadorList) {
   
    return (
      <div className="row card-column-tatuadorList">
        {tatuadorList.map((card, index) => (
          <Card key={index} title={card.name} type="type2" img={card.foto_perfil}/>
        ))}
      </div>
    );
}

 