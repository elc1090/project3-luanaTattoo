import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserForm from './pages/User/userForm'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import TatuadorForm from './pages/TatuadorForm/tatuadorForm';
import UserList from './pages/User/userList';
import TatuadorList from './pages/TatuadorList/tatuadorList';
import CategoriaInsert from './pages/CategoriasList/categoriaInsert';
import OrcamentoNew from './pages/OrcamentoNovo/orcamentoNew';
import TatuadorPage from './pages/TatuadorPage/tatuadorPage';
import TatuadorPerfil from './pages/TatuadorPage/tatuadorPerfilPessoal';
import CategoriaList from './pages/Categorias/categoriaList';
import CategoriaSingle from './pages/CategoriaSingle/categoriaSingle';
import {disableReactDevTools} from '@fvilers/disable-react-devtools';
import Home from './pages/Home/home';
import LoginPage from './pages/Login/loginPage';
import OrcamentoListCliente from './pages/OrcamentoList/orcamentoListCliente'; 
import OrcamentoListTatuador from './pages/OrcamentoList/orcamentoListTatuador';
import HomeTatuador from './pages/Home/homeTatuador';
import WelcomePage from './pages/WelcomePage/welcome';
import OrcamentoSingle from './pages/OrcamentoSingle/orcamentoSingle';
import { StrictMode } from 'react';

if(process.env.NODE_ENV === 'production') disableReactDevTools();

/*
{
        path:"/orcamento/:clientEmail",
        element:<OrcamentoSingle/>,
    },
*/

const router = createBrowserRouter([
    {
        path:"/",
        element:<WelcomePage/>,
    },
    {
        path:"/home/:clientEmail",
        element:<Home/>,
    },
    {
        path:"/userform",
        element:<UserForm/>,
    },
    {
        path:"/userlist",
        element:<UserList/>,
    },
    {
        path:"/tatuadorform",
        element:<TatuadorForm/>,
    },
    {
        path:"/tatuadorlist/:clientEmail",
        element:<TatuadorList/>,
    },
    {
        path:"/categoria/insert",
        element:<CategoriaInsert/>,
    },
    {
        path:"/orcamentoNovo/:tatuadorEmail/:clientEmail",
        element:<OrcamentoNew/>,
    },
    {
        path:"/orcamento/:idOrcamento/:tatuadorEmail",
        element:<OrcamentoSingle/>,
    },
    {
        path:"/categorialist/:clientEmail",
        element:<CategoriaList/>,
    },
    {
        path:"/categoria/:categoriaName/:clientEmail",
        element:<CategoriaSingle/>,
    },
    {
        path:"/tatuador/:tatuadorEmail/:clientEmail",
        element:<TatuadorPage/>,
    },
    {
        path:"/perfilTatuador/:tatuadorEmail",
        element:<TatuadorPerfil/>,
    },
    {
        path:"/orcamentosCliente/:clientEmail",
        element:<OrcamentoListCliente/>,
    },
    {
        path:"/orcamentosTatuador/:tatuadorEmail",
        element:<OrcamentoListTatuador/>,
    },
    {
        path:"/login/:tipoUsuario",
        element:<LoginPage/>,
    },
    {
        path:"/homeTatuador/:tatuadorEmail",
        element:<HomeTatuador/>,
    },



]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
    <RouterProvider router={router}/>,
    </StrictMode>
);

