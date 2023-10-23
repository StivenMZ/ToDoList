import React, { useState, useContext, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const SectionHelp = styled.section`
width: 100%;
height: 100%;
`;

const ArticleResource = styled.article``

const TitleResource = styled.h3``

const PhResource = styled.p``;

const Ayuda = () => {

    return (
        <SectionHelp>
            <ArticleResource>
                <TitleResource>
                    ¿Puedo editar tareas?
                </TitleResource>
                <PhResource>
                    No puedes
                </PhResource>
            </ArticleResource>

        </SectionHelp>
    )

}

export default Ayuda;