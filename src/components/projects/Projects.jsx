/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import '../../App.scss';
import './Projects.scss';
import Card from '../card/Card.jsx';
import projects from "../../data/projects.js";
import ProjectStack from "../projectstack/ProjectStack.jsx";


export default (props) => {

    function getProjects(){
        return projects.map(proj => {

            let stackArray = [];

            for(let stk in proj.stack){
                stackArray.push(<ProjectStack name={proj.stack[stk].name} imgUrl={proj.stack[stk].imgUrl} />);
            };

            return(
                <Card title={proj.pName} image={proj.pImage} url={proj.repo} fTitle="Stacks Utilizadas:" footer={stackArray}>
                    {proj.desc}
                </Card>
            );
        })
    }

    return (
        <div>
            <div className="row">
                <p className="Title"><i>#Projetos não comerciais</i></p>
            </div>
            <div className="row">
               { getProjects() }
            </div>
        </div>
    );
}