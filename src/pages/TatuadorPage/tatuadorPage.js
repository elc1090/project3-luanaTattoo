import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import NavBar from '../../components/NavBar2'
import './singular.css';
import { useParams } from 'react-router-dom';



const TatuadorPage = ()=>{

    const params = useParams();
    const tatuadorName = params.tatuadorName;

    const[tatuador,setTatuador] = useState([]);
    useEffect(()=>{
        Axios.get("https://tattomarket-api.onrender.com/tatuador",{params:{tatuadorName:tatuadorName}}).then((response)=>{
        //Axios.get("http://localhost:3001/tatuador",{params:{tatuadorName:tatuadorName}}).then((response)=>{
            setTatuador(response.data);
        })
    },[]);

    return(<>
    <NavBar/>
        {tatuador.map((val,key)=>{
            return(<>
            <div key={key}></div>
            <div className='column tatuadorPage-container'>
                <div class="px-4 pt-0 pb-1 bg-transparent "> 
                    <div class="media align-items-end profile-head bg-transparent"> 
                        <div class="profile mr-5 bg-transparent mt-3 ">
                            <img src={val.foto_perfil} alt="..." width="200" class="mt-4 rounded mb-2 img-thumbnail"></img>
                        </div> 
                        <div class="media-body mb-5 text-2B2D42 bg-transparent"> 
                            <h4 class="mt-0 mb-0 bg-transparent">{val.name}</h4> 
                            <p class="small mb-4 bg-transparent"> <i class="fas fa-map-marker-alt mr-2"></i>{val.city}</p> 
                        </div> 
                    </div> 
                </div> 
                <div class="px-4 py-6 bg-transparent"> 
                    <h5 class="mb-0 text-2B2D42 bg-transparent">{val.categoria}</h5>
                </div> 
                <div class="py-4 px-4 bg-transparent"> 
                    <div class="d-flex align-items-center justify-content-between mb-3 bg-transparent">
                        <h5 class="mb-0 text-2B2D42 bg-transparent">Tatuagens recentes</h5> 
                    </div> 
                    <div class="bg-transparent row "> 
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
