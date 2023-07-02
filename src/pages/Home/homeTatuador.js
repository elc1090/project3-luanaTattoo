
import React,{useState,useEffect} from 'react';
import './homeTatuador.css';
import Axios from 'axios';
import NavBar from '../../components/navBarTatuador'
import { Link,useParams } from 'react-router-dom';



const HomeTatuador = ()=>{
    /*
    const[tatuadorEmail,setUser] = useState();
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        try {
          const foundUser = JSON.parse(loggedInUser);
          setUser(foundUser);
        }catch (error) {
          // Tratar o erro ao analisar a string JSON
          console.log("Erro ao analisar o usuário armazenado:", error);
          // Ou definir o usuário como um valor padrão, se apropriado
          setUser(null);
        }
    }, []);
*/
    const params = useParams();
    const tatuadorEmail = params.tatuadorEmail;

    const[tatuador,setTatuador] = useState([]);
    
    useEffect(()=>{
      Axios.get("http://tattomarket-api.onrender.com/tatuador",{params:{tatuadorEmail:tatuadorEmail}}).then((response)=>{
      //Axios.get("http://localhost:3001/tatuador",{params:{tatuadorEmail:tatuadorEmail}}).then((response)=>{
          setTatuador(response.data);
      })
    },[]);

    const exemplo1 = "";
  
    return (<>
      <NavBar tatuadorEmail={tatuadorEmail}/>
      {tatuador.map((val,key)=>{
        return(<>
        <div key={key}></div>
          <div className='home-wrapper-tatuador'>
            <div className='nome-body-home-tatuador'>
              <label className='label-nome-home-tatuador'>{val.name}</label>
            </div>
            <div className='orcamentos-body-home-tatuador'>
              <label className='label-orcamentos-home-tatuador'>Orçamentos</label>
              <CardRow/>
            </div>
            <div className='fotos-home-tatuador-wrapper'>
              <div class="bg-transparent row pt-3 "> 
                <div class="bg-transparent col-lg-6 ml-2 mt-2 mb-2 pr-lg-1 ">
                    <img src={val.foto_exemplo1} alt="" class="img-fluid rounded shadow-sm tatuador-home-img"></img>
                </div>
                <div class="bg-transparent col-lg-6 ml-2 mt-2  mb-2 pl-lg-1">
                    <img src={val.foto_exemplo2} alt="" class="img-fluid rounded shadow-sm tatuador-home-img"></img>
                </div>
              </div>
              <div class="bg-transparent row pt-3 "> 
                  <div class="bg-transparent col-lg-6 ml-2 mt-2 mb-2 pr-lg-1">
                      <img src={val.foto_exemplo3} alt="" class="img-fluid rounded shadow-sm tatuador-home-img"></img>
                  </div> 
                  <div class="bg-transparent col-lg-6 ml-2 mt-2 mb-2 pl-lg-1">
                      <img src={val.foto_exemplo4} alt="" class="img-fluid rounded shadow-sm tatuador-home-img "></img>
                  </div>
              </div> 
            </div>      
          </div>          
        </>);
      })}
    </>);





};


function Card({title,type,typeCard}) {


  return (
    <Link to={`/${typeCard}/${title}`} className='link-card'>
      <div className={`card ${type}-home-tatuador`}>
        <h2 className='title-home-tatuador-card'>{title}</h2>
      </div>
    </Link>
  );
}
/*
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
        <div className='col-3'>
        <Card key={index} title={card.title} type={card.type} img={card.img} typeCard={card.typeCard} />
        </div>
      ))}
      
    </div>
    
  );
}
*/
 
function CardRow() {

  const cardData = [
    { title: "Orcamento 1", type: "type2",typeCard:"tatuador" },
    { title: "Orcamento 2", type: "type2" ,typeCard:"tatuador"},
    { title: "Orcamento 3", type: "type2",typeCard:"tatuador"},
  ];

  return (
    <div className="row bg-transparent card-row-home-tatuador">
      {cardData.map((card, index) => (
        <div className='col-12 bg-transparent'>
        <Card key={index} title={card.title} type={card.type}  typeCard={card.typeCard}/>
        </div>
      ))}
    </div>
  );
}


export default HomeTatuador;


