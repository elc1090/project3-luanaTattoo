import React from "react";
import {Link, useMatch,useResolvedPath} from "react-router-dom";
import './navStyle.css';

export default function NavBar2(){

    return <nav className="nav">
        <Link to="/" className="titulo-site">Tattoo Market</Link>
        <ul>
        <CustomLink to="/tatuadorlist">Tatuadores</CustomLink>
        <CustomLink to="/categorialist">Categorias</CustomLink>
        <CustomLink to="/orcamento">Novo Orcamento</CustomLink>

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