import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { useState } from "react";
import InputBusqueda from "./inputSearch";
import {TareasGlobal} from '../../App'


const SectionSearch = styled.header`
background-color: ${({ theme }) => theme.background};;
height: 6vh;
width: 100%;
display: flex;
align-items: center;
flex-direction: row;
justify-content: center;
padding: 1rem 0;
`

const DivBusqueda = styled.div`
width: 50%;
align-self: center;
display: flex;
gap: 0.2rem;
`



const ButtonBusqueda = styled.button`
background-color: ${({ theme }) => theme.button};
cursor: pointer;
font-size: 1.1rem;
padding: 0.23rem;
border: none;
border: 0.1rem solid;
border-radius: 0.1rem;
border-color: ${({ theme }) => theme.buttonBorder};

&:hover{
    background-color: ${({ theme }) => theme.buttonHover};    
    border-color: ${({ theme }) => theme.buttonBorderHover};

}

&:active{
    box-shadow: 0 0 0.11rem rgba(0, 0, 0, 0.5); /* Efecto de luminosidad alrededor del botón */

}


`

const DivChangeTheme = styled.div`
align-self: flex-end;
position: absolute;
    top: 3%;
    right: 4%;

`

const ButtonChangeTheme = styled.button`

`




const Search = ({onChangeTheme}) =>{

    const [search, setSearch] = useState('');

    const handleSearch = ()=>{
        console.log(search)
    }


    return(
        <>
        <SectionSearch>
            <DivBusqueda>
            <InputBusqueda></InputBusqueda>

            <ButtonBusqueda
            onClick={()=>{
                handleSearch();
            }}
            >Buscar</ButtonBusqueda>

            </DivBusqueda>
            <DivChangeTheme>
                <ButtonChangeTheme
                onClick={onChangeTheme}
                >test</ButtonChangeTheme>
            </DivChangeTheme>
        </SectionSearch>
        </>
    )
}

export default Search;

