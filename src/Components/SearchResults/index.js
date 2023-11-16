import React, { Suspense, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import TaskCard from "../TaskBar/taskCard";
import { TareasGlobal } from "../../App";
import { useNavigate } from "react-router-dom";
import ResultsOfSearch from "./ResultsOfSerach";

const SearchResult = styled.section`
  margin-top: 3%;
  height: 80vh;
  width: 70%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;

`;

const DivTitle = styled.div`
  flex-basis: 10%;
  max-width: 50%;
  max-height: 40%;
  width: 100%;
  min-height: 30%;
  display: flex;
  flex-direction: column;
`;

const PhTitle = styled.p`
  color: ${({ theme }) => theme.ResultsTextTitle};
  font-size: 1.3rem;

  @media screen and (max-width: 1199px) {
 font-size :1.6rem ;
}


`;

const PBusquedaWord = styled.p`
  font-weight: bolder;
  display: inline-block;
  word-wrap: break-word;
  max-width: 62%;
  color: ${({ theme }) => theme.ResultsTextTitle};
  font-size: 1.2rem;
`;

const BackToBackButton = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  align-self: end;
  color: ${({ theme }) => theme.buttonPositiveText};
  border: none;
  background-color: ${({ theme }) => theme.buttonPositiveBackground};
  padding: 0.7rem 1.5rem;
  cursor: pointer;
  font-size: 1.3rem;
  border: 0.15rem solid transparent;
  box-sizing: border-box;
  border-radius: 0.4rem;
  &:hover {
    box-shadow: 0 0 0 0.11rem rgba(0, 0, 0, 0.3);
  }

  &:active {
    border: 0.15rem solid lightblue;
  }




`;



const SearchResults = () => {
  const navigate = useNavigate();

  const { busqueda, setBusqueda } = useContext(TareasGlobal);

  return (
    <>
      <SearchResult>
        <BackToBackButton
          onClick={() => {
            console.log(`$desde resultados de búsuqeda`);
            setBusqueda("");
            navigate(-1);
          }}
        >
          Volver atrás
        </BackToBackButton>
        <DivTitle>
          <PhTitle>Resultados de búsqueda para:</PhTitle>
          <PBusquedaWord>{busqueda}</PBusquedaWord>
        </DivTitle>
        <ResultsOfSearch />
      </SearchResult>
    </>
  );
};

export default SearchResults;
