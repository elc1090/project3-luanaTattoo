import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './tatuadorForm.css';
import Axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import NavBar from '../../components/NavBar2';
import NavTab from '../../components/navTab';
import { Link } from 'react-router-dom';

//var Multiselect = require('react-bootstrap-multiselect');


const TatuadorForm = ()=>{
    
    const[name,setName] = useState('');
    const[age,setAge] = useState(0);
    const[email,setEmail] = useState('');
    const[senha,setSenha] = useState('');
    const[city,setCity] = useState('');
    //categorias vai ter q ser de selecionar varias
    const[categoria,setCategoria] = useState('');
/*
    const[braco,setBraco] = useState(0);
    const[perna,setPerna] = useState(0);
    const[torax,setTorax] = useState(0);
    const[mao,setMaos] = useState(0);
    const[pe,setPe] = useState(0);
    const[costas,setCostas] = useState(0);
    const[cabeca,setCabeca] = useState(0);
    const[tamanho,setTam] = useState(0);
    const[cor,setCor] = useState('');
*/
    const[perfil,setFotoPerfil] = useState('');
    const[exemplo1,setFotoExemplo1] = useState('');
    const[exemplo2,setFotoExemplo2] = useState('');
    const[exemplo3,setFotoExemplo3] = useState('');
    const[exemplo4,setFotoExemplo4] = useState('');


    
    const submitTatuador = (event) =>{
        Axios.post("https://tattomarket-api.onrender.com/tatuadorform/insert",{name:name,age:age,city:city,email:email,senha:senha,categoria:categoria,foto_perfil:perfil,foto_exemplo1:exemplo1,foto_exemplo2:exemplo2,foto_exemplo3:exemplo3,foto_exemplo4:exemplo4});
        //Axios.post("http://localhost:3001/tatuadorform/insert",{name:name,age:age,city:city,email:email,senha:senha,categoria:categoria,foto_perfil:perfil,foto_exemplo1:exemplo1,foto_exemplo2:exemplo2,foto_exemplo3:exemplo3,foto_exemplo4:exemplo4});
        
    }
    
    

    return(<>
        <div className='form-tatuadorForm'>
            <div className='title-body-tatuadorForm'>
                <label className='label-title-tatuadorForm'>Cadastrar Tatuador</label>
            </div>
                <form className='form-cadastro-tatuador-wrapper'>
                    <div className='form-body-tatuadorform-basics'>
                        <label className='tatuador-label-nome'>Nome</label>
                        <input  className='tatuador-input-nome'
                            type="text"
                            onChange={(event)=>{
                            setName(event.target.value);
                            
                        }}
                        ></input>
                        <label className='tatuador-label-email'> Email </label>
                        <input  className='tatuador-input-email'
                            type="text"
                            onChange={(event)=>{
                            setEmail(event.target.value);
                            
                        }}
                        ></input> 
                        <label className='tatuador-label-senha'>Senha</label>
                        <input  className='tatuador-input-senha'
                            type="text"
                            onChange={(event)=>{
                            setSenha(event.target.value);
                            
                        }}
                        ></input>
                            
                    </div>
                    <div className='form-body-tatuadorForm'>
                        <label className='label-cidade-tatuadorForm'>Cidade</label>
                        <input  className='input-cidade-tatuadorForm'
                            type="text"
                            onChange={(event)=>{
                            setCity(event.target.value);
                            
                        }}
                        ></input>
                        <label className='label-idade-tatuadorForm'>Idade</label>
                        <input className='input-idade-tatuadorForm'
                            type="number"
                            onChange={(event)=>{
                            setAge(event.target.value);
                            
                        }}
                        ></input>
                        <label className='label-perfil-tatuadorForm'>Foto de perfil</label>
                        <input className='input-perfil-tatuadorForm'
                            type="text"
                            placeholder='Link'
                            onChange={(event)=>{
                            setFotoPerfil(event.target.value);
                            
                        }}
                        ></input>
                        <label className='label-exemplos-tatuadorForm'>Fotos de trabalhos recentes</label>
                        <input className='input-exemplo1-tatuadorForm'
                            type="text"
                            placeholder='Link'
                            onChange={(event)=>{
                            setFotoExemplo1(event.target.value);
                            
                        }}
                        ></input>
                        <input className='input-exemplo2-tatuadorForm'
                            type="text"
                            placeholder='Link'
                            onChange={(event)=>{
                            setFotoExemplo2(event.target.value);
                            
                        }}
                        ></input>
                        <input className='input-exemplo3-tatuadorForm'
                            type="text"
                            placeholder='Link'
                            onChange={(event)=>{
                            setFotoExemplo3(event.target.value);
                            
                        }}
                        ></input>
                        <input className='input-exemplo4-tatuadorForm'
                            type="text"
                            placeholder='Link'
                            onChange={(event)=>{
                            setFotoExemplo4(event.target.value);
                            
                        }}
                        ></input>
                        <label className='label-categoria-tatuadorForm'> Categoria 
                        <select 
                            onChange={(event)=>{
                            setCategoria(event.target.value);
                        }}>
                            <option value="Old School">Old School</option>
                            <option value="Black Work">Black Work</option>
                            <option value="FIne Line">Fine Line</option>
                            <option value="Pontilhismo">Pontilhismo</option>
                            <option value="Geometrica">Geometrica</option>
                            <option value="Oriental">Oriental</option>
                            <option value="Realismo">Realismo</option>
                            <option value="Maori">Maori</option>
                            <option value="Aquarela">Aquarela</option>
                            <option value="Minimalista">Minimalista</option>
                        </select>
                    </label>    
                    <Link to={`../perfilTatuador/${email}`}><button onClick={submitTatuador} className='footer-tatuadorForm'><span className='label-footer-tatuadorForm'>Enviar</span></button></Link>
     
                    </div>
                </form>

                
    
            </div>
        
        </>);

   
  
};
export default TatuadorForm;

