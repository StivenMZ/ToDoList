import React, { useState } from 'react';
import styled from 'styled-components';

const AsideFunctions = styled.aside`
width: 30%;
display: flex;
align-items: center;
flex-direction: column;
padding: 1rem;
border: 1px solid;
flex-wrap: wrap;
gap: 1rem;
`;

const FunctionsTitle = styled.h2`
flex-basis: 7%;
`;

const SectionFunctions = styled.section`
display: flex;
flex-direction: column;
flex-basis: 70%;
justify-content: space-between;
`;

const ButtonFunction = styled.button`

`;



const AditionalFunctions = () => {
    return (
        <>
            <AsideFunctions>
                <FunctionsTitle>Funciones adicionales</FunctionsTitle>
                <SectionFunctions>
                    <ButtonFunction>Como usar este sitio web</ButtonFunction>
                    <ButtonFunction>¿Tienes sugerencias?</ButtonFunction>
                    <ButtonFunction>Recursos útiles</ButtonFunction>
                    <ButtonFunction>Noticias o actualizaciones</ButtonFunction>
                    <ButtonFunction>Redes sociales</ButtonFunction>
                    <ButtonFunction>Centro de ayuda</ButtonFunction>
                    <ButtonFunction>Políticas de privacidad y términos de uso</ButtonFunction>
                </SectionFunctions>
            </AsideFunctions>
        </>
    )
}

export default AditionalFunctions;