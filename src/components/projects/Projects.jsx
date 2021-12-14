/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './Projects.css';
import Card from '../layouts/card/Card.jsx';
import Data from '../../data/projects.js';


export default (props) => {
    return (
        <section className="Project-List">
            <Card title={Data[0].pName} image={Data[0].pImage}>
                {Data[0].desc}
            </Card>
            <Card title={Data[1].pName} image={Data[1].pImage}>
                {Data[1].desc}
            </Card>
            <Card title={Data[2].pName} image={Data[2].pImage}>
                {Data[2].desc}
            </Card>
        </section>
    );
}