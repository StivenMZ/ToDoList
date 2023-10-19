import React, { useState, useContext, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { NavigationBarGlobal } from '../DefaultPage/NavigationBar';
import { TareasGlobal } from '../../App';
import NavigationBar from '../DefaultPage/NavigationBar';

const AnimationWake = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }


`;



const AsideFunctions = styled.section`
    width: 96%;
    height: 88vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    flex-wrap: wrap;
    gap: 1rem;
    margin-right: 1%;
    flex-basis: 70%;
    animation: ${AnimationWake} 0.3s ease-in-out;
`;

const FunctionsTitle = styled.h2`
flex-basis: 7%;
color: black;

font-size: 1.6rem;
`;

const SectionFunctions = styled.section`
display: flex;
flex-direction: column;
flex-basis: 87%;
justify-content: space-between;
width: 96%;
background-color: lightgreen;

`;

const ButtonFunction = styled.button`
color: purple;
border: none;
background-color:  violet;
padding: 0.5rem;
cursor: pointer;
font-size: 1.1rem;
border: 0.15rem solid transparent;

&:hover{
    opacity: 0.82;
}

&:active{
    border: 0.15rem solid lightpink;
}

`;

const SectionContent  = styled.section`
width: 100%;
    align-self: center;
    background-color: white;
    flex-basis: 83%;
   
`;


const AditionalFunctions = () => {

    const {showNavigationBar} = useContext(TareasGlobal)

    const [view, setView] = useState(false);
    const [contentView, setContentView] = useState({button: '', content: ''});




/*
howto = Como usar este sitio web
suggest = ¿Tienes sugerencias? 
resources =  Recursos útiles
news= Noticias o actualizaciones
social = Redes sociales
helper = Centro de ayuda
privacity = Políticas de privacidad y términos de uso
*/

    const vistaAd = (button, content) =>{
        if(view === false){
            
            setView(true);
            console.log('a true')
            setContentView({button :button, content: content})
        } else{
            setView(false)
            console.log('a false')
        }

    }

    return (
        <>
          <AsideFunctions>
                <FunctionsTitle>Funciones adicionales</FunctionsTitle>
                <SectionFunctions>
                    {view ? (
                        <>
                        <ButtonFunction
                         onClick={()=>{
                            console.log('hpta')
                            setView(false)
                        }}
                        >{contentView.button}</ButtonFunction>
                        <SectionContent>{contentView.content}</SectionContent>
                        </>
                    ):
                    (
                        <>
                        <ButtonFunction
                    onClick={()=>{
                        vistaAd('howto', 'test')
                    }}
                   >Como usar este sitio web</ButtonFunction>

                       <ButtonFunction
                    onClick={()=>{
                        vistaAd('suggest', 'test')
                    }}
                   >¿Tienes sugerencias?</ButtonFunction>
                    <ButtonFunction
                    onClick={()=>{
                        vistaAd('resources', 'test')
                    }}
                    >Recursos útiles</ButtonFunction>
                    <ButtonFunction
                     onClick={()=>{
                        vistaAd('news', 'test')
                    }}
                    >Noticias o actualizaciones</ButtonFunction>
                    <ButtonFunction
                     onClick={()=>{
                        vistaAd('social', 'test')
                    }}
                    >Redes sociales</ButtonFunction>
                    <ButtonFunction
                     onClick={()=>{
                        vistaAd('helper', 'test')
                    }}
                    >Centro de ayuda</ButtonFunction>
                    <ButtonFunction
                     onClick={()=>{
                        vistaAd('privacity', 'test')
                    }}
                    >Políticas de privacidad y términos de uso</ButtonFunction>   
                    </>
                    )}
                </SectionFunctions>
            </AsideFunctions>
        </>
    )
    
}

export default AditionalFunctions;