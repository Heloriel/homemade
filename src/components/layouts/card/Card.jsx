/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './Card.scss';


export default (props) => {
    return (
        <div className="Card">
            <div style={{backgroundImage: `url(${props.image})`}} className="Card-Image"></div>
            <p className="Card-Head">
                {props.title}
            </p>
            <div className="Card-Body">
                {props.children}
            </div>
        </div>
    );
}