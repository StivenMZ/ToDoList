import React, { useState } from 'react';
import styled from 'styled-components';

const AsideFunctions = styled.aside`
    width: 29%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    border: 1px solid;
    flex-wrap: wrap;
    gap: 1rem;
    margin-right: 1%;
    background-color:  ${({ theme }) => theme.primary}; 
    height: auto;
`;

const FunctionsTitle = styled.h2`
flex-basis: 7%;
color: ${({ theme }) => theme.textOB};;

font-size: 1.6rem;
`;

const SectionFunctions = styled.section`
display: flex;
flex-direction: column;
flex-basis: 70%;
justify-content: space-between;
width: 96%;

`;

const ButtonFunction = styled.button`
color: purple;
border: none;
background-color:  ${({ theme }) => theme.button}; ;
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