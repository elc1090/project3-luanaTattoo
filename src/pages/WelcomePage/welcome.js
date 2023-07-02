import React,{useState} from 'react';
import './welcome.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faSkull } from '@fortawesome/free-solid-svg-icons'


const WelcomePage = ()=>{
  
   
    return (<>
        <div className='welcome-wrapper'>
                
                <div className='box-usuarios'>
                    <Link to={'/login/cliente'}>
                    <div className='box-cliente-azul'>
                    <div className='box-cliente-vermelho'>
                    <div className='box-cliente'>
                        <FontAwesomeIcon icon={faUser} size="8x" style={{color: "#ffffff",background:"#191919",marginLeft:"4rem",marginTop:"3rem"}} />                        
                        <label className='box-cliente-label'>Cliente</label>
                    </div>
                    </div>
                    </div>
                    </Link>
                    <Link to={'/login/tatuador'}>
                    <div className='box-tatuador-azul'>
                    <div className='box-tatuador-vermelho'>
                    <div className='box-tatuador'>
                        <FontAwesomeIcon icon={faSkull} size="8x" style={{color: "#ffffff",background:"#191919",marginLeft:"4rem",marginTop:"3rem"}} />
                        <label className='box-tatuador-label'>Tatuador</label>
                    </div>
                    </div>
                    </div>
                    </Link>
                </div>
        </div>
    
    </>);

   
};
export default WelcomePage;

