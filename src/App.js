import './App.css';
import React,{useState, useEffect} from 'react';
import Axios from 'axios';
import  { Route,Routes } from "react-router-dom";
import Navbar from './components/NavBar2';
//import UserForm from './pages/User/userForm';
import TatuadorForm from './pages/TatuadorForm/tatuadorForm';
import Home from './pages/Home/home';
//import UserList from './pages/User/userList';
import TatuadorList from './pages/TatuadorList/tatuadorList';
import CategoriaInsert from './pages/CategoriasList/categoriaInsert';
import OrcamentoNew from './pages/Orcamento/orcamentoNew';
import TatuadorPage from './pages/TatuadorPage/tatuadorPage';
import CategoriaList from './pages/Categorias/categoriaList';
import CategoriaSingle from './pages/CategoriaSingle/categoriaSingle';

function App(){
  return(<>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path="*" element={<Home/>}></Route>
          <Route path="/tatuadorform" element={<TatuadorForm/>}></Route>
          <Route path="/tatuadorlist" element={<TatuadorList/>}></Route>
          <Route path="/categoria/insert" element={<CategoriaInsert/>}></Route>
          <Route path="/orcamento" element={<OrcamentoNew/>}></Route>
          <Route path="/tatuador" element={<TatuadorPage/>}></Route>
          <Route path="/categorialist" element={<CategoriaList/>}></Route>
          <Route path="/categoria/:categoriaName" element={<CategoriaSingle/>}></Route>
          <Route path="/tatuador/:tatuadorName" element={<TatuadorPage/>}></Route>


        </Routes>

      </div>
      </>
  );

}
export default App;
