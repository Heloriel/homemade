import React from "react";
import "./App.scss";

// COMPONENTS LOAD
import Navbar from "./components/navbar/Navbar.jsx";
import Presentation from "./components/presentation/Presentation.jsx";
import About from "./components/about/About.jsx";
import Projects from "./components/projects/Projects.jsx";
import Footer from "./components/footer/Footer.jsx";
import Skillset from "./components/skillset/Skillset.jsx";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
	return (
		<div className="Content">
			<hr className="Section-Marker" id="start" />
			<section className="row m-0">
				<Navbar />
			</section>
			<section className="row">
				<Presentation />
			</section>
			<hr className="Section-Marker" id="about" />
			<hr className="Separator" />
			<section className="row">
				<About />
			</section>
			<hr className="Section-Marker" id="skills" />
			<hr className="Separator" />
			<section className="row">
				<Skillset />
			</section>
			<hr className="Section-Marker" id="projects" />
			<hr className="Separator" />
			<section className="row">
				<Projects />
			</section>
			<section className="row m-0">
				<Footer />
			</section>
		</div>
	);
};
