/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Stack.scss";

export default (props) => {
	return (
		<>
			<div className="Stack-Container">
				<div className="Stack" style={{ backgroundImage: `url(${props.img})` }}></div>
				<p className="Stack-Name">{props.name}</p>
			</div>
		</>
	);
};
