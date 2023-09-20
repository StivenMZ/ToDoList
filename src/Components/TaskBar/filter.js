import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TitleFilter = styled.h3`

`;

const SectionButtons = styled.section`
display: flex;
width: 80%;
align-items: center;
justify-content: center;
gap: 1%;

`;

const ButtonFilter = styled.button``;

const FilterTask = ({filterFunct}) =>{

    return (<>
        <TitleFilter>Filtrar por prioridad</TitleFilter>
        <SectionButtons>
            <ButtonFilter
            onClick={()=>{
                filterFunct("Alta");
            }}
            >Alta</ButtonFilter>
            <ButtonFilter
             onClick={()=>{
                filterFunct("Media");
            }}
            >Media</ButtonFilter>
            <ButtonFilter
             onClick={()=>{
                filterFunct("Baja");
            }}
            >Baja</ButtonFilter>
            <ButtonFilter
              onClick={()=>{
                filterFunct("no");
            }}
            >No filtrar</ButtonFilter>

        </SectionButtons>
    </>)

}

export default FilterTask;