/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (props) => {
    return(
        <img title={props.name} alt={props.name} height="30" width="40" src={props.imgUrl} />
    );
}