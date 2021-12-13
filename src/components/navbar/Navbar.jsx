import React from "react";
import './Navbar.css';
import Logo from '../../assets/img/Logo.svg'

export default (props) => {
    return(
        <nav className="Navbar">
            <div className="Navbar-Inner">
                <div className="Logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="Nav-Links">
                    <ul>
                        <li><a href="#">INÍCIO</a></li>
                        <li><a href="#">PROJETOS</a></li>
                        <li><a href="#">SOBRE</a></li>
                        <li><a href="#">CONTATOS</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}