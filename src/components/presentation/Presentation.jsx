/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Presentation from '../../assets/img/Presentation.svg';
import "../../App.scss";
import './Presentation.scss';

export default (props) => {
    return(
        <div className="row">
            <div className="col-6 Left">
                <div className="Presentation-Text">
                    <h1 className="Slogan">BRING IT TO THE NEXT LEVEL!</h1>
                    <h1 className="Subtext">Welcome to my portfolio page!</h1>
                    <p className="Subtext">Here i will show you some of my works as a developer!</p>                    
                </div>
            </div>
            <div className="col-6 Right">
                <img src={Presentation} alt="Presentation Mockup" className="Presentation-Image" />
            </div>
        </div>
    );
}
