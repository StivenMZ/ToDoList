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


  @media screen and (max-width: 768px) {
    width: 100%;

  }

`;

const NotFoundTitle = styled.h4`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.noHistoryText};
  font-weight: bold;
  text-align: center;

  @media screen and (max-width: 1199px) {
    font-size: 2.3rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }



`;

const NotFoundPh = styled.p`
  color: ${({ theme }) => theme.FormInputTextColorTitleDesc};
  font-size: 1.3rem;
  text-align: center;

  @media screen and (max-width: 1199px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const BackToBackButtonHome = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  align-self: center;
  color: ${({ theme }) => theme.buttonPositiveText};
  border: none;
  background-color: ${({ theme }) => theme.buttonPositiveBackground};
  padding: 0.7rem 1.5rem;
  cursor: pointer;
  font-size: 2rem;
  border: 0.15rem solid transparent;
  box-sizing: border-box;
  border-radius: 0.4rem;
  &:hover {
    box-shadow: 0 0 0 0.11rem rgba(0, 0, 0, 0.3);
  }

  &:active {
    border: 0.15rem solid lightblue;
  }


  @media screen and (max-width: 768px) {
    font-size: 3rem;
   
  }
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
`;

const NotFound = () => {
  return (
    <NotFoundSection>
      <NotFoundTitle>404 - Página no encontrada</NotFoundTitle>
      <NotFoundPh>Esta página no existe, ¿estás perdido?.</NotFoundPh>
      <NotFoundPh>Puedes....</NotFoundPh>

      <LinkStyled to="/">
        <BackToBackButtonHome>Ir a la página principal</BackToBackButtonHome>
      </LinkStyled>
    </NotFoundSection>
  );
};

export default NotFound;
