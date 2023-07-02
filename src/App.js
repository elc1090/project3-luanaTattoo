import './App.css';
import React,{useState, useEffect} from 'react';
import Axios from 'axios';
import  { Route,Routes } from "react-router-dom";
import Navbar from './components/NavBar2';
import UserForm from './pages/User/userForm';
import TatuadorForm from './pages/TatuadorForm/tatuadorForm';
import Home from './pages/Home/home';
//import UserList from './pages/User/userList';
import TatuadorList from './pages/TatuadorList/tatuadorList';
import CategoriaInsert from './pages/CategoriasList/categoriaInsert';
import OrcamentoNew from './pages/OrcamentoNovo/orcamentoNew';
import TatuadorPage from './pages/TatuadorPage/tatuadorPage';
import TatuadorPerfil from './pages/TatuadorPage/tatuadorPerfilPessoal';
import CategoriaList from './pages/Categorias/categoriaList';
import CategoriaSingle from './pages/CategoriaSingle/categoriaSingle';
import LoginPage from './pages/Login/loginPage';
import OrcamentoListTatuador from './pages/OrcamentoList/orcamentoListTatuador'; 
import OrcamentoListCliente from './pages/OrcamentoList/orcamentoListCliente';
import HomeTatuador from './pages/Home/homeTatuador';
import WelcomePage from './pages/WelcomePage/welcome';
import OrcamentoSingle from './pages/OrcamentoSingle/orcamentoSingle';

function App(){

  //<Route path="/orcamento/:tatuadorName" element={<OrcamentoList/>}></Route>
  //<Route path="/orcamentosTatuador" element={<OrcamentoListTatuador/>}></Route>
  // <Route path="/orcamento/:clientEmail" element={<OrcamentoSingle/>}></Route>


  return(<>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path="*" element={<WelcomePage/>}></Route>
          <Route path="/home/:clientEmail" element={<Home/>}></Route>
          <Route path="/tatuadorform" element={<TatuadorForm/>}></Route>
          <Route path="/userform" element={<UserForm/>}></Route>
          <Route path="/tatuadorlist/:clientEmail" element={<TatuadorList/>}></Route>
          <Route path="/categoria/insert" element={<CategoriaInsert/>}></Route>
          <Route path="/orcamentoNovo/:tatuadorEmail/:clientEmail" element={<OrcamentoNew/>}></Route>
          <Route path="/orcamento/:idOrcamento/:tatuadorEmail" element={<OrcamentoSingle/>}></Route>
          <Route path="/categorialist/:clientEmail" element={<CategoriaList/>}></Route>
          <Route path="/categoria/:categoriaName/:clientEmail" element={<CategoriaSingle/>}></Route>
          <Route path="/tatuador/:tatuadorEmail/:clientEmail" element={<TatuadorPage/>}></Route>
          <Route path="/perfilTatuador/:tatuadorEmail" element={<TatuadorPerfil/>}></Route>
          <Route path="/orcamentosCliente/:clientEmail" element={<OrcamentoListCliente/>}></Route>
          <Route path="/orcamentosTatuador/:tatuadorEmail" element={<OrcamentoListTatuador/>}></Route>
          <Route path="/login/:tipoUsuario" element={<LoginPage/>}></Route>
          <Route path="/homeTatuador/:tatuadorEmail" element={<HomeTatuador/>}></Route>

        </Routes>
      </div>
      </>
  );

}
export default App;
