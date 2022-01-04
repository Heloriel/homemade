/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Presentation from '../../assets/img/profile_pic.jpg';
import "../../App.scss";
import './Presentation.scss';
import { FaReact } from 'react-icons/fa';

export default (props) => {
    return(
        <div className="row Presentation-Container mx-auto">
            <div className="col-3 col-sm Right">
                <div style={{backgroundImage: `url(${Presentation})`}} alt="Presentation Mockup" className="Presentation-Image" ></div>
            </div>
            <div className="col-5 col-sm Left">
                <div className="Presentation-Text">
                    <p className="Small-Intro">Olá Mundo!</p>
                    <h1 className="Main-Text">Bem vindo ao meu portfólio.</h1>
                    <p className="Sub-Text">Me chamo Matheus e aqui eu vou apresentar um pouco do meu trabalho como desenvolvedor.</p>
                    <div className="Presentation-Buttons">
                        <a href="https://github.com/Heloriel" className="btn btn-blue" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/matheus-andrade-ba2b16226/" target="_blank" className="btn btn-outline-blue" rel="noreferrer">LinkedIn</a>
                    </div>                   
                </div>
            </div>
        </div>
    );
}
