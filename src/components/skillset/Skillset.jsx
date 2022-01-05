/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./../../App.scss";
import "./Skillset.scss";

export default (props) => {
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
						<img title="HTML5" alt="HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
						<img title="CSS3" alt="CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
						<img title="Javascript" alt="Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
						<img title="Bootstrap" alt="Bootstrap" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg" />
						<img title="PHP" alt="PHP" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-plain.svg" />
						<img title="Python" alt="Python" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-plain.svg" />
						<img title="Laravel 8" alt="Laravel 8" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain.svg" />
					</div>
				</div>
				<div className="Middle">
					<p>Atualmente Estudando:</p>
					<div className="Skillset">
						<img align="center" title="ElectronJS" alt="ElectronJS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg" />
						<img align="center" title="React" alt="React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" />
						<img align="center" title="Sass" alt="Sass" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" />
					</div>
				</div>
				<div className="Last">
					<p>Interesse em aprender:</p>
					<div className="Skillset">
						<img align="center" title="TypeScript" alt="TypeScript" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg" />
						<img align="center" title="VueJS" alt="VueJS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg" />
						<img align="center" title="NextJS" alt="NextJS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-line.svg" />
					</div>
				</div>
			</div>
		</>
	);
};
