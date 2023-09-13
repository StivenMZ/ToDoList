import React from "react";
import styled from "styled-components";
import { useState } from "react";
import TaskCard from "./taskCard";

const TaskLista = styled.aside`
height: 100%;
width: 35%;
background-color: yellow;
padding: 1rem;
background-color: ${({ theme }) => theme.primary};
display: flex;
flex-direction: column;
align-items: center;
flex-wrap: wrap;
gap: 0.7rem;
`
const Title = styled.h1`
color: ${({ theme }) => theme.text};
font-size: 1.5rem;
flex-basis: 10%;
`

const FiltrarOpt = styled.div`
background-color: ${({ theme }) => theme.text};
flex-basis: 10%;
`;

const ListaTreas = styled.section`
flex-basis: 75%;
background-color: ${({ theme }) => theme.secondary};
width: 95%;
`

const TaskList = () =>{
    return(
        <>
      {/*   <TaskLista>
        <Title>Tus tareas</Title>
        <FiltrarOpt>Filtrar</FiltrarOpt>
        <ListaTreas>aS</ListaTreas>
        </TaskLista> */}
        <TaskCard></TaskCard>
        </>
    )
}

export default TaskList