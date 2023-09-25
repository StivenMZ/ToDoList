import React from "react";
import styled from "styled-components";
import { useState , useContext} from "react";
import {TareasGlobal} from '../../App'



const ArticleCard = styled.article`
border: 1px solid black;
padding: 0.7rem;
display: flex;
flex-direction: column;
gap: 0.5rem;
position: relative;
border-radius: 0.2rem;
width: 55%;
margin-top: 0.3rem;
`;

const DivPrimary = styled.div`
display: flex;
flex-direction: column;
gap: 0.3rem;
margin-top: 1rem;
`;

const StatusCard = styled.strong`
position: absolute;
top: 1%;
left: 1.5%;
background-color: gray;
padding: 0.2rem;
color: white;
border-radius: 0.4rem;
`;


const ProirityCard = styled.p`
position: absolute;
top: 1%;
right: 1.5%;
background-color: red;
padding: 0.2rem;
color: white;
border-radius: 0.4rem;
`;



const TitleCard = styled.h2`
font-size: 1.2rem;
font-weight: bold;
`;

const DescCard = styled.p`
font-size: 1.1rem;

`;

const FechaCard = styled.p`
font-size: 0.9rem;
`;

const CategoryDiv = styled.div`
display: flex;
gap: 0.6rem;
width: 40%;
`;

const ButtonCard = styled.button`
color: white;
border: none;
background-color: lightseagreen;
padding: 0.5rem;
cursor: pointer;
font-size: 0.8rem;

`;





const TaskCard = ({titulo, descripcion, prioridad, fechaIn, id, completada}) => {


    const {tareas, setTareas} = useContext(TareasGlobal);

    const finishTask = (id) =>{
        
        const tareasActual = [...tareas];

        const tareaActualizar = tareasActual.find((task) => task.id === id);

        if(tareaActualizar){
            tareaActualizar.completada = true;
        }

        setTareas(tareasActual)


    }

    const deleteTask = (id) => {
        const newArray = tareas.filter((task) => task.id !== id);
        setTareas(newArray);
      }


    return (
        <>
            <ArticleCard key={id}>
                <StatusCard>{completada ? 'Completada' : 'Pendiente'}</StatusCard>
                <ProirityCard>Prioridad {prioridad}</ProirityCard>
                <DivPrimary>
                    <TitleCard>{titulo}</TitleCard>
                    <DescCard>{descripcion}</DescCard>
                    <FechaCard>Fecha de inicio: {fechaIn}</FechaCard>
                    <FechaCard>Fecha fin: 20/09/2023</FechaCard>
                </DivPrimary>

                <CategoryDiv>
                    <ButtonCard
                    onClick={()=>{
                        finishTask(id)}}
                    >
                        Completar
                    </ButtonCard>
                    <ButtonCard
                    onClick={()=>{
                        deleteTask(id)

                    }}
                    >
                        Eliminar
                    </ButtonCard>
                    <ButtonCard>
                        Archivar
                    </ButtonCard>
                </CategoryDiv>
            </ArticleCard>
        </>
    )
}

export default TaskCard;