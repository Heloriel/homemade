/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./../../App.scss";
import "./Skillset.scss";
import experience from "../../data/experience";
import learning from "../../data/learning";
import interest from "../../data/interest";
import Stack from "./Stack/Stack.jsx";

export default (props) => {

	function getSkills(skill) {
		return skill.map( skill => {
			return(
				<Stack img={skill.img} name={skill.name} />
			);
		});
	}

	return (
		<>
			<div className="row">
				<p className="Title">
					<i>#Habilidades</i>
				</p>
			</div>
			<div className="row Skillset-Container p-0">
				<div className="First">
					<p>Conhecimento em:</p>
					<div className="Skillset">
						{ getSkills(experience) }
					</div>
				</div>
				<div className="Middle">
					<p>Atualmente Estudando:</p>
					<div className="Skillset">
						{ getSkills(learning) }
					</div>
				</div>
				<div className="Last">
					<p>Interesse em aprender:</p>
					<div className="Skillset">
						{ getSkills(interest) }
					</div>
				</div>
			</div>
		</>
	);
};
