import React,{useState,useEffect} from 'react';
import './tatuadorListStyle.css';
import Axios from 'axios';
import NavBar from '../../components/NavBar2'
import { Link,useParams } from 'react-router-dom';




function Card({email,name,img,type,clientEmail}) {
    return (
    <div className='col-4 bg-transparent'>
        <Link to={`/tatuador/${email}/${clientEmail}`} className='link-card'>
            <div className={`card ${type}-tatuadorlist`}>
                <h2>{name}</h2>
                <img src={img} className='card__image'></img>
            </div>
        </Link>
    </div>

    );
}
  


function CardColumn({clientEmail}) {
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
          <Card key={index} email={card.email} name={card.name} type="type2" img={card.foto_perfil} clientEmail={clientEmail}/>
        ))}
      </div>
    );
}
  
function TatuadorList() {

    const params = useParams();
    const clientEmail = params.clientEmail;

    return (<>
      <NavBar clientEmail={clientEmail}/>
      <div className='tatuadorList-wrapper'>
        <div className='tatuadores-body-tatuadorList'>
            <label className='label-tatuadores-tatuadorList'>Tatuadores</label>
        </div>
        <div className='cards-wrapper'>
            <CardColumn clientEmail={clientEmail} />
        </div>
        
      </div>
      </>);
}
  
export default TatuadorList;