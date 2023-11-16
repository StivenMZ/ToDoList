import React, { useState, useContext, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const SectionAbout = styled.section`
  width: 100%;
  height: 100%;
  min-height: 50vh;
  max-height: 60vh;
`;

const ArticleAbout = styled.article`
  display: flex;
  flex-direction: column;
  padding: 1% 1.3%;
  overflow-wrap: break-word;
  width: 100%;
  background-color: ${({theme}) => theme.SectionBGcolor};
  border-radius: 1rem;
  height: 100%;
  box-sizing: border-box;
`;

const TitleAbout = styled.h4`
  color: ${({ theme }) => theme.TitleResourceColor};
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 1%;

  @media screen and (max-width: 1199px) {
 font-size :1.4rem ;
}

`;


const UlAbout = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LiAbout = styled.li`
  color: ${({ theme }) => theme.PhResource};
  display: flex;
  flex-direction: column;

`;

const LiTitle = styled.h6`
font-weight: bold;

@media screen and (max-width: 1199px) {
 font-size :1.2rem ;
}

`;

const LiPh = styled.p`
  color: ${({ theme }) => theme.PhResource};
  @media screen and (max-width: 1199px) {
 font-size :1.17rem ;
}

`;

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
 margin-top: 0;

}

`;



const Sobre = () => {
  return (
    <SectionAbout>
      <ArticleAbout>
        <TitleAbout>Tecnologías usadas para esta web</TitleAbout>
        <UlAbout>
            <LiAbout>
                  <LiTitle>-React Js</LiTitle>  
                  <LiPh>Se usó para lograr que la web funcione como SPA (Single page aplication o Aplicación de una página), esto quiere decir, que el contenido de la aplicación se actualiza dinámicamente al interactuar con la página, y, no se recarga, lo que proporciona una experiencia más cómoda y rápida para el usuario</LiPh>
            </LiAbout>    
            <LiAbout>
                
                  <LiTitle>-Styled Components</LiTitle>  
                  <LiPh>Styled components es una libreria de Javascript, la finalidad de su uso es tener un código más legible y reutilizable. Styled componentes consiste en crear las etiquetas HTML en conjunto de sus estilos CSS, para posteriormente usarlos como componentes</LiPh>
            </LiAbout>
            <LiAbout>
                <LiTitle>-Local Storage</LiTitle>  
                <LiPh>O almacenamiento local. El almacenamiento local permite almacenar datos en el navegador, de manera local. Todos los datos de esta web están almacenados en el Local Storage, tanto las tareas, la elección del tema), etc.</LiPh>
          </LiAbout>

        <AncoreA href="https://github.com/StivenMZ/ToDoList" alt="repositorio github" target="blank">Ir al repositorio de GitHub y conocer el código</AncoreA>

        </UlAbout>
      </ArticleAbout>
    </SectionAbout>
  );
};

export default Sobre;
