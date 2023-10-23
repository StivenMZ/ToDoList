import React, { useState, useContext, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const SectionsResources = styled.section`
width: 100%;
height: 100%;
`;

const ArticleResource = styled.article``

const TitleResource = styled.h3``

const PhResource = styled.p``;

const Recursos = () => {

    return (
        <SectionsResources>
            <ArticleResource>
                <TitleResource>
                    ¿Conoces el método pomodoro?
                </TitleResource>
                <PhResource>
                    La técnica Pomodoro es un método para mejorar la administración del tiempo dedicado a una actividad. Fue creado por Francesco Cirillo a fines de la década de 1980.
                </PhResource>
            </ArticleResource>

        </SectionsResources>
    )

}

export default Recursos;