/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "../../App.scss";
import "./Skillbar.scss";

export default (props) => {
	return (
		<>
			<div className="text-left">
				<p className="Hability-Title">{props.name ? props.name + ":" : ""}</p>
				<div className="SkillBar">
					<div className={props.level >= 1 ? "first-active" : ""}><span>{props.sl1}</span></div>
					<div className={props.level >= 2 ? "second-active" : ""}><span>{props.sl2}</span></div>
					<div className={props.level >= 3 ? "third-active" : ""}><span>{props.sl3}</span></div>
					<div className={"last " + (props.level >= 4 ? "last-active" : "")}><span>{props.sl4}</span></div>
				</div>
			</div>
		</>
	);
};
