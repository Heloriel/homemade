/* eslint-disable import/no-anonymous-default-export */
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
                        <li><a href="#start" className="Active">INÍCIO</a></li>
                        <li><a href="#projects">PROJETOS</a></li>
                        <li><a href="#about">SOBRE</a></li>
                        <li><a href="#contact">CONTATOS</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}