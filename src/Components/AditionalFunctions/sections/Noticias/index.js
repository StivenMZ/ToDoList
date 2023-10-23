import React, { useState, useContext, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const SectionNews = styled.section`
width: 100%;
height: 100%;
`;

const ArticleResource = styled.article``

const TitleResource = styled.h3``

const PhResource = styled.p``;

const Noticias = () => {

    return (
        <SectionNews>
            <ArticleResource>
                <TitleResource>
                    Versión 1.0
                </TitleResource>
                <PhResource>
                    En esta versión puedes.....
                </PhResource>
            </ArticleResource>

        </SectionNews>
    )

}

export default Noticias;