import React, { useState, useContext, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const SectionPolicity = styled.section`
  width: 100%;
  height: 100%;
  min-height: 50vh;
  max-height: 60vh;

  @media screen and (max-width: 300px) {
width: 99%;
max-height: 58.8vh;

}
`;

const ArticlePolicity = styled.article`
  display: flex;
  flex-direction: column;
  padding: 1% 1.3%;
  overflow-wrap: break-word;
  width: 100%;
  background-color: ${({theme}) => theme.SectionBGcolor};
  border-radius: 1rem;
  height: 100%;





`;

const TitlePolicity = styled.h4`
  color: ${({ theme }) => theme.TitleResourceColor};
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 1%;
  

  @media screen and (max-width: 1199px) {
 font-size :1.4rem ;
}

@media screen and (max-width: 768px) {
font-size: 1.8rem;
}

@media screen and (max-width: 300px) {
width: 90%;


}

`;


const UlPolicity = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const LiPolicity = styled.li`
  color: ${({ theme }) => theme.PhResource};
  display: flex;
  flex-direction: column;
  gap: 1%;
`;

const LiTitle = styled.h6`
font-weight: bold;
@media screen and (max-width: 1199px) {
 font-size :1.2rem ;
}

@media screen and (max-width: 768px) {
font-size: 1.7rem;
}

@media screen and (max-width: 300px) {

width: 95%;


}


`;



const Recursos = () => {
  return (
    <SectionPolicity>
      <ArticlePolicity>
        <TitlePolicity>Reglas de uso</TitlePolicity>
        <UlPolicity>
            <LiPolicity>
                  <LiTitle>{`-El uso es totalmente libre, de hecho, puedes dirigirte a Más funciones-> Sobre este sitio web. E ir al repositorio de GitHub, para que conozcas todo el código, el cual está documentado.`}</LiTitle>  
            </LiPolicity>    
        </UlPolicity>
      </ArticlePolicity>
    </SectionPolicity>
  );
};

export default Recursos;
