/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "../../App.scss";
import "./Footer.css";
import Logo from "../../assets/img/Logo.svg";
import { FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

export default (props) => {
	return (
		<footer>
			<div className="row">
				<div className="first">
					<img src={Logo} alt="Logo" />
				</div>
				<div className="middle">
					<span className="eCopy">Scriplex Project &copy; 2021</span>
				</div>
				<div className="last">
					<a href="https://www.linkedin.com/in/matheus-andrade-ba2b16226/" rel="noreferrer" target="_blank" className="Social-Block">
						<div className="Inner">
							<FaLinkedinIn />
						</div>
					</a>
					<a href="https://github.com/Heloriel" rel="noreferrer" target="_blank" className="Social-Block">
						<div className="Inner">
							<BsGithub />
						</div>
					</a>
					<a href="https://discord.gg/BYZ8pET" rel="noreferrer" target="_blank" className="Social-Block">
						<div className="Inner">
							<FaDiscord />
						</div>
					</a>
					<a href="mailto:andradematheus.dev@gmail.com" rel="noreferrer" target="_blank" className="Social-Block">
						<div className="Inner">
							<SiGmail />
						</div>
					</a>
				</div>
			</div>
		</footer>
	);
};
