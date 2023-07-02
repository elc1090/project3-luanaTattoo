import React from "react";
import {Link, useMatch,useResolvedPath} from "react-router-dom";
import './tabStyle.css';

export default function NavTab(){

    return <nav >
       <ul class="nav nav-tabs">
            <CustomLink to="/tatuadorForm">Tatuador</CustomLink>
            <CustomLink to="/userform">Cliente</CustomLink>
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