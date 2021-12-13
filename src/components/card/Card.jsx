/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './Card.css';


export default (props) => {
    return (
        <div className="Card">
            <div className="Card-Head">
                {props.head}
            </div>
            <div className="Card-Body">
                {props.body}
            </div>
            <div className="Card-Footer">
                {props.footer}
            </div>
        </div>
    );
}