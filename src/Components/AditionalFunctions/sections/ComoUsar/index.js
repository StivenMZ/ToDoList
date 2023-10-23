import React, { useState, useContext, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const SectionHow = styled.section`
width: 100%;
height: 100%;
`;

const ArticleResource = styled.article``

const TitleResource = styled.h3``

const PhResource = styled.p``;

const Como = () => {

    return (
        <SectionHow>
            <ArticleResource>
                <TitleResource>
                    Esta web tiene varias secciones
                </TitleResource>
                <PhResource>
                    Primero está el home
                </PhResource>
            </ArticleResource>

        </SectionHow>
    )

}

export default Como;