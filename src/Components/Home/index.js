import React, { useEffect, useState, useContext } from "react";
import styled, { keyframes } from "styled-components";
import NavigationCard from "./NavigationCard";
import { TareasGlobal } from "../../App";
import { NavigationBarGlobal } from "../Main/main";

const AnimationHome = keyframes`

0%{
    display: none;
}

100%{
    display: flex;
}

`;

const SectionHome = styled.section`
width: 100%;
height: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
position: absolute;

`;


const Pmain = styled.h1`
margin-top: 10%;
font-size: 2.2rem;
color:  ${props => props.theme.titleMain};
`;

const CardsSection = styled.section`

width: 100%;
height: 70vh;
display: flex;
justify-content: center;
align-items: center;
`;

const DivCards = styled.div`
display: flex;
width: 90%;
height: 60%;
flex-wrap: wrap;
gap: 1%;
align-self: flex-end;
margin-bottom: 2%;
`;

const Home = () => {
    
/*      const {setShowNavigationBar} = useContext(TareasGlobal);
    setShowNavigationBar(false);  */


    return (<>
        <SectionHome>
            <Pmain>
                Crea, gestiona, y lleva el control total de tus tareas
            </Pmain>
            <CardsSection>
                <DivCards>
                    <NavigationCard title={'Crear tarea'} ruta={'/crear-tarea'} description={'Aquí puedes añadir una nueva tarea a tu lista de tareas'}></NavigationCard>
                    <NavigationCard title={'Lista de tareas'} ruta={'/lista-de-tareas'} description={'Visualiza y gestiona todas tus tareas'}></NavigationCard>
                    <NavigationCard title={'Historial'} ruta={'/historial'} description={'Échale un vistazo a todos lo que has hecho con tus tareas'}></NavigationCard>      
                    <NavigationCard title={'Funciones adicionales'} ruta={'/funciones-adicionales'} description={'Como usar este sitio web, sugerencias, centro de ayuda y mas...'}></NavigationCard>
                </DivCards>
            </CardsSection>
        </SectionHome>
    </>)
}

export default Home;