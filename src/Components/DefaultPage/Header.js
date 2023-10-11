import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import {TareasGlobal} from '../../App';

const Head = styled.header`
margin-top: 1%;
display: flex;
justify-content: center;

`;

const TitleH2 = styled.h2`

`;

const Header = () =>{

    return (<>
    <Head>
    <TitleH2>Crea, gestiona, y lleva un orden de tus tareas</TitleH2>
    </Head>
    </>)
}

export default Header;