/* eslint-disable jsx-a11y/anchor-is-valid */
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
			<div className="col-8 Logo-Container p-0">
				<img src={Logo} alt="" className="Logo" />
			</div>
			<div className="col-4 Mobile-Nav-Toggle p-0">
				<a href="#" onClick={toggleClass}>
					{menuVisible ? <CgClose /> : <AiOutlineMenu />}
				</a>
			</div>
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
			<li className="Social-Links-Menu">
			<div className="Social-Links">
					<a href="/"><FaLinkedin /></a>
					<a href="/"><FaGithub /></a>
					<a href="/"><FaDiscord /></a>
					<a href="/"><SiGmail /></a>
				</div>				
			</li>
		</ul>
	</div>
	</>
	);
};
