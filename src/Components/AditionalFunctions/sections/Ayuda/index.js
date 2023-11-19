import React, { useState, useContext, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const SectionHelp = styled.section`
  width: 100%;
  height: 100%;
  min-height: 50vh;
  max-height: 60vh;
`;

const ArticleHelp = styled.article`
  display: flex;
  flex-direction: column;
  padding: 1% 1.3%;
  overflow-wrap: break-word;
  width: 100%;
  background-color: ${({theme}) => theme.SectionBGcolor};
  border-radius: 1rem;
  height: 100%;
  overflow-y: auto;

  @media screen and (max-width: 768px) {
width: 98.7%;
}


`;

const TitleHelp = styled.h4`
  color: ${({ theme }) => theme.TitleResourceColor};
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 1%;

  @media screen and (max-width: 1199px) {
 font-size :1.4rem ;
}

@media screen and (max-width: 768px) {
font-size: 1.8rem;
}

`;


const UlHow = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const LiHow = styled.li`
  color: ${({ theme }) => theme.PhResource};
  display: flex;
  flex-direction: column;
  gap: 1%;
`;

const LiTitle = styled.h6`
font-weight: bold;

@media screen and (max-width: 1199px) {
 font-size :1.2rem ;
}

@media screen and (max-width: 768px) {
font-size: 1.7rem;
}

`;

const LiPh = styled.p`
  color: ${({ theme }) => theme.PhResource};
  overflow-wrap: break-word;


  @media screen and (max-width: 1199px) {
 font-size :1.17rem ;
}

@media screen and (max-width: 768px) {
font-size: 1.6rem;
}

`;

const Recursos = () => {
  return (
    <SectionHelp>
      <ArticleHelp>
        <TitleHelp>Posibles preguntas</TitleHelp>
        <UlHow>
          <LiHow>
            <LiTitle>-¿Puedo modificar las tareas?</LiTitle>
            <LiPh>No, en esta versión (1.0), en caso de cometer un error en la creación de la tarea, deberás eliminarla y crear una nueva.</LiPh>
          </LiHow>
          <LiHow>
            <LiTitle>-¿Que hago si veo un error en la web?</LiTitle>
            <LiPh>{`Puedes ir a Funciones Adicionales -> ¿Tienes sugerencias?. Y describir el error, una vez que nos llegue tu mensaje, trabajaremos en ello`}</LiPh>
          </LiHow>
          <LiHow>
            <LiTitle>-¿Como funciona el guardado de información?</LiTitle>
            <LiPh>En esta versión (1.0) se usa el almacenamiento local del navegador, por lo que no debes usar este web en modo incognito, en un futuro habrán cuentas, y podrás ver tu progreso desde diferentes dispositivos, pero en esta primera versión, no es posible.</LiPh>
          </LiHow>
          <LiHow>
            <LiTitle>-¿Qué hago si pierdo mis datos locales?</LiTitle>
            <LiPh>Desafortunadamente, si pierdes tus datos locales (por ejemplo, al borrar cookies o cambiar de dispositivo), no hay una recuperación automática. Asegúrate de hacer respaldos regularmente.</LiPh>
          </LiHow>
          <LiHow>
            <LiTitle>-¿Se pueden organizar las tareas en categorías o etiquetas?</LiTitle>
            <LiPh>En esta versión (1.0), la aplicación no cuenta con la funcionalidad de organizar tareas en categorías o etiquetas, sin embargo, las puedes organizar por prioridades (alta, media y baja  ).</LiPh>
          </LiHow>
          <LiHow>
            <LiTitle>-¿Existe un límite en la cantidad de tareas que puedo almacenar?</LiTitle>
            <LiPh>En esta versión (1.0), no hay límite específico en la cantidad de tareas que puedes almacenar localmente.</LiPh>
          </LiHow>
        </UlHow>
      </ArticleHelp>
    </SectionHelp>
  );
};

export default Recursos;
