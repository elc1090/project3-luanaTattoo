import React,{useState} from 'react';
import './loginStyle.css';
import Axios from 'axios';
import NavBar from '../../components/NavBar2'
import { Link ,useParams} from 'react-router-dom';


const LoginPage = ()=>{
    
    const params = useParams();
    const tipoUsuario = params.tipoUsuario;
    
    var paginaCadastro;
    var paginaHome;
    var typeSubmit;

    if(tipoUsuario == "tatuador"){
        paginaCadastro = "tatuadorform";
        paginaHome="perfilTatuador";
    }else if(tipoUsuario == "cliente"){
        paginaCadastro = "userform";
        paginaHome="home";
    }

    const[email,setEmail] = useState('');
    const[senha,setSenha] = useState('');
    const [user, setUser] = useState();

    
    const handleSubmitUser = async (event) =>{
        const response = await Axios.post("http://localhost:3001/login/cliente",{email:email,senha:senha});
        setUser(response.data);
        const listUser = response.data;
        
        localStorage.setItem('user',JSON.stringify(listUser.email));
        localStorage.setItem('typeUser',JSON.stringify("cliente"));

    }

    const handleSubmitTatuador = async (event) =>{
        const response = await Axios.post("http://localhost:3001/login/tatuador",{email:email,senha:senha});
        setUser(response.data);
        const listUser = response.data;
        localStorage.setItem('user',JSON.stringify(listUser.email));
        localStorage.setItem('typeUser',JSON.stringify("tatuador"));
    }

   const handleSubmit = (event) => {
        if(tipoUsuario == "tatuador"){
            handleSubmitTatuador(event);
        }else if(tipoUsuario == "cliente"){
            handleSubmitUser(event);
        }
   }

    
    
    return (<>
    <div className='login-form'>
            <div className='login-title-body'>
                <label className='login-label-title'>Login</label>
            </div>
            <form className='form-login-wrapper'>
                <div className='login-form-body'>
                    <label className='login-label-email'> Email </label>
                    <input  className='login-input-email'
                        type="text"
                        onChange={(event)=>{
                        setEmail(event.target.value);
                        
                    }}
                    ></input> 
                    <label className='login-label-senha'>Senha</label>
                    <input  className='login-input-senha'
                        type="password"
                        onChange={(event)=>{
                        setSenha(event.target.value);
                        
                    }}
                    ></input>
                    <Link to={`../${paginaHome}/${email}`}><button onClick={handleSubmit} className='login-footer'><span className='login-label-footer'>Login</span></button></Link>
                    <Link to={`../${paginaCadastro}`}><button  className='cadastro-footer'><span className='cadastro-label-footer'>Cadastre-se</span></button></Link>

                </div>
            </form>
        </div>
    </>);

   
};
export default LoginPage;

