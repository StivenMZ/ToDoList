import React, { useState, useContext, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { TareasGlobal } from '../../App';

import Sugerencias from './sections/Sugerencias';
import Recursos from './sections/Recursos';
import Noticias from './sections/Noticias';
import Ayuda from './sections/Ayuda';
import Politicas from './sections/Politicas';
import Sobre from './sections/Sobre';
import Como from './sections/ComoUsar';

const AnimationWake = keyframes`
  0% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }


`;



const SectionFunctionsMain = styled.section`
    width: 96%;
    height: 83vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1%;
    flex-basis: 70%;
    animation: ${AnimationWake} 0.2s ease-in-out;
`;

const FunctionsTitle = styled.h2`
flex-basis: 7%;
font-size: 1.8rem;
color: ${({ theme }) => theme.AditionalFuncText};
font-weight: bold;
`;

const SectionFunctions = styled.section`
display: flex;
flex-direction: column;
flex-basis: 87%;
justify-content: space-between;
width: 96%;

`;

const ButtonFunction = styled.button`
color: ${({ theme }) => theme.AditionalFunctBtnText};   
border: none;
background-color: ${({ theme }) => theme.AditionalFuncBgBtn};
padding: 0.5rem;
cursor: pointer;
font-size: 1.1rem;
border: 0.15rem solid transparent;
border-radius: 0.4rem;
font-weight: bold;

&:hover{
    opacity: 0.9;
}

&:active{
    border: 0.15rem solid ${({ theme }) => theme.ActivateButton}; 
}

`;

const SectionContent = styled.section`
width: 100%;
    align-self: center;
    /* background-color: white; */
    flex-basis: 83%;
    /* border: 1px solid; */
   
`;


const AditionalFunctions = () => {


    const [view, setView] = useState(false);
    const [contentView, setContentView] = useState({ button: '', content: '' });

    const options = {
        comoUsar: {
            texto: 'Como usar este sitio web',
            contenido: <Como></Como>
        },
        sugerencias: {
            texto: '¿Tienes sugerencias?',
            contenido: <Sugerencias></Sugerencias>
        },
        recursos: {
            texto: 'Recursos útiles',
            contenido: <Recursos></Recursos>
        },
        noticias: {
            texto: 'Noticias o actualizaciones',
            contenido: <Noticias></Noticias>
        },
        ayuda: {
            texto: 'Centro de ayuda',
            contenido: <Ayuda></Ayuda>
        },
        politicas: {
            texto: 'Políticas de privacidad y términos de uso',
            contenido: <Politicas></Politicas>
        },
        sobre: {
            texto: 'Sobre este sitio web',
            contenido: <Sobre></Sobre>
        }
    }

    const vistaAd = (button, content) => {
        if (!view) {
            setView(true);
            console.log('a true')
            setContentView({ button: button, content: content })
        }
    }

    return (
        <>
            <SectionFunctionsMain>
                <FunctionsTitle>Funciones adicionales</FunctionsTitle>
                <SectionFunctions>
                    {view ? (
                        <>
                            <ButtonFunction
                                onClick={() => {
                                    setView(false)
                                }}
                            >{contentView.button} -</ButtonFunction>
                            <SectionContent>
                                {contentView.content}
                            </SectionContent>
                        </>
                    ) :
                        (
                            <>
                                {Object.keys(options).map((opt) => {
                                    return (
                                        <ButtonFunction
                                            onClick={() => {
                                                vistaAd(options[opt].texto, options[opt].contenido)
                                            }}
                                        >{options[opt].texto} +</ButtonFunction>
                                    )
                                })}
                            </>

                        )}
                </SectionFunctions>
            </SectionFunctionsMain>
        </>
    )

}

export default AditionalFunctions;