/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Card.scss";

export default (props) => {
	return (
		<div className="Card">
			<a href={"https://github.com/Heloriel/" + props.url}>
				<div style={{ backgroundImage: `url(${props.image})` }} className="Card-Image"></div>
			</a>
			<p className="Card-Head">{props.title}</p>
			<div className="Card-Body">
				<p>{props.children}</p>
			</div>
			<div className="Card-Footer p-4">
				<p className="Footer-Title">{props.fTitle}</p>
				<br />
				<p className="Footer-Content">{props.footer}</p>
			</div>
		</div>
	);
};
