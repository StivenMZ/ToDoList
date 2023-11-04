import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { TareasGlobal } from '../../App'


const TitleFilter = styled.h3`
color: ${({ theme }) => theme.TaskListFilterTitle};
font-size: 1.4rem;
margin-bottom: 0.1%;
`;

const SectionButtons = styled.section`
display: flex;
width: 80%;
align-items: center;
justify-content: center;
gap: 1%;
margin-bottom: 0.8%;
`;

const ButtonFilter = styled.button`
font-style: italic;
cursor: pointer;
background-color: ${({ activate, theme }) => (activate ? theme.TaskFolterActive : theme.TaskListCardBackground)};
border: none;
color: ${({ theme }) => theme.TaskFilterCardtext};
box-sizing: border-box;
padding: 1rem;
font-size: 1.1rem
`;

/* 

${({ activate, theme }) => (completada ? theme.TaskFolterActive : theme.TaskListCardBackground)};
${({ theme }) => theme.TaskListTitle};
    TaskListTitle: '#2568D7',
    TaskListShowComplete : '#3387FB',


    TaskListFilterTitle: '#74D0FD',
    TaskListCardBackground: '#D6EEFE',
    TaskFilterCardtext: '#092578',
    TaskFolterActive : '#8FE0FE',
*/


const DivSeeComplete = styled.div`
display: flex;
align-items: center;
margin: 1% 0%;

`;

const SpanSeeComplete = styled.span`
color: ${({ theme }) => theme.TaskListShowComTitle };
font-size: 1.3rem;
`;

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

const FilterTask = ({ filterFunct, checked, setCheked ,setShowCompleted, priority, setPriority,activeFilter }) => {

  const { tareas, setTareas } = useContext(TareasGlobal);




  useEffect(() => {
    filterFunct(priority)
    console.log(priority, ' Prioridad desde useEffect para ver activacion de filter funct')
  }, [tareas])



  useEffect(()=>{
    setShowCompleted(checked)
    filterFunct(priority);
    console.log('Cheked desde useEffect' ,checked)
  }, [checked])


  return (<>
    <DivSeeComplete>
      <SpanSeeComplete>Ver tareas completadas</SpanSeeComplete>
      <InputSeeComplete type="checkbox"
        checked={checked}
        onClick={() => {
          setCheked(!checked)
        }}
      ></InputSeeComplete>
    </DivSeeComplete>
    <TitleFilter>Filtrar por prioridad</TitleFilter>
    <SectionButtons>
      <ButtonFilter
        onClick={() => {
          const value = "Alta";
          setPriority(value)
          filterFunct(value)


        }}
        activate={activeFilter === "Alta"}
      >Alta</ButtonFilter>
      <ButtonFilter
        onClick={() => {
          const value = "Media";
          setPriority(value)
          filterFunct(value)
        }}
        activate={activeFilter === "Media"}
      >Media</ButtonFilter>
      <ButtonFilter
        onClick={() => {
          const value = "Baja";
          setPriority(value)
          filterFunct(value)
        }}
        activate={activeFilter === "Baja"}
      >Baja</ButtonFilter>
      <ButtonFilter
        onClick={() => {
          const value = "no";
          setPriority(value)
          filterFunct(value)
        }}
        activate={activeFilter === "no"}
      >No filtrar</ButtonFilter>

    </SectionButtons>
  </>)

}

export default FilterTask;