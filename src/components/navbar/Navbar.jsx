<<<<<<< HEAD
/* eslint-disable jsx-a11y/anchor-is-valid */
=======
<<<<<<< HEAD
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import '../../App.scss';
import "./Navbar.scss";
import Logo from "../../assets/img/Logo.svg";
import { FaLinkedin, FaDiscord, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AiOutlineMenu } from "react-icons/ai";

export default (props) => {
	return (
		<nav className={"Navbar"}>
			<div className="col-6 Logo-Container p-0">
				<img src={Logo} alt="" className="Logo" />
			</div>
			{/* <div className="col-6 Nav-Links d-none">
				<ul>
					<li>
						<a href="#start" className="Active">
							INÍCIO
						</a>
					</li>
					<li>
						<a href="#projects">PROJETOS</a>
					</li>
					<li>
						<a href="#about">SOBRE</a>
					</li>
					<li>
						<a href="#contact">CONTATOS</a>
					</li>
				</ul>
			</div>
			<div className="col-3 p-0 Social-Links d-sm-none">
				<a href="/"><FaLinkedin /></a>
				<a href="/"><FaGithub /></a>
				<a href="/"><FaDiscord /></a>
				<a href="/"><SiGmail /></a>
			</div> */}
			<div className="col-6 Mobile-Nav p-0">
				<AiOutlineMenu />
			</div>
		</nav>
	);
};
=======
>>>>>>> a5841aa0c8605a8cc5c5a8dd6a5523a7982a33d2
/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import "../../App.scss";
import "./Navbar.scss";
import Logo from "../../assets/img/Logo.svg";
import { FaLinkedin, FaDiscord, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AiOutlineMenu } from "react-icons/ai";
import {CgClose} from "react-icons/cg";

export default (props) => {
	const [menuVisible, toggleMenu] = useState(false);

	const toggleClass = () => {
		toggleMenu(!menuVisible);
	};

	return (
		< >
		<nav className={"Navbar"}>
			<div className="col-6 Logo-Container p-0">
				<img src={Logo} alt="" className="Logo" />
			</div>
			<div className="col-6 Mobile-Nav-Toggle p-0">
				<a href="#" onClick={toggleClass}>
					{menuVisible ? <CgClose /> : <AiOutlineMenu />}
				</a>
			</div>
			{/* <div className="col-3 p-0 Social-Links d-sm-none">
					<a href="/"><FaLinkedin /></a>
					<a href="/"><FaGithub /></a>
					<a href="/"><FaDiscord /></a>
					<a href="/"><SiGmail /></a>
				</div>				 */}
		</nav>
		<div className={menuVisible ? "Mobile-Nav-Menu" : "Mobile-Nav-Menu-Closed"}>
		<ul>
			<li>
				<a href="#start" className="Active">
					INÍCIO
				</a>
			</li>
			<li>
				<a href="#projects">PROJETOS</a>
			</li>
			<li>
				<a href="#about">SOBRE</a>
			</li>
			<li>
				<a href="#contact">CONTATOS</a>
			</li>
		</ul>
	</div>
	</>
	);
};
>>>>>>> 6c9b69b64c08a2359ec99042454e64d2c9f89cb2
