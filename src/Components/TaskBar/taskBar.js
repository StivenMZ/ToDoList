import React from "react";
import styled from "styled-components";
import { useState } from "react";
import TaskCard from "./taskCard";

const TaskLista = styled.aside`
height: 100%;
width: 35%;
padding: 1rem;
background-color: #9bc5e7;
display: flex;
flex-direction: column;
align-items: center;
flex-wrap: wrap;
gap: 0.3rem;
border: 0.1rem solid;
`
const Title = styled.h1`
color: black;
font-weight: bold;
font-size: 1.3rem;
flex-basis: 6%;
`

const FiltrarOpt = styled.div`
background-color: ${({ theme }) => theme.text};
flex-basis: 6%;
`;

const ListaTreas = styled.section`
flex-basis: 80%;
background-color: white;
width: 95%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
border: 0.1rem solid;

`

const TaskList = () =>{
    return(
        <>
        <TaskLista>
        <Title>Tus tareas</Title>
        <FiltrarOpt>Filtrar</FiltrarOpt>
        <ListaTreas>
        <TaskCard></TaskCard>
        <TaskCard></TaskCard>
        </ListaTreas>
        </TaskLista>
        </>
    )
}

export default TaskList