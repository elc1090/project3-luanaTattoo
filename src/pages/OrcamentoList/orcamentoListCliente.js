import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './orcamentolistStyle.css';
import Axios from 'axios';
import NavBar from '../../components/NavBar2';
import { Link } from 'react-router-dom';


function OrcamentoListCliente() {
  const params = useParams();
  const clientEmail = params.clientEmail;
 
  const [orcamentoList,setOrcamentoList] = useState([]);

  useEffect(()=>{
  Axios.get("http://tattomarket-api.onrender.com/orcamentosCliente",{params:{userEmail:clientEmail}}).then((response)=>{
  //Axios.get("http://localhost:3001/orcamentosCliente",{params:{userEmail:clientEmail}}).then((response)=>{
      setOrcamentoList(response.data);
  })
  },[]);


  const pendentesList = orcamentoList.filter((card) => card.status == "Pendente");
  const aprovadosList = orcamentoList.filter((card) => card.status == "Aprovado");



    return (<>
      <NavBar clientEmail={clientEmail}/>
      <div className='orcamentos-cliente-wrapper'>
            <div className='orcamentos-body-orcamentoList'>
                <label className='label-orcamentos-orcamentoList'>Orçamentos</label>
            </div>
            <div className='orcamentos-body-aprovados'>
                <label className='label-orcamentos-aprovados'>Aprovados</label>
                <CardRows list ={aprovadosList} type="type1"/>

            </div>
            <div className='orcamentos-body-pendentes'>
                <label className='label-orcamentos-pendentes'>Pendentes</label>
                <CardRows list ={pendentesList} type="type2"/>

            </div>
      </div>
      </>);
}

export default OrcamentoListCliente;



function Card({title,descricao,local,tamanho,img,status,type}) {
  return (
  <div className='col-6 bg-transparent '>
    <div className={`card type2-orcamentoList`}>
      <h2>{title}</h2>
      <img src={img} className='card__image-orcamentoList'></img>
      <label className='label-descricao-orcamentoList'>{descricao}</label>
      <label className='label-local-orcamentoList'>{local}</label>
      <label className='label-tamanho-orcamentoList'>{tamanho}</label>
      <div className={`card-footer text-center footer-${type}`}>{status}</div>
    </div>
  </div>
  );
}
  

function CardRows({list,type}){

  return (<>
    {list.map((card, index) => (
        <Card key={index} title={card.cliente_email} descricao={card.descricao} local={card.local} tamanho={card.tamanho} img={card.inspiracao} status={card.status} type={type}/>
    ))}
      
  </>);
  
}


 