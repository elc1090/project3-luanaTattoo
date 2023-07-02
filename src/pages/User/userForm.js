import React,{useState} from 'react';
import './userFormStyle.css';
import Axios from 'axios';
import NavBar from '../../components/NavBar2'
import {Link, useMatch,useResolvedPath} from "react-router-dom";
import NavTab from '../../components/navTab';

/*
<div className='form'>
            <form onSubmit={handleSubmit}>
                <div className='form-user-body'>
                    <label>Nome</label>
                    <input 
                        type="text"
                        onChange={(event)=>{
                        setName(event.target.value);
                        
                    }}
                    ></input>                
                    <label>Idade</label>
                    <input 
                        type="number"
                        onChange={(event)=>{
                        setAge(event.target.value);
                        
                    }}
                    ></input>  
                    <label>Email</label>
                    <input 
                        type="text"
                        onChange={(event)=>{
                        setEmail(event.target.value);
                        
                    }}
                    ></input>                  
                    <label>Senha</label>
                    <input 
                        type="text"
                        onChange={(event)=>{
                        setSenha(event.target.value);
                        
                    }}
                    ></input>         
                </div>
                <div className='footer'>
                    <input type="submit"></input>
                </div>
            </form>

        </div>



*/


const UserForm = ()=>{
    
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[senha,setSenha] = useState('');


    const handleSubmit = (event) =>{
        Axios.post("http://tattomarket-api.onrender.com/userform/insert",{name:name,email:email,senha:senha});
        //Axios.post("http://localhost:3001/userform/insert",{name:name,email:email,senha:senha});
    }

    

    
    return (<>
    <div className='user-form'>
            <div className='user-title-body'>
                <label className='user-label-title'>Novo Usuario</label>
            </div>
            <form className='form-cadastro-wrapper'>
                <div className='user-form-body'>
                    <label className='user-label-nome'>Nome</label>
                    <input  className='user-input-nome'
                        type="text"
                        onChange={(event)=>{
                        setName(event.target.value);
                        
                    }}
                    ></input>
                    <label className='user-label-email'> Email </label>
                    <input  className='user-input-email'
                        type="text"
                        onChange={(event)=>{
                        setEmail(event.target.value);
                        
                    }}
                    ></input> 
                    <label className='user-label-senha'>Senha</label>
                    <input  className='user-input-senha'
                        type="text"
                        onChange={(event)=>{
                        setSenha(event.target.value);
                        
                    }}
                    ></input>
                    <label className='user-label-senha-confirmar'>Confirmar senha</label>
                    <input  className='user-input-senha-confirmar'
                        type="text"
                        onChange={(event)=>{
                        setSenha(event.target.value);
                        
                    }}
                    ></input>
                    <Link to={`../home/${email}`}><button onClick={handleSubmit} className='user-footer'><span className='user-label-footer'>Cadastrar</span></button></Link>

                </div>
            </form>
        </div>
    </>);

   
};


function CustomLink({to,children,...props}){
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path:resolvedPath.pathname,end:true});
    return(
        <li className='links'>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default UserForm;

