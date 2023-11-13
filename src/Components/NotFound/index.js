import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NotFoundSection = styled.section`
margin-top: 1%;
height: 80vh;
width: 70%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
gap: 0.2rem;

`;

const NotFoundTitle = styled.h4`
font-size: 1.5rem;
color: ${({ theme }) => theme.noHistoryText};
font-weight: bold;

`;

const NotFoundPh = styled.p`
color: ${({ theme }) =>   theme.FormInputTextColorTitleDesc};
font-size: 1.3rem;
`;

const NotFound = () => {

 
    
 

    return (
        <NotFoundSection>
            <NotFoundTitle>404 - Página no encontrada</NotFoundTitle>
            <NotFoundPh>Esta página no existe, ¿estás perdido?.</NotFoundPh>
      <NotFoundPh>Puedes volver a la <Link to="/">página principal</Link>.</NotFoundPh>
        </NotFoundSection>
    )


}

export default NotFound;
