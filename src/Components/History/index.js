import React, { useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { TareasGlobal } from '../../App';
import ElementHistory from "./ElementHistory";

const AnimationWake = keyframes`
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }


`;

const HistorySection = styled.section`
margin-top: 1%;
height: 80vh;
width: 70%;
display: flex;
justify-content: flex-start;
flex-direction: column;
align-items: center;
animation: ${AnimationWake} 0.2s ease-in-out;

@media screen and (max-width: 768px) {
width: 100%
}

`;

const ElementsHistorySection = styled.section`
display: flex;
flex-direction: column;
width: 85%;
gap: 0.4rem;
overflow-y: auto;
overflow-x: hidden;
@media screen and (max-width: 768px) {
    height: 69vh;
    width: 95%;
}

@media screen and (max-width: 300px) {
max-height: 62vh;
width: 95%;
    }

`;



const H2Title = styled.h2`
font-size: 1.8rem;
    color: ${({theme}) => theme.SectionTitle};
    align-self: center;
    margin: 3% 0;
    font-weight: bold;


    @media screen and (max-width: 1199px) {
 font-size :2.3rem ;
}

@media screen and (max-width: 768px) {
    font-size: 2.8rem;
}

`;

const H3NoHistory = styled.h3`
font-size: 1.4rem;
color: ${({ theme }) => theme.noHistoryText};
 
@media screen and (max-width: 1199px) {
 font-size :2rem ;
}



`;



const History = () => {

    const { history } = useContext(TareasGlobal);

    const [hayHistorial, setHayHistorial] = useState(false);



    useEffect(() => {
        if (history.length > 0) {
            setHayHistorial(true);
        } else {
            setHayHistorial(false)
        }
    }, [history])

    return (
        <>
            <HistorySection>
                <H2Title>Tu actividad</H2Title>
                <ElementsHistorySection>
                {hayHistorial ? history.map((registro, pos) => {
                    return (
                       <ElementHistory key={pos} date={registro.date} title={registro.title} type={registro.type}></ElementHistory>
                    )
                }) : <H3NoHistory>No hay historial para mostrar, crea, completa y/o elimina tareas para ver tu tus actividades</H3NoHistory>}
                </ElementsHistorySection>
            </HistorySection>
        </>
    )

}

export default History;