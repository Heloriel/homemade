/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import "../../App.scss";
import "./Navbar.scss";
import Logo from "../../assets/img/Logo.svg";
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
					<img src={Logo} alt="" className="Logo" />
				</div>
				<div className="col-6 Desktop-Nav d-none d-medium">
					<ul>
						<li>
							<a href="#start">INÍCIO</a>
						</li>
						<li>
							<a href="#about">SOBRE</a>
						</li>
						<li>
							<a href="#skills">STACKS</a>
						</li>
						<li>
							<a href="#projects">PROJETOS</a>
						</li>
						<li>
							<a href="mailto:andradematheus.dev@gmail.com">CONTATO</a>
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
					<li>
						<a href="#start">INÍCIO</a>
					</li>
					<li>
						<a href="#about">SOBRE</a>
					</li>
					<li>
						<a href="#skills">STACKS</a>
					</li>
					<li>
						<a href="#projects">PROJETOS</a>
					</li>
					<li>
						<a href="mailto:andradematheus.dev@gmail.com">CONTATO</a>
					</li>
				</ul>
			</div>
		</>
	);
};
