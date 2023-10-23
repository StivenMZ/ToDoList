import React, { useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { TareasGlobal } from '../../App';
import ElementHistory from "./ElementHistory";

const AnimationWake = keyframes`
  0% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }


`;

const HistorySection = styled.section`
margin-top: 3%;
border: 1px solid;
height: 80vh;
width: 70%;
display: flex;
justify-content: flex-start;
flex-direction: column;
align-items: center;
animation: ${AnimationWake} 0.2s ease-in-out;

`;

const ArticleElement = styled.article`
width: 100%;
border: 1px solid;
display: flex;
gap: 2rem;
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
                {hayHistorial ? history.map((registro) => {
                    return (
                       <ElementHistory date={registro.date} title={registro.title} type={registro.type}></ElementHistory>
                    )
                }) : <h1>No hay historial</h1>}

            </HistorySection>
        </>
    )

}

export default History;