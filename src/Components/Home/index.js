import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import NavigationCard from "./NavigationCard";

const SectionHome = styled.section`
width: 100%;
height: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
`;


const Pmain = styled.p`
margin-top: 10%;
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
    return (<>
        <SectionHome>
            <Pmain>
                Bienvenido a Task-manager, una herramienta para que
                lleves un control de tus tareas, a tu izquierda está
                el menú de navegación, échale un vistazo!
            </Pmain>
            <CardsSection>
                <DivCards>
                    <NavigationCard title={'Crear tarea'} ruta={''}></NavigationCard>
                    <NavigationCard title={'Lista de tareas'} ruta={'/lista-de-tareas'}></NavigationCard>
                    <NavigationCard title={'Funciones adicionales'}></NavigationCard>
                    <NavigationCard title={'Historial'}></NavigationCard>
                    
                </DivCards>
            </CardsSection>
        </SectionHome>
    </>)
}

export default Home;