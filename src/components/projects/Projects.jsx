/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './Projects.css';
import Card from '../card/Card.jsx';


export default (props) => {
    return (
        <section>
            <Card head="teste 4">
                Teste
            </Card>
            <Card body="teste 5">
                Teste 2
            </Card>
            <Card footer="teste 6">
                Teste 3
            </Card>
        </section>
    );
}