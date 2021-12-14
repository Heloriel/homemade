/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './Card.css';


export default (props) => {
    return (
        <div className="Card">
            <div style={{backgroundImage: `url(${props.image})`}} className="Card-Image"></div>
            <h3 className="Card-Head">
                {props.title}
            </h3>
            <div className="Card-Body">
                {props.children}
            </div>
        </div>
    );
}