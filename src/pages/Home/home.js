
import React,{useState,useEffect} from 'react';
import './home.css';
import Axios from 'axios';
import NavBar from '../../components/NavBar2'
import { Link } from 'react-router-dom';



const Home = ()=>{

    const [tatuadorList,setTatuadorList] = useState([]);


    return (<>
        
      <div className='home-wrapper'>
          <div className='categoria-body-home'>
            <label className='label-categorias-home'>Categorias</label>
          </div>
            <CardRow />
          <div className='categoria-body-home'>
            <label className='label-categorias-home'>Tatuadores</label>
          </div>
            <CardColumn />
      </div>
 
     
    </>);





};


function Card({title,img,type,typeCard}) {

  return (
    <div className='col-3'>
    <div className={`card ${type}`}>
      <h2 className='title-home-card'>{title}</h2>
      <img src={img} className='card__image'></img>
      <Link to={`/${typeCard}/${title}`}><button>View</button></Link>
    </div>
    </div>

  );
}

function CardRow() {
  const cardData = [
    { title: "Old School", type: "type1" ,img:"https://www.fashionbubbles.com/files/2017/05/tatuagens-old-school-3-600x389.jpg",typeCard:"categoria"},
    { title: "Black Work", type: "type1",img:"https://i.pinimg.com/originals/61/3a/66/613a666a9d308f1605b522bbf52b8a0d.jpg",typeCard:"categoria" },
    { title: "Maori", type: "type1",img:"https://www.elhombre.com.br/wp-content/uploads/2019/03/449c935c-49ce-681a-b4fe-5aaf3e01b0b5-600x594.jpg",typeCard:"categoria" },
    { title: "Fine Line", type: "type1",img:"https://boadicadebeleza.com.br/wp-content/uploads/2023/01/fineline-tattoo.jpeg",typeCard:"categoria" },
  ];

  return (
    <div className="row card-row-home">
      {cardData.map((card, index) => (
        <Card key={index} title={card.title} type={card.type} img={card.img} typeCard={card.typeCard} />
      ))}
      
    </div>
    
  );
}

 
function CardColumn() {
  const cardData = [
    { title: "Fabiano Junior", type: "type2",img:"https://raw.githubusercontent.com/luanaFOliveira/storeImagesTrab3/main/Fabiano/foto_perfil_fabiano.png",typeCard:"tatuador" },
    { title: "Carlos Pinhu", type: "type2" ,img:"https://raw.githubusercontent.com/luanaFOliveira/storeImagesTrab3/main/Pinho/perfil_pinho.png",typeCard:"tatuador"},
    { title: "Daniela Cunha", type: "type2",img:"https://raw.githubusercontent.com/luanaFOliveira/storeImagesTrab3/main/Dani/perfil_Dani.png" ,typeCard:"tatuador"},
    { title: "Maico de Araujo Borges", type: "type2" ,img:"https://raw.githubusercontent.com/luanaFOliveira/storeImagesTrab3/main/Maico/perfil_maico.jpg",typeCard:"tatuador"},
  ];

  return (
    <div className="row card-column-home">
      {cardData.map((card, index) => (
        <Card key={index} title={card.title} type={card.type} img={card.img} typeCard={card.typeCard}/>
      ))}
    </div>
  );
}


export default Home;


