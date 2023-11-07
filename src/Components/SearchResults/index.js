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
  flex-wrap: wrap;
`;

const DivTitle = styled.div`
  flex-basis: 10%;
  margin: 2% 0;
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


  
`;

const PBusquedaWord = styled.p`
font-weight: bolder;
display: inline-block;
word-wrap: break-word;
max-width: 70%;
color: ${({ theme }) => theme.ResultsTextTitle};
`;

const BackToBackButton = styled.button`
  border: 1px solid;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 0.5rem 1rem;
  align-self: end;
  cursor: pointer;
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
