/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Presentation from '../../assets/img/Presentation.svg';
import "../../App.scss";
import './Presentation.css';

export default (props) => {
    return(
        <div className="row">
            <div className="col-6 Left">
                <div className="Presentation-Text">
                    <h1 className="Slogan">Bring it
                    <br />next level!</h1>
                    <h1>Welcome to my portfolio page!</h1>
                    <p>Here i will show my works as a developer!</p>                    
                </div>
            </div>
            <div className="col-6 Right">
                <img src={Presentation} alt="Presentation Mockup" className="Presentation-Image" />
            </div>
        </div>
    );
}
