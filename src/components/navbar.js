import React from "react";
import {Link, useMatch,useResolvedPath} from "react-router-dom";
import './styles.css';
export default function Navbar(){

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
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}