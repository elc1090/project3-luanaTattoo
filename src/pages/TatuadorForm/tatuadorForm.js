import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './tatuadorForm.css';
import Axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import NavBar from '../../components/NavBar2'


//var Multiselect = require('react-bootstrap-multiselect');


const TatuadorForm = ()=>{
    
    const[name,setName] = useState('');
    const[age,setAge] = useState(0);
    const[email,setEmail] = useState('');
    const[senha,setSenha] = useState('');
    const[city,setCity] = useState('');
    //categorias vai ter q ser de selecionar varias
    const[categoria,setCategoria] = useState('');

    const[braco,setBraco] = useState(0);
    const[perna,setPerna] = useState(0);
    const[torax,setTorax] = useState(0);
    const[mao,setMaos] = useState(0);
    const[pe,setPe] = useState(0);
    const[costas,setCostas] = useState(0);
    const[cabeca,setCabeca] = useState(0);
    const[tamanho,setTam] = useState(0);
    const[cor,setCor] = useState('');

    const[perfil,setFotoPerfil] = useState('');
    const[exemplo1,setFotoExemplo1] = useState('');
    const[exemplo2,setFotoExemplo2] = useState('');
    const[exemplo3,setFotoExemplo3] = useState('');
    const[exemplo4,setFotoExemplo4] = useState('');


    
    const submitTatuador = (event) =>{
        Axios.post("http://localhost:3001/tatuadorform/insert",{name:name,age:age,city:city,email:email,senha:senha,categoria:categoria,foto_perfil:perfil,foto_exemplo1:exemplo1,foto_exemplo2:exemplo2,foto_exemplo3:exemplo3,foto_exemplo4:exemplo4});
    }

    const submitOrcamento = (event) =>{
        Axios.post("http://localhost:3001/orcamento/insert",{preco_local_braco:braco,preco_local_perna:perna,preco_local_torax:torax,preco_local_mao:mao,preco_local_pe:pe,preco_local_costas:costas,preco_local_cabeca:cabeca,tamanho:tamanho,cor:cor});
    }
    const list= [{value:'One',selected:true},{value:'Two'},{value:'Three'},{value:'Four',label:'Four Label'}];

    return(<>
        <NavBar/>
        <div className='form'>
            <div className='title-body'>
                <label className='label-title'>Cadastrar Tatuador</label>
            </div>
                <form >

                    <div className='form-body'>
                        <label className='label-nome'>Nome</label>
                        <input  className='input-nome'
                            type="text"
                            onChange={(event)=>{
                            setName(event.target.value);
                            
                        }}
                        ></input>
                        <label className='label-idade'>Idade</label>
                        <input className='input-idade'
                            type="number"
                            onChange={(event)=>{
                            setAge(event.target.value);
                            
                        }}
                        ></input>
                        <label className='label-email'> Email </label>
                        <input  className='input-email'
                            type="text"
                            onChange={(event)=>{
                            setEmail(event.target.value);
                            
                        }}
                        ></input> 
                        <label className='label-cidade'>Cidade</label>
                        <input  className='input-cidade'
                            type="text"
                            onChange={(event)=>{
                            setCity(event.target.value);
                            
                        }}
                        ></input>
                        <label className='label-categoria'> Categoria 
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
                    </div>
                    <div className='footer'>
                        <button  onClick={[submitTatuador,submitOrcamento]} className='label-footer'>Enviar</button>
                    </div>
                </form>
                <form>
                        <div className='title-form-orcamento'>
                            <label className='label-form-orcamento'>Caracterizar Orçamento</label>
                        </div>
                        <label className='label-braco'>Braço</label>
                        <input  className='input-braco'
                            type="text"
                            onChange={(event)=>{
                            setBraco(event.target.value);
                            
                        }}
                        ></input>
                        <label className='label-perna'>Perna</label>
                        <input className='input-perna'
                            type="number"
                            onChange={(event)=>{
                            setPerna(event.target.value);
                            
                        }}
                        ></input>
                        <label className='label-costas'>Costas</label>
                        <input  className='input-costas'
                            type="text"
                            onChange={(event)=>{
                            setCostas(event.target.value);
                            
                        }}
                        ></input> 
                        <label className='label-torax'>Torax</label>
                        <input  className='input-torax'
                            type="text"
                            onChange={(event)=>{
                            setTorax(event.target.value);
                            
                        }}
                        ></input>
                        <label className='label-cabeca'>Cabeça</label>
                        <input  className='input-cabeca'
                            type="text"
                            onChange={(event)=>{
                            setCabeca(event.target.value);
                            
                        }}
                        ></input>
                        <label className='label-mao'>Maos</label>
                        <input className='input-mao'
                            type="number"
                            onChange={(event)=>{
                            setMaos(event.target.value);
                            
                        }}
                        ></input>
                        <label className='label-pe'>Pé</label>
                        <input  className='input-pe'
                            type="text"
                            onChange={(event)=>{
                            setPe(event.target.value);
                            
                        }}
                        ></input> 
                        <label className='label-form-tamanho'>Tamanho</label>
                        <input  className='input-form-tamanho'
                            type="text"
                            onChange={(event)=>{
                            setTam(event.target.value);
                            
                        }}
                        ></input>
                        <label className='label-form-cor'> Cor 
                            <select 
                                onChange={(event)=>{
                                setCategoria(event.target.value);
                            }}>
                                <option value="Preto">Preto</option>
                                <option value="Colorido">Colorido</option>
                            </select>
                        </label>     
                </form>
    
            </div>
        
        </>);

    /*
    return (<>
        <NavBar/>
        <div className="form-body">
            <div className="row container-forms">
                    <div className='col-6'>
                        <div className='form-tat'>
                            <form onSubmit={submitTatuador}>
                                <div className='form-tat-body'>
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
                                    <label>Cidade</label>
                                    <input 
                                        type="text"
                                        onChange={(event)=>{
                                        setCity(event.target.value);
                                        
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
                                    <label>Foto de perfil</label>
                                    <input 
                                        type="text"
                                        onChange={(event)=>{
                                        setFotoPerfil(event.target.value);
                                        
                                    }}
                                    ></input>
                                    <label>Foto exemplo 1</label>
                                    <input 
                                        type="text"
                                        onChange={(event)=>{
                                        setFotoExemplo1(event.target.value);
                                        
                                    }}
                                    ></input>
                                    <label>Foto exemplo 2</label>
                                    <input 
                                        type="text"
                                        onChange={(event)=>{
                                        setFotoExemplo2(event.target.value);
                                        
                                    }}
                                    ></input>  
                                    <label>Foto exemplo 3</label>
                                    <input 
                                        type="text"
                                        onChange={(event)=>{
                                        setFotoExemplo3(event.target.value);
                                        
                                    }}
                                    ></input>  
                                    <label>Foto exemplo 4</label>
                                    <input 
                                        type="text"
                                        onChange={(event)=>{
                                        setFotoExemplo4(event.target.value);
                                        
                                    }}
                                    ></input>  
                                        
                                     <label> Categoria: 
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
                                </div>
                                <div className='footer'>
                                    <input type="submit"></input>
                                </div>
                            </form>

                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="form_orcamento">
                            <form onSubmit={submitOrcamento}>
                            <div className='form-orcamento-body'>
                                    <label>Braco</label>
                                    <input 
                                        type="number"
                                        onChange={(event)=>{
                                        setBraco(event.target.value);
                                        
                                    }}
                                    ></input>                
                                    <label>Perna</label>
                                    <input 
                                        type="number"
                                        onChange={(event)=>{
                                        setPerna(event.target.value);
                                        
                                    }}
                                    ></input>
                                    <label>Costas</label>
                                    <input 
                                        type="number"
                                        onChange={(event)=>{
                                        setCostas(event.target.value);
                                        
                                    }}
                                    ></input>      
                                    <label>Cabeca</label>
                                    <input 
                                        type="number"
                                        onChange={(event)=>{
                                        setCabeca(event.target.value);
                                        
                                    }}
                                    ></input>                  
                                    <label>Torax</label>
                                    <input 
                                        type="number"
                                        onChange={(event)=>{
                                        setTorax(event.target.value);
                                        
                                    }}
                                    ></input>    
                                    <label>Maos</label>
                                    <input 
                                        type="number"
                                        onChange={(event)=>{
                                        setMaos(event.target.value);
                                        
                                    }}
                                    ></input> 
                                    <label>Pe</label>
                                    <input 
                                        type="number"
                                        onChange={(event)=>{
                                        setPe(event.target.value);
                                        
                                    }}
                                    ></input>  
                                    <label>Tamanho</label>
                                    <input 
                                        type="number"
                                        onChange={(event)=>{
                                        setTam(event.target.value);
                                        
                                    }}
                                    ></input>  
                                    <label>Cor</label>
                                    <input 
                                        type="text"
                                        onChange={(event)=>{
                                        setCor(event.target.value);
                                        
                                    }}
                                    ></input>        
                                </div>
                                <div className='footer'>
                                    <input type="submit"></input>
                                </div>
                            </form>

                        </div>


                </div>
            </div>
        </div>
        


    </>);
*/
  
};
export default TatuadorForm;







/*
<Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            Dropdown Button
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item >Action</Dropdown.Item>
                                            <Dropdown.Item >Another action</Dropdown.Item>
                                            <Dropdown.Item >Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
*/