import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { TareasGlobal } from '../../App';
import { Link } from "react-router-dom";
import logo from "../../img/logo.jpg"


const Head = styled.header`
margin-top: 1.3%;
display: flex;
justify-content: space-around;
width: 100%;
align-items: center;

`;

const DivIcon = styled.div`
display: flex;
width: 10%;
justify-content: center;
`;


const Icon = styled.div`
background-color: black;
width: 30%;
align-items: center;
max-height: 10vh;
`;


const TitleH2 = styled.h1`
width: 50%;
`;




const InputSearch = styled.input`
z-index: 100;
width: 60%;
`;

const Header = () => {

    const Orn = logo;

    return (<>
        <Head>
            <DivIcon>
                <Icon>
                    <img src={Orn} width={'30px'} height={'30px'}></img>
                </Icon>
                <TitleH2>Task Manager</TitleH2>
            </DivIcon>
            <InputSearch
            placeholder="Buscar tarea.."
            ></InputSearch>
            {/* <Link to={'/'}>
                <button>volver</button>
            </Link> */}
        </Head>
    </>)
}

export default Header;