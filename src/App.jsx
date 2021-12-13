import React from "react";
import './App.css';

// COMPONENTS LOAD
import Navbar from './components/navbar/Navbar.jsx';
import Presentation from './components/presentation/Presentation.jsx';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return (
        <>
            <Navbar />
            <Presentation />
        </>
    );
}