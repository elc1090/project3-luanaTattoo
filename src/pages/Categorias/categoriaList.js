import React,{useState,useEffect} from 'react';
import './categoriaList.css';
import Axios from 'axios';
import NavBar from '../../components/NavBar2'
import { Link,useParams } from 'react-router-dom';


function Card({title,img,type,clientEmail}) {
    return (
      <div className='col-3 bg-transparent'>
        <Link to={`/categoria/${title}/${clientEmail}`} className='link-card'>
          <div className={`card ${type}-categorialist`}>
            <h2 className='title-card-categoriaList'>{title}</h2>
            <img src={img} className='card__image'></img>
          </div>
        </Link>
      </div>

    );
}
  
function CardRow({clientEmail}) {
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
          <Card key={index} title={card.name} type="type1" img={card.img} clientEmail={clientEmail}/>
        ))}
      </div>
    );
}
  
function CategoriaList() {
  const params = useParams();
  const clientEmail = params.clientEmail;
  
    return (<>
      <NavBar clientEmail={clientEmail}/>
      <div className='categoriaList-wrapper'>
        <div className='categoria-body-categoriaList'>
            <label className='label-categorias-categoriaList'>Categorias</label>
        </div>
        <div className='wrapper-categoriaList'>
          <CardRow clientEmail={clientEmail}/>
        </div>
      </div>
      </>);
}
  
export default CategoriaList;