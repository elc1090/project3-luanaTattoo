import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './orcamentoNovo.css';
import Axios from 'axios';
import NavBar from '../../components/NavBar2'


const OrcamentoNew = ()=>{

    const[name,setName] = useState('');
    const[tamanho,setTamanho] = useState(0);
    const[cor,setCor] = useState('Preto');
    const[local,setLocal] = useState('Braço');


    const handleSubmit = (event) =>{
        Axios.post("http://localhost:3001/orcamento",{name:name,tamanho:tamanho,cor:cor,local:local});
    }


    return(<>
    <NavBar/>
    <div className='form'>
        <div className='title-body'>
            <label className='label-title'>Novo Orçamento</label>
        </div>
            <form >
                <div className='form-body'>
                    <label className='label-descricao'>Descrição</label>
                    <input  className='input-descricao'
                        type="text"
                        onChange={(event)=>{
                        setName(event.target.value);
                        
                    }}
                    ></input>
                    <label className='label-tamanho'>Tamanho</label>
                    <input className='input-tamanho'
                        type="number"
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
                    <label className='label-local'> Local do Corpo 
                        <select 
                            onChange={(event)=>{
                            setLocal(event.target.value);
                        }}>
                            <option value="Braco">Braço</option>
                            <option value="Mao">Mão</option>
                            <option value="Torax">Torax</option>
                            <option value="Perna">Perna</option>
                            <option value="Pe">Pé</option>
                            <option value="Costas">Costas</option>
                            <option value="Cabeca">Cabeça</option>

                        </select>
                    </label>                             
                </div>
                <div className='footer'>
                    <button  onClick={handleSubmit} className='label-footer'>Enviar</button>
                </div>
            </form>

        </div>
    
    </>);


};
export default OrcamentoNew;

