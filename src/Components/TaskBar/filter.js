import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { TareasGlobal } from '../../App'

/* Titulo de la sección */
const TitleFilter = styled.h3`
color: ${({ theme }) => theme.TaskListFilterTitle};
font-size: 1.4rem;
margin-bottom: 0.1%;

@media screen and (max-width: 1199px) {
 font-size :1.6rem ;
}


`;
/* Section para los botones, display flex para alinear verticalmente */
const SectionButtons = styled.section`
display: flex;
width: 80%;
align-items: center;
justify-content: center;
gap: 1%;
margin-bottom: 0.8%;



`;
/* Botones para cada opción del filtrado de tareas (alta, media, baja , no filtrar) */
const ButtonFilter = styled.button`
font-style: italic;
cursor: pointer;
/* Si el bottón está selecciona aplicar el background de color TaskFolterActive , sino, el mismo del background */
background-color: ${({ activate, theme }) => (activate ? theme.TaskFolterActive : theme.TaskListCardBackground)};
border: none;
color: ${({ theme }) => theme.TaskFilterCardtext};
box-sizing: border-box;
padding: 1rem;
font-size: 1.1rem;

@media screen and (max-width: 1199px) {
 font-size :1.4rem ;
}


`;

/* Div para ver tareas completadas */
const DivSeeComplete = styled.div`
display: flex;
align-items: center;
margin: 1% 0%;

`;

/* Texto de ver tareas completadas */
const SpanSeeComplete = styled.span`
color: ${({ theme }) => theme.TaskListShowComTitle };
font-size: 1.3rem;
@media screen and (max-width: 1199px) {
 font-size :1.5rem ;
}

`;

/* Input checkbox para ver tareas completadas */
const InputSeeComplete = styled.input`
appearance: none;
width: 1.1rem;
height: 1.1rem;
border: 1px solid ${({ theme }) => theme.TaskListShowComplete };;
background-color: ${({ theme }) => theme.backgroundBody };
border-radius: 0.5rem;
cursor: pointer;
transition: transform 0.12s;

&:checked{
  background-color:  ${({ theme }) => theme.TaskFolterActive };
  border-radius: 1rem;
  transform: scale(1.07); 
}

&:hover{
  transform: scale();
  transform: scale(1.07); 

}




`;
/* Importación de props destructurando */
const FilterTask = ({ filterFunct, checked, setCheked ,setShowCompleted, priority, setPriority,activeFilter }) => {

  const { tareas} = useContext(TareasGlobal);


  /* Llamar la función de filtrado cada que tareas cambia para actualizar la vista de tareas */
  useEffect(() => {
    filterFunct(priority)
  }, [tareas])


/* Llamar filterFunct y cambiar cheked cada que se actualice checked mediante el inpit checkbox */
  useEffect(()=>{
    setShowCompleted(checked)
    filterFunct(priority);
  }, [checked])


  return (<>
    <DivSeeComplete>
      <SpanSeeComplete>Ver tareas completadas</SpanSeeComplete>
      <InputSeeComplete type="checkbox"
        checked={checked}
        onClick={() => {
          /* Cambiar cheked por el valor contrario al que tenga (booleano) */
          setCheked(!checked)
        }}
      ></InputSeeComplete>
    </DivSeeComplete>
    <TitleFilter>Filtrar por prioridad</TitleFilter>
    <SectionButtons>
      <ButtonFilter
        onClick={() => {
          const value = "Alta";

          /* Cambiar el valor de priority y llamar a la función filterFunct pasando "Alta" como parámetro */
          setPriority(value)
          filterFunct(value)
     


        }}
        activate={activeFilter === "Alta"}
      >Alta</ButtonFilter>
      <ButtonFilter
        onClick={() => {
          const value = "Media";

          /* Cambiar el valor de priority y llamar a la función filterFunct pasando "Media" como parámetro */

          setPriority(value)
          filterFunct(value)
        }}
        activate={activeFilter === "Media"}
      >Media</ButtonFilter>
      <ButtonFilter
        onClick={() => {
          const value = "Baja";
          /* Cambiar el valor de priority y llamar a la función filterFunct pasando "Baja" como parámetro */
          setPriority(value)
          filterFunct(value)
        }}
        activate={activeFilter === "Baja"}
      >Baja</ButtonFilter>
      <ButtonFilter
        onClick={() => {
          const value = "sin prioridad";
          /* Cambiar el valor de priority y llamar a la función filterFunct pasando "sinPrioridad" como parámetro */
          setPriority(value)
          filterFunct(value)
        }}
        activate={activeFilter === "sin prioridad"}
      >No filtrar</ButtonFilter>
{/* Todos los activate son para el backGround-color en base a si está seleccionado */}
    </SectionButtons>
  </>)

}

export default FilterTask;