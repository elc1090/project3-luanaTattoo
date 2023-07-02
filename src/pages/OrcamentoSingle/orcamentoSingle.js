import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import NavBar from '../../components/navBarTatuador'
import './orcamentoSingleStyle.css';
import { useParams,Link } from 'react-router-dom';



const OrcamentoSingle = ()=>{

    const params = useParams();
    const tatuadorEmail = params.tatuadorEmail;
    const idOrcamento = params.idOrcamento;


    const[orcamentoList,setOrcamento] = useState([]);
    
    useEffect(()=>{
        Axios.get("https://tattomarket-api.onrender.com/orcamento",{params:{idOrcamento:idOrcamento}}).then((response)=>{
        //Axios.get("http://localhost:3001/orcamento",{params:{idOrcamento:idOrcamento}}).then((response)=>{
            setOrcamento(response.data);
        })
    },[]);


    const[preco,setPreco] = useState(0);

    const handleClick = (event) =>{
        Axios.post("https://tattomarket-api.onrender.com/orcamentoAprovado",{preco:preco,status:"Aprovado",idOrcamento:idOrcamento});
        //Axios.post("http://localhost:3001/orcamentoAprovado",{preco:preco,status:"Aprovado",idOrcamento:idOrcamento});
    }
    
    
    return(<>
    <NavBar tatuadorEmail={tatuadorEmail}/>
        <div className='orcamentoSingle-wrapper'>

        {orcamentoList.map((val,key)=>{
            
            return(<>
            <div key={key}></div>
            <div className='column orcamentoSingle-container'>
                <div class="px-4 pt-0 pb-1 bg-transparent "> 
                    <div class="media align-items-end profile-head bg-transparent"> 
                        <div class="mr-5 bg-transparent mt-4" >
                            <img src={val.inspiracao} alt="..." width="250" class="mt-5 rounded mb-5"></img>
                        </div> 
                        <div className='body-email-single'>
                            <label className='label-email-single'>{val.cliente_email}</label>
                        </div>
                        <div className='body-descricao-single'>
                            <label className='label-descricao-single'>{val.descricao}</label>
                        </div>
                        <div className='body-local-single'>
                            <label className='label-local-single'>{val.local}</label>
                        </div>
                        <div className='body-tamanho-single'>
                            <label className='label-tamanho-single'>{val.tamanho}</label>
                        </div>
                        <div className='body-cor-single'>
                            <label className='label-cor-single'>{val.cor}</label>
                        </div>
                        <label className='label-preco-single'>Adicione um preço:</label>
                        <input  className='orcamentoSingle-input-preco'
                                placeholder={val.preco}
                                type="number"
                                onChange={(event)=>{
                                setPreco(event.target.value);
                                
                            }}
                        ></input>
                        <Link to={`../homeTatuador/${tatuadorEmail}`}><button onClick={handleClick} className='footer-orcamentosingle'><span className='label-footer-orcamentosingle'>Aprovar Orçamento</span></button></Link>

                    </div> 
                </div> 
            </div>
           
            </>);
        })}
        </div>

    </>);

    

    

};
export default OrcamentoSingle;
