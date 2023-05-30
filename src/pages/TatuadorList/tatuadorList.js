import React,{useState,useEffect} from 'react';
import './tatuadorListStyle.css';
import Axios from 'axios';
import NavBar from '../../components/NavBar2'
import { Link } from 'react-router-dom';



/*
function Card(props){
    return(
        <div className="card">
            <div className="cad__body">
                <h2 className='card__title'> {props.title}</h2>
                <p className='card__description'>{props.description}</p>
            </div>
        </div>

    );
}



function TatuadorList (){
    //tenho q ver como pegar o parametro do path do html, dai eu pego o id e aparece a lista , fazer pesquisar o tatuador pelo id

    const [tatuadorList,setTatuadorList] = useState([]);


    useEffect(()=>{
        Axios.get("http://localhost:3001/tatuadorlist").then((response)=>{
            setTatuadorList(response.data);
        })
    },[]);


   return (<>
   <Navbar/>
    <div className='title-body'>
        <label className='label-title'>Tatuadores</label>
    </div>
    <div className='wrapper'>
        
        {tatuadorList.map((val,key)=>{
            return( <div key={key}>
            <Card
                    title={val.name}
                    description="Idade: ${val.age}  Email: ${val.email}"
                />
            </div>);
        })}
    </div>

    </>);
  
}

export default TatuadorList;

*/

function Card({title,img,type}) {
    return (
    <div className='col-4'>
        <div className={`card ${type}`}>
            <h2>{title}</h2>
            <img src={img} className='card__image'></img>
            <Link to={`/tatuador/${title}`}><button  >View</button></Link>
        </div>
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
   /* 
   <div className='novoTatuador-body'>
            <label className='label-novoTatuador'>+ Novo Tatuador</label>
    </div>
   */
  
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