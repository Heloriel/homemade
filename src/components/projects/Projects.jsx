/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import '../../App.scss';
import './Projects.css';
import Card from '../card/Card.jsx';
import Data from '../../data/projects.js';
import projects from "../../data/projects.js";


export default (props) => {

    function getProjects(){
        return projects.map(proj => {
            return(
                <Card title={proj.pName} image={proj.pImage}>
                    {proj.desc}
                </Card>
            );
        })
    }

    return (
        <div>
            <div className="row">
                <p className="Title"><i>#Projetos</i></p>
            </div>
            <div className="row">
               { getProjects() }
            </div>
        </div>
    );
}