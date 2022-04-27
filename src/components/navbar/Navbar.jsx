/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import "../../App.scss";
import "./Navbar.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { CgClose } from "react-icons/cg";

export default (props) => {
	const [menuVisible, toggleMenu] = useState(false);

	const toggleClass = () => {
		toggleMenu(!menuVisible);
	};

	return (
		<>
			<nav className={"Navbar"} id="navbar">
				<div className="col-6 Logo-Container p-0">
					<span className="Logo" title="Imagine aqui uma logo maneira.">&#60;MeuPortfólio /&#62;</span>
				</div>
				<div className="col-6 Desktop-Nav d-none d-medium">
					<ul>
						<li key="dNav1">
							<a role="button" href="#start" id="nav-start">INÍCIO</a>
						</li>
						<li key="dNav2">
							<a role="button" href="#about" id="nav-about">SOBRE</a>
						</li>
						<li key="dNav3">
							<a role="button" href="#skills" id="nav-skills">STACKS</a>
						</li>
						<li key="dNav4">
							<a role="button" href="#projects" id="nav-projects">PROJETOS</a>
						</li>
						<li key="dNav5" title="Enviar E-Mail">
							<a href="mailto:andradematheus.dev@gmail.com" className="btn btn-blue btn-contact">CONTATO</a>
						</li>
					</ul>
				</div>

				{/* MOBILE MENU TOGGLE */}
				<div className="col-6 Mobile-Nav-Toggle p-0 d-none d-mobile">
					<a role="button" onClick={toggleClass}>
						{menuVisible ? <CgClose /> : <AiOutlineMenu />}
					</a>
				</div>
			</nav>

			{/* MOBILE MENU */}
			<div className={menuVisible ? "Mobile-Nav-Menu" : "Mobile-Nav-Menu-Closed"}>
				<ul>
					<li key="mNav1">
						<a role="button" href="#start" onClick={() => toggleMenu(false)}>INÍCIO</a>
					</li>
					<li key="mNav2">
						<a role="button" href="#about" onClick={() => toggleMenu(false)}>SOBRE</a>
					</li >
					<li key="mNav3">
						<a role="button" href="#skills" onClick={() => toggleMenu(false)}>STACKS</a>
					</li>
					<li key="mNav4">
						<a role="button" href="#projects" onClick={() => toggleMenu(false)}>PROJETOS</a>
					</li>
					<li key="mNav5" title="Enviar E-Mail">
						<a href="mailto:andradematheus.dev@gmail.com" onClick={() => toggleMenu(false)}>CONTATO</a>
					</li>
				</ul>
			</div>
		</>
	);
};
