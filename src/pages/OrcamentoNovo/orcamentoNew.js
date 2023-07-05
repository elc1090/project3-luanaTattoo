import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './orcamentoNovo.css';
import Axios from 'axios';
import NavBar from '../../components/NavBar2'
import { useParams,Link } from 'react-router-dom';


const OrcamentoNew = ()=>{

    const params = useParams();
    const tatuadorEmail = params.tatuadorEmail;
    const clientEmail = params.clientEmail;


    //precisa ver como pegar as info do cliente 
    const[descricao,setDescricao] = useState('');
    const[tamanho,setTamanho] = useState(0);
    const[cor,setCor] = useState('Preto');
    const[local,setLocal] = useState('Braço');
    const[foto,setFoto] = useState('');
    const status = "Pendente";
    const preco = 0;

    const handleSubmit = (event) =>{
        Axios.post("https://tattomarket-api.onrender.com/orcamento/insert",{tatuadorEmail:tatuadorEmail,clientEmail:clientEmail,descricao:descricao,inspiracao:foto,tamanho:tamanho,local:local,cor:cor,status:status,preco:preco});
        //Axios.post("http://localhost:3001/orcamento/insert",{tatuadorEmail:tatuadorEmail,clientEmail:clientEmail,descricao:descricao,inspiracao:foto,tamanho:tamanho,local:local,cor:cor,status:status});
    }


    return(<>
    <NavBar clientEmail={clientEmail}/>
    <div className='form-orcamentoNovo'>
        <div className='title-body'>
            <label className='label-title'>Novo Orçamento</label>
        </div>
            <form >
                <div className='form-body'>
                    <label className='label-descricao'>Descrição</label>
                    <textarea  className='input-descricao'
                        type="text"
                        placeholder='Coloque uma descrição detalhada da tatuagem'
                        onChange={(event)=>{
                        setDescricao(event.target.value);
                        
                    }}
                    ></textarea>
                    <label className='label-foto'>Inspiração</label>
                    <input className='input-foto'
                        type="text"
                        placeholder='Link para a foto de inspiracao'
                        onChange={(event)=>{
                        setFoto(event.target.value);
                        
                    }}
                    ></input>
                    <label className='label-tamanho'>Tamanho</label>
                    <input className='input-tamanho'
                        type="number"
                        placeholder='Tamanho em cm'
                        onChange={(event)=>{
                        setTamanho(event.target.value);
                        
                    }}
                    ></input>
                    <label className='label-cor'> Cor 
                        <select 
                            onChange={(event)=>{
                            setCor(event.target.value);
                        }}>
                            <option value="Preto">Preto</option>
                            <option value="Colorido">Colorido</option>
                        </select>
                    </label> 
                    <label className='label-local'>Local do corpo</label>
                    <input className='input-local'
                        type="text"
                        placeholder='Local da tatuagem'
                        onChange={(event)=>{
                        setLocal(event.target.value);
                        
                    }}
                    ></input>                       
                </div>
                <Link to={`../home/${clientEmail}`}><button onClick={handleSubmit} className='footer'><span className='label-footer'>Enviar</span></button></Link>
            </form>

        </div>
    
    </>);


};
export default OrcamentoNew;

