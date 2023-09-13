import React from "react";
import styled from "styled-components";
import { useState } from "react";

const ArticleCard = styled.article`
margin-left: 30rem;
margin-top: 10rem;
border: 1px solid black;
height: 31%;
padding: 1.3rem;
display: flex;
flex-direction: column;
gap: 1rem;
position: relative;
border-radius: 0.2rem;
`;

const DivPrimary = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
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
font-size: 1.4rem;
font-weight: bold;
`;

const DescCard = styled.p`
font-size: 1.2rem;

`;

const FechaCard = styled.p`
font-size: 0.9rem;
`;

const CategoryDiv = styled.div`
display: flex;
gap: 0.6rem;
`;

const ButtonCard = styled.button`
color: white;
border: none;
background-color: blueviolet;
padding: 0.3rem;
cursor: pointer;
`;






const TaskCard = () => {
    return (
        <>
            <ArticleCard>
                <StatusCard>Pendiente</StatusCard>
                <ProirityCard>Alta prioridad</ProirityCard>
                <DivPrimary>
                    <TitleCard>Gimnasio</TitleCard>
                    <DescCard>Ir al gimnasio</DescCard>
                    <FechaCard>Fecha de inicio: 20/09/2023</FechaCard>
                    <FechaCard>Fecha fin: 20/09/2023</FechaCard>
                </DivPrimary>

                <CategoryDiv>
                    <ButtonCard>
                        Completar
                    </ButtonCard>
                    <ButtonCard>
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