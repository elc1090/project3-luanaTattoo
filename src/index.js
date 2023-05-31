import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import UserForm from './pages/User/userForm'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import TatuadorForm from './pages/TatuadorForm/tatuadorForm';
//import UserList from './pages/User/userList';
import TatuadorList from './pages/TatuadorList/tatuadorList';
import CategoriaInsert from './pages/CategoriasList/categoriaInsert';
import OrcamentoNew from './pages/Orcamento/orcamentoNew';
import TatuadorPage from './pages/TatuadorPage/tatuadorPage';
import CategoriaList from './pages/Categorias/categoriaList';
import CategoriaSingle from './pages/CategoriaSingle/categoriaSingle';
import {disableReactDevTools} from '@fvilers/disable-react-devtools';
import Home from './pages/Home/home';

if(process.env.NODE_ENV === 'production') disableReactDevTools();

const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>,
    },
    /*
    {
        path:"/userform",
        element:<UserForm/>,
    },
    {
        path:"/userlist",
        element:<UserList/>,
    },
    */
    {
        path:"/tatuadorform",
        element:<TatuadorForm/>,
    },
    {
        path:"/tatuadorlist",
        element:<TatuadorList/>,
    },
    {
        path:"/categoria/insert",
        element:<CategoriaInsert/>,
    },
    {
        path:"/orcamento",
        element:<OrcamentoNew/>,
    },
    {
        path:"/tatuador",
        element:<TatuadorPage/>,
    },
    {
        path:"/categorialist",
        element:<CategoriaList/>,
    },
    {
        path:"/categoria/:categoriaName",
        element:<CategoriaSingle/>,
    },
    {
        path:"/tatuador/:tatuadorName",
        element:<TatuadorPage/>,
    },



]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>,
);

