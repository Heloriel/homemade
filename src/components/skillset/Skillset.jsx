/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./../../App.scss";
import "./Skillset.scss";
import experience from "../../data/experience";
import learning from "../../data/learning";
import interest from "../../data/interest";

export default (props) => {

	function getSkills(skill) {
		return skill.map( skill => {
			return(
				<img title={skill.name} alt={skill.name} height="30" width="40" src={skill.img} />
			);
		});
	}

	return (
		<>
			<div className="row">
				<p className="Title">
					<i>#Minhas Stacks</i>
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
