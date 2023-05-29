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
        Axios.get("http://localhost:3001/tatuador",{params:{tatuadorName:tatuadorName}}).then((response)=>{
            setTatuador(response.data);
        })
    },[]);

    return(<>
    <NavBar/>
    {tatuador.map((val,key)=>{
                return(<>
                 <div key={key}>
                        <div class="row py-5 px-4 "> 
                            <div class="col-md-5 mx-auto"> 
                            <div class="shadow rounded overflow-hidden"> 
                                <div class="px-4 pt-0 pb-1 cover"> 
                                    <div class="media align-items-end profile-head "> 
                                        <div class="profile mr-3 ">
                                            <img src={val.foto_perfil} alt="..." width="130" class="rounded mb-2 img-thumbnail"></img>
                                        </div> 
                                        <div class="media-body mb-5 text-white"> 
                                            <h4 class="mt-0 mb-0">{val.name}</h4> 
                                            <p class="small mb-4"> <i class="fas fa-map-marker-alt mr-2"></i>{val.city}</p> 
                                        </div> 
                                    </div> 
                                </div> 
                                
                                <div class="px-4 py-6"> 
                                    <h5 class="mb-0 text-white">{val.categoria}</h5>
                                </div> 
                                <div class="py-4 px-4"> 
                                    <div class="d-flex align-items-center justify-content-between mb-3">
                                        <h5 class="mb-0 text-white">Tatuagens recentes</h5> 
                                    </div> 
                                    <div class="row"> 
                                        <div class="col-lg-6 mb-2 pr-lg-1">
                                            <img src={val.foto_exemplo1} alt="" className="img-fluid rounded shadow-sm"></img>
                                        </div>
                                        <div class="col-lg-6 mb-2 pl-lg-1">
                                            <img src={val.foto_exemplo2} alt="" class="img-fluid rounded shadow-sm"></img>
                                        </div> 
                                        <div class="col-lg-6 pr-lg-1 mb-2">
                                            <img src={val.foto_exemplo3} alt="" class="img-fluid rounded shadow-sm"></img>
                                        </div> 
                                        <div class="col-lg-6 pl-lg-1">
                                            <img src={val.foto_exemplo4} alt="" class="img-fluid rounded shadow-sm"></img>
                                        </div> 
                                    </div> 
                                </div> 
                            </div> 
                            </div>
                        </div>
                    </div>
                </>);

            })}


    
    
    </>);
/*
<div className='tatuador-name-body-tatuadorPage'>
              <label className='label-tatuadores-tatuadorPage'>{tatuadorName}</label>
    </div>
    <div className='tatuador-body-tatuadorPage'>
        {tatuador.map((val,key)=>{
                return(<>
                <div key={key}>
                    <div className='label-age-tatuadorPage'>
                        <label>{val.age}</label>
                    </div>
                    <div className='label-city-tatuadorPage'>
                        <label>{val.city}</label>
                    </div>
                    <div className='label-categoria-tatuadorPage'>
                        <label>{val.categoria}</label>
                    </div>
                    <img src={val.foto_perfil} className='card__image'></img>

                </div>
                </>);

            })}

    </div>
    

*/


/*




    useEffect(()=>{
        Axios.get("http://localhost:3001/tatuador").then((response)=>{
            setTatuador(response.data);
        })
    },[]);


    return(<>
    <Navbar/>
    <div>
        {tatuador.map((val,key)=>{
            return(<>
            <Navbar/>
            <div key={key}>
                <h1>{val.name}</h1>
                <h2>{val.age}</h2>
                <h2>{val.city}</h2>
                <h2>{val.categoria}</h2>
                <button>Pedir Orcamento</button>
            </div>
            </>);

        })}

    </div>
    
    </>);
    */
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
/*
    return(<>
        <NavBar/>
        <div class="row py-5 px-4"> 
        <div class="col-md-5 mx-auto"> 
        <div class="bg-white shadow rounded overflow-hidden"> 
            <div class="px-4 pt-0 pb-4 cover"> 
                <div class="media align-items-end profile-head"> 
                    <div class="profile mr-3">
                        <img src="https://raw.githubusercontent.com/luanaFOliveira/storeImagesTrab3/main/Fabiano/foto_perfil_fabiano.png" alt="..." width="130" class="rounded mb-2 img-thumbnail"></img>
                    </div> 
                    <div class="media-body mb-5 text-white"> 
                        <h4 class="mt-0 mb-0">Fabiano Junior</h4> 
                        <p class="small mb-4"> <i class="fas fa-map-marker-alt mr-2"></i>Baurueri-SP</p> 
                    </div> 
                </div> 
            </div> 
            
            <div class="px-4 py-3"> 
                <h5 class="mb-0">Sobre</h5>
                <div class="p-4 rounded shadow-sm bg-light"> 
                    <p class="font-italic mb-0">Tatuador</p> 
                    <p class="font-italic mb-0">BLACKWORK</p> 
                </div> 
            </div> 
            <div class="py-4 px-4"> 
                <div class="d-flex align-items-center justify-content-between mb-3">
                    <h5 class="mb-0">Tatuagens recentes</h5> 
                </div> 
                <div class="row"> 
                    <div class="col-lg-6 mb-2 pr-lg-1">
                        <img src="https://raw.githubusercontent.com/luanaFOliveira/storeImagesTrab3/main/Fabiano/foto_exemplo1_fabiano.png" alt="" className="img-fluid rounded shadow-sm"></img>
                    </div>
                    <div class="col-lg-6 mb-2 pl-lg-1">
                        <img src="https://raw.githubusercontent.com/luanaFOliveira/storeImagesTrab3/main/Fabiano/foto_exemplo2_fabiano.png" alt="" class="img-fluid rounded shadow-sm"></img>
                    </div> 
                    <div class="col-lg-6 pr-lg-1 mb-2">
                        <img src="https://raw.githubusercontent.com/luanaFOliveira/storeImagesTrab3/main/Fabiano/foto_exemplo3_fabiano.png" alt="" class="img-fluid rounded shadow-sm"></img>
                    </div> 
                    <div class="col-lg-6 pl-lg-1">
                        <img src="https://raw.githubusercontent.com/luanaFOliveira/storeImagesTrab3/main/Fabiano/foto_exemplo4_fabiano.png" alt="" class="img-fluid rounded shadow-sm"></img>
                    </div> 
                </div> 
            </div> 
        </div> 
        </div>
    </div>
    </>);
    */
};
export default TatuadorPage;
