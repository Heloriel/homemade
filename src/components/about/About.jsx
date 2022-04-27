/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./../../App.scss";
import "./About.scss";

export default (props) => {
  return (
    <>
      <div className="row">
        <p className="Title">
          <i>#Sobre</i>
        </p>
      </div>
      <div className="row">
        <span className="About-Text p-5">
          <p>
            Tenho 27 Anos, sou estudante de programação e estou cursando a faculdade de <i>"Sistemas para Internet"</i>.
          </p>
          <br />
          <p>Em 2013 tive a experiência de 1 ano em meu primeiro emprego como desenvolvedor full stack com php.</p>
          <br />
          <p>Em 2015 comecei a trabalhar como Designer Gráfico por quase 7 anos e agora estou em processo de transição de volta ao que tenho paixão, técnologia e programação dentro da mesma empresa.</p>
          <br />
          <p>Atualmente sou Técnico em TI e meu foco e minha paixão é por desenvolvimento front-end com JavaScript, React e seu vasto ecossistema.</p>
        </span>
      </div>
    </>
  );
};
