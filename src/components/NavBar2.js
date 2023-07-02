import React from "react";
import {Link, useMatch,useResolvedPath} from "react-router-dom";
import './navStyle.css';

export default function NavBar2({clientEmail}){

    return <nav className="nav nav-bar">
        <Link to={`/home/${clientEmail}`} className="titulo-site">Tattoo Market</Link>
        <ul className="ul-navbar">
        <CustomLink to={`/tatuadorlist/${clientEmail}`}>Tatuadores</CustomLink>
        <CustomLink to={`/categorialist/${clientEmail}`}>Categorias</CustomLink>
        <CustomLink to={`/orcamentosCliente/${clientEmail}`}>Orçamentos</CustomLink>
        <CustomLink to="/">Logout</CustomLink>
        </ul>
    </nav>

}

function CustomLink({to,children,...props}){
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path:resolvedPath.pathname,end:true});
    return(
        <li className='links'>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}