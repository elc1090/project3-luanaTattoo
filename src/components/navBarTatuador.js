import React,{useState,useEffect} from 'react';
import {Link, useMatch,useResolvedPath} from "react-router-dom";
import './navStyle.css';

/*
    const[tatuadorEmail,setUser] = useState();
    const loggedInUser = localStorage.getItem("user");

    useEffect(() => {
        try {
          const foundUser = JSON.parse(loggedInUser);
          setUser(foundUser);
        }catch (error) {
          console.log("Erro ao analisar o usuário armazenado:", error);
          setUser(null);
        }
    }, [loggedInUser]);

    console.log(loggedInUser);
    */


export default function NavBarTatuador({tatuadorEmail}){

    //<CustomLink to={`/perfilTatuador/${tatuadorEmail}`}>Perfil</CustomLink>

    return <nav className="nav nav-bar">
        <Link to={`/perfilTatuador/${tatuadorEmail}`} className="titulo-site">Tattoo Market</Link>
        <ul className="ul-navbar">
            <CustomLink to={`/orcamentosTatuador/${tatuadorEmail}`}>Orçamentos</CustomLink>
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