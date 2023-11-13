import React, { useState, useContext, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const SectionNews = styled.section`
  width: 100%;
  height: 100%;
  min-height: 50vh;
`;

const ArticleNews = styled.article`
  display: flex;
  flex-direction: column;
  padding: 0.4%;
  overflow-wrap: break-word;
  width: 100%;
  background-color: ${({theme}) => theme.SectionBGcolor};
  border-radius: 1rem;
  height: 100%;
  overflow-y: auto;

`;

const TitleNews = styled.h4`
  color: ${({ theme }) => theme.TitleResourceColor};
  font-weight: bold;
  font-size: 1.2rem;
`;

const TitleNewsTwo = styled.h5`
  color: ${({ theme }) => theme.TitleResourceColor};
  margin: 1% 0 2% 0;
  font-size: 1.1rem;
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
`;

const LiPh = styled.p`
  color: ${({ theme }) => theme.PhResource};
`;

const Recursos = () => {
  return (
    <SectionNews>
      <ArticleNews>
        <TitleNews>Versión 1.0</TitleNews>
        <TitleNewsTwo>¿Que puedes hacer en ésta versión?</TitleNewsTwo>
        <UlHow>
          <LiHow>
            <LiTitle>-Crear tareas</LiTitle>
            <LiPh>Elegir un título, descripción, y prioridad de la tarea</LiPh>
          </LiHow>
          <LiHow>
            <LiTitle>Completar tareas</LiTitle>
            <LiPh>Una vez que termines tu tarea, la puedes marcar como completada</LiPh>
          </LiHow>
          <LiHow>
            <LiTitle>-Eliminar tareas</LiTitle>
            <LiPh>Elimina la tarea que quieras, en el momento que lo desees</LiPh>
          </LiHow>
          <LiHow>
            <LiTitle>-Ver tu lista de tareas</LiTitle>
            <LiPh>Mira todas las tareas que creadas y fíltralas por prioridad</LiPh>
          </LiHow>
          <LiHow>
            <LiTitle>-Buscar tareas</LiTitle>
            <LiPh>La búsqueda se realiza principalmente en base a los títulos, y, secundariamente en base a las descripciones</LiPh>
          </LiHow>
          <LiHow>
            <LiTitle>-Ver tu historial de actividad</LiTitle>
            <LiPh>Evidencia el día y la hora en el que creaste, completaste o eliminaste cualquier tarea</LiPh>
          </LiHow>
        </UlHow>
      </ArticleNews>
    </SectionNews>
  );
};

export default Recursos;
