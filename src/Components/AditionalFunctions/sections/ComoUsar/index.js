import React, { useState, useContext, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const SectionHowTo = styled.section`
  width: 100%;
  height: 100%;
  min-height: 50vh;
`;

const ArticleHowTo = styled.article`
  display: flex;
  flex-direction: column;
  padding: 1% 1.3%;
  overflow-wrap: break-word;
  width: 100%;
  background-color: #c8f0f9;
  border-radius: 1rem;
  height: 100%;
`;

const TitleHowTo = styled.h4`
  color: ${({ theme }) => theme.TitleResourceColor};
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 1%;
`;


const UlHowTo = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
  max-height: 60vh;
`;

const LiHowTo = styled.li`
  color: ${({ theme }) => theme.PhResource};
  display: flex;
  flex-direction: column;

`;

const LiTitle = styled.h6`
font-weight: bold;
`;

const LiPh = styled.p`
  color: ${({ theme }) => theme.PhResource};

`;





const HowTo = () => {
  return (
    <SectionHowTo>
      <ArticleHowTo>
        <TitleHowTo>Aprende a usar este sitio web</TitleHowTo>
        <UlHowTo>
            <LiHowTo>
                  <LiTitle>-¿Como puedo crear tareas?</LiTitle>  
                  <LiPh>En la pantalla principal (Home), hay un botón que dice "Crear tarea", puedes darle click ahí, o, una vez que estés en una sección de la página, en el menú de navegación, puedes car click en "Crear tarea".</LiPh>
                  <LiPh>Una vez estés en "Crear tarea", verás un formulario que te pedirá un título para la tarea, una descripcíon, y que selecciones una prioridad, posterior a esto, debes dar click en el botón "Crear tarea". Si la tarea se creó exitosamente verás una notificación con el mensaje "La tarea (nombre de la tarea) se ha creado exitosamente"</LiPh>

            </LiHowTo>    

            <LiHowTo>
                  <LiTitle>-¿Como puedo ver mi lista de tareas?</LiTitle>  
                  <LiPh>En la pantalla principal (Home), hay un botón que dice "Lista de tareas", puedes darle click ahí, o, una vez que estés en una sección de la página, en el menú de navegación, puedes car click en "Lista de tareas".</LiPh>
                  <LiPh>Una vez estés en "Lista de tareas", verás todas las tareas que has creado, puedes marcar la opción "Ver completadas" para visualizar también las tareas que ya completaste. Además, tienes la posibilidad de filtrar las tareas por prioridad (alta, media, baja) o, no filtrar, en donde se enlistarán todas la tareas</LiPh>

            </LiHowTo>   
          

        </UlHowTo>
      </ArticleHowTo>
    </SectionHowTo>
  );
};

export default HowTo;
