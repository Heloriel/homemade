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
            Tenho 26 Anos, sou estudante de programação e estou cursando a faculdade de <i>"Sistemas para Internet"</i>.
          </p>
          <br />
          <p>Em 2014 tive a experiência de 1 ano em meu primeiro emprego como desenvolvedor full stack com php, hoje meu foco e minha paixão é por desenvolvimento front-end com JavaScript, React e seu vasto ecossistema.</p>
          <br />
          <p>Atualmente trabalho como Designer Gráfico.</p>
        </span>
      </div>
    </>
  );
};
