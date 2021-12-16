/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import '../../App.css';
import "./Navbar.css";
import Logo from "../../assets/img/Logo.svg";
import { FaLinkedin, FaDiscord, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default (props) => {
	return (
		<nav className={"Navbar " + props.className}>
			<div className="col-3 Logo">
				<img src={Logo} alt="" />
			</div>
			<div className="col-6 Nav-Links">
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
			<div className="col-3 p-0 Social-Links">
				<a href="#"><FaLinkedin /></a>
				<a href="#"><FaGithub /></a>
				<a href="#"><FaDiscord /></a>
				<a href="#"><SiGmail /></a>
			</div>
		</nav>
	);
};
