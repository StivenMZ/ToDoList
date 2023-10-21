import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { TareasGlobal } from '../../App'


const TitleFilter = styled.h3`
color: ${({ theme }) => theme.background};
margin-bottom: 0.1%;
`;

const SectionButtons = styled.section`
display: flex;
width: 80%;
align-items: center;
justify-content: center;
gap: 1%;
margin-bottom: 1%;
`;

const ButtonFilter = styled.button`
font-style: italic;
cursor: pointer;
background-color: ${(props) => (props.activate ? '#D699FF' : 'white')};
border: none;

`;


const DivSeeComplete = styled.div`
display: flex;
align-items: center;
`;

const SpanSeeComplete = styled.span`

`;

const InputSeeComplete = styled.input`
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