/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Presentation from '../../assets/img/Presentation.svg';
import './Presentation.css';

export default (props) => {
    return(
        <div className="Container">
            <div className="Left">
                <span>Some text</span>
            </div>
            <div className="Right">
                <img src={Presentation} alt="Presentation Mockup" className="Presentation-Image" />
            </div>
        </div>
    );
}
