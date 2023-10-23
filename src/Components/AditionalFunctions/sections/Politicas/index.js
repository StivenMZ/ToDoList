import React, { useState, useContext, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const SectionPolic = styled.section`
width: 100%;
height: 100%;
`;

const ArticleResource = styled.article``

const TitleResource = styled.h3``

const PhResource = styled.p``;

const Politicas = () => {

    return (
        <SectionPolic>
            <ArticleResource>
                <TitleResource>
                    Reglas
                </TitleResource>
                <PhResource>
                    -no hay reglas
                </PhResource>
            </ArticleResource>

        </SectionPolic>
    )

}

export default Politicas;