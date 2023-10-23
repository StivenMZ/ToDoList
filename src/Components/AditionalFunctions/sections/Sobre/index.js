import React, { useState, useContext, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const SectionPolic = styled.section`
width: 100%;
height: 100%;
`;

const ArticleResource = styled.article``

const TitleResource = styled.h3``

const PhResource = styled.p``;

const Sobre = () => {

    return (
        <SectionPolic>
            <ArticleResource>
                <TitleResource>
                    Esta web fue hecha con React JS
                </TitleResource>
                <PhResource>
                    Se utilizó para lograr que funcione como una SPA
                </PhResource>
            </ArticleResource>

        </SectionPolic>
    )

}

export default Sobre;