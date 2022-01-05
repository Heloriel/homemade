import React from "react";
import './App.scss';

// COMPONENTS LOAD
import Navbar from './components/navbar/Navbar.jsx';
import Presentation from './components/presentation/Presentation.jsx';
import Projects from './components/projects/Projects.jsx';
import Footer from "./components/footer/Footer.jsx";
import Skillset from "./components/skillset/Skillset.jsx";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return (
        <div className="Content">
            <section className="row m-0" id="start">
                <Navbar />
            </section>
            <section className="row">
                <Presentation />
            </section>
            <hr className="Separator" id="skills" />
            <section className="row">
                <Skillset />   
            </section>
            <hr className="Separator" id="projects" />
            <section className="row">
                <Projects />
            </section>
            <section className="row m-0">
                <Footer />
            </section>
        </div>
    );
}