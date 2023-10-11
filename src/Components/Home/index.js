import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";

const SectionHome = styled.section`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const Pmain = styled.p`

`;

const Home = () => {
    return (<>
        <SectionHome>
            <Pmain>
                Bienvenido a Task-manager, una herramienta para que
                lleves un control de tus tareas, a tu izquierda está
                el menú de navegación, échale un vistazo!
            </Pmain>
        </SectionHome>
    </>)
}

export default Home;