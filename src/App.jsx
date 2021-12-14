import React from "react";
import './App.css';

// COMPONENTS LOAD
import Navbar from './components/navbar/Navbar.jsx';
import Presentation from './components/presentation/Presentation.jsx';
import Projects from './components/projects/Projects.jsx';
import Footer from "./components/footer/Footer.jsx";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return (
        <>
            <Navbar />
            <Presentation />
            <div className="Content-Inner">
                <Projects />
            </div>
            <Footer />
        </>
    );
}