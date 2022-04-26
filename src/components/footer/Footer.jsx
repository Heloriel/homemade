/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "../../App.scss";
import "./Footer.scss";
// import Logo from "../../assets/img/Logo.svg";
import { FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

export default (props) => {
	return (
		<footer>
			<div className="row">
				<div className="Middle text-start col-6">
					<span className="eCopy">&copy; { new Date().getFullYear() }</span>
				</div>
				<div className="Last text-end col-6">
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
