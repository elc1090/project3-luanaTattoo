import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import NavBar from '../../components/NavBar2';
import NavBarTatuador from '../../components/navBarTatuador';
import './singular.css';
import { useParams,Link } from 'react-router-dom';



const TatuadorPage = ()=>{

    const params = useParams();
    const tatuadorEmail = params.tatuadorEmail;
    const clientEmail = params.clientEmail;

    const[tatuador,setTatuador] = useState([]);
   
    useEffect(()=>{
        Axios.get("http://tattomarket-api.onrender.com/tatuador",{params:{tatuadorEmail:tatuadorEmail}}).then((response)=>{
        //Axios.get("http://localhost:3001/tatuador",{params:{tatuadorEmail:tatuadorEmail}}).then((response)=>{
            setTatuador(response.data);
        })
    },[]);
    

    
    return(<>
    <NavBar clientEmail={clientEmail}/>
    <div className='tatuadorPage-wrapper'>
            {tatuador.map((val,key)=>{
                return(<>
                <div key={key}></div>
                <div className='column tatuadorPage-container'>
                    <div class="px-4 pt-0 pb-1 bg-transparent "> 
                        <div class="media align-items-end profile-head bg-transparent"> 
                            <Link to={`../orcamentoNovo/${val.email}/${clientEmail}`}><button className='pedirOrcamento-body'><span className='label-pedirOrcamento'>Pedir Orçamento</span></button></Link>
                            <div class="mr-5 bg-transparent mt-4" >
                                <img src={val.foto_perfil} alt="..." width="250" class="mt-5 rounded mb-5"></img>
                            </div> 
                            <div className='body-nome-singular'>
                                <label className='label-nome-singular'>{val.name}</label>
                            </div>
                            <div className='body-cidade-singular'>
                                <label className='label-cidade-singular'>{val.city}</label>
                            </div>
                            <div className='body-categoria-singular'>
                                <label className='label-categoria-singular'>{val.categoria}</label>
                            </div>
                        </div> 
                    </div> 
                    <div class="py-4 px-4 bg-transparent"> 
                        <div className='body-tatuagensRecentes-singular'>
                                <label className='label-tatuagensRecentes-singular'>Tatuagens Recentes:</label>
                        </div>
                        <div class="bg-transparent row pt-3 "> 
                            <div class="bg-transparent col-lg-3 mb-2 pr-lg-1 ">
                                <img src={val.foto_exemplo1} alt="" class="img-fluid rounded shadow-sm tatuador-img"></img>
                            </div>
                            <div class="bg-transparent col-lg-3 mb-2 pl-lg-1">
                                <img src={val.foto_exemplo2} alt="" class="img-fluid rounded shadow-sm tatuador-img"></img>
                            </div> 
                            <div class="bg-transparent col-lg-3 mb-2 pr-lg-1">
                                <img src={val.foto_exemplo3} alt="" class="img-fluid rounded shadow-sm tatuador-img"></img>
                            </div> 
                            <div class="bg-transparent col-lg-3 mb-2 pl-lg-1">
                                <img src={val.foto_exemplo4} alt="" class="img-fluid rounded shadow-sm tatuador-img "></img>
                            </div> 
                        </div> 
                    </div> 
    
                </div>
                
    
                </>);
            })}
        </div>
        </>);

    
    


/*
   //OBS
   // FABIANO = BLACK WORK          
   // MAICO = OLD SCHOOL @maico_borges          v
   // DANI = GEOMETRICO                 v
   // IGOR = ORIENTAL @igortattoocs         v
   // FLAVIO = REALISMO @flavio_bunker_tattoo       v
   // RODRIGO = FINE LINE @rodrigocosta_tattoo      v
   // ANDREI = PONTILHISMO @andreipagel             v
   // RAFA = MINIMALISTA @rafa.handpoke             v
   // CORVO = AQUARELA @corvo_tattoo
*/
    
};
export default TatuadorPage;
