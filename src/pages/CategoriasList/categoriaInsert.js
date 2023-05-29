import React,{useState} from 'react';
import './forms.css';
import Axios from 'axios';
import NavBar from '../../components/NavBar2'


const CategoriaInsert = ()=>{


    const[name,setName] = useState('');
    const[img,setImg] = useState('');


    const handleSubmit = (event) =>{
        Axios.post("http://localhost:3001/categoria/insert",{name:name,img:img});
    }

    return (<>
        <NavBar/>
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
                    <label>Link Imagem</label>
                    <input 
                        type="text"
                        onChange={(event)=>{
                        setImg(event.target.value);
                        
                    }}
                    ></input>                
                </div>
                <div className='footer'>
                    <input type="submit"></input>
                </div>
            </form>

        </div>


    </>);
};
export default CategoriaInsert;

