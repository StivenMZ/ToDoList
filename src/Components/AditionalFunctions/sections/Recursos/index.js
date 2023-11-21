import React, { useState, useContext, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const SectionsResources = styled.section`
  width: 100%;
  height: 100%;
  min-height: 50vh;
  max-height: 60vh;


`;


const ArticleResource = styled.article`
  display: flex;
  flex-direction: column;
  padding: 0.4%;
  overflow-wrap: break-word;
  width: 100%;
  background-color: ${({theme}) => theme.SectionBGcolor};
  border-radius: 1rem;
  height: 100%;
  overflow-y: auto;

  @media screen and (max-width: 300px) {
width: 99%
}

`;

const TitleResource = styled.h4`
  color:  ${({ theme }) => theme.TitleResourceColor};
  font-weight: bold;
  font-size: 1.2rem;



  @media screen and (max-width: 1199px) {
 font-size :1.4rem ;
}

@media screen and (max-width: 768px) {
font-size: 1.8rem;
}

`;

const PhResource = styled.p`
  color: ${({ theme }) => theme.PhResource};
  margin: 1% 0;

  @media screen and (max-width: 1199px) {
 font-size :1.17rem ;
}

@media screen and (max-width: 768px) {
font-size: 1.6rem;
}

`;

const TitleResourceTwo = styled.h5`
  color:  ${({ theme }) => theme.TitleResourceColor};
  margin: 1% 0 2% 0;
  font-size: 1.1rem;
  font-weight: bold;

  @media screen and (max-width: 1199px) {
 font-size :1.2rem ;
}


@media screen and (max-width: 768px) {
font-size: 1.7rem;
}


`;

const UlHow = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const LiHow = styled.li`
color: ${({ theme }) => theme.PhResource};

@media screen and (max-width: 1199px) {
 font-size :1.17rem ;
}

@media screen and (max-width: 768px) {
font-size: 1.6rem;
}

`;
/* 
TitleResourceColor
PhResource
*/
const AncoreA = styled.a`
  margin-top: 1.3rem;
  color: ${({ theme }) => theme.TitleResourceColor};
  text-decoration: none;
  cursor: pointer;

  &:hover{
  text-decoration: underline;

}

@media screen and (max-width: 1199px) {
 font-size :1.17rem ;
}

@media screen and (max-width: 768px) {
font-size: 1.5rem;
}


`;

const Recursos = () => {
  return (
    <SectionsResources>
      <ArticleResource>
        <TitleResource>¿Conoces el método pomodoro?</TitleResource>
        <PhResource>
          Fue creado por Francesco Cirillo a fines de la década de 1980.
          La técnica Pomodoro es un método de gestión de tiempo que sugiere
          trabajar en intervalos de 25 minutos, sin interrupción ni
          distracciones, y añadir tiempos de descanso de 5 minutos. Su objetivo
          es establecer metas y mejorar la productividad.
        </PhResource>

        <TitleResourceTwo>¿Como usar la técnica pomodoro?</TitleResourceTwo>
        <UlHow>
          <LiHow>
            -Realiza una lista de tus tareas pendientes y consigue un
            temporizador.
          </LiHow>
          <LiHow>
            -Configura el temporizador 25 minutos y concéntrate en una sola
            tarea hasta que el conteo llegue a su fin.{" "}
          </LiHow>
          <LiHow>
            -Cuando termine la sesión, marca tu primer pomodoro y regístralo
            como completado. Ahora, puedes descansar 5 minutos.
          </LiHow>
          <LiHow>
            -Cuando hayas completado cuatro pomodoros, podrás tomar un descanso
            más largo, de entre 15 a 30 minutos.
          </LiHow>
        </UlHow>

        <AncoreA
          href="https://blog.hubspot.es/sales/tecnica-pomodoro#que-es"
          target="blank"
        >
          Ir a la fuente de esta información y conocer más
        </AncoreA>
      </ArticleResource>
    </SectionsResources>
  );
};

export default Recursos;
