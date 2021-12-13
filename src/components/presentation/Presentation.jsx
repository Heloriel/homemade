import React from "react";
import Presentation from '../../assets/img/Presentation.svg';
import './Presentation.css';

export default (props) => {
    return(
        <div className="container">
            <img src={Presentation} alt="Presentation Mockup" />
        </div>
    );
}
