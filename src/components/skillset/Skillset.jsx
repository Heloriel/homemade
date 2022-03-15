/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./../../App.scss";
import "./Skillset.scss";
import experience from "../../data/experience";
import hability from "../../data/hability";
import Stack from "./Stack/Stack.jsx";
import SkillBar from "../skillbar/Skillbar.jsx";

export default (props) => {
	function getSkills(skill) {
		return skill.map((skill) => {
			return <Stack img={skill.img} name={skill.name} />;
		});
	}

	return (
		<>
			<div className="row">
				<p className="Title">
					<i>#Conhecimentos</i>
				</p>
			</div>
			<div className="row Skillset-Container p-0">
					<div className="Skillset">{getSkills(experience)}</div>
			</div>
			<div className="row">
				<div className="SB-Container">
					<SkillBar level={hability.english} name="Nível de Inglês" sl1="Básico" sl2="Intermediário" sl3="Avançado" sl4="Fluente / Nativo"/>
				</div>
			</div>
		</>
	);
};
