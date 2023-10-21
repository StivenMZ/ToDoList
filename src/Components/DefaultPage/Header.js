import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { TareasGlobal } from '../../App';
import { Link } from "react-router-dom";
import logo from "../../img/logo.jpg"
import Search from "../SearchResults/SearchInput";


const Head = styled.header`
margin-top: 1.3%;
display: flex;
justify-content: flex-end;
width: 100%;
align-items: center;
gap: 2%;
`;

const DivIcon = styled.div`
display: flex;
width: 10%;
justify-content: center;
align-items: center;
position: relative;
`;


const Icon = styled.div`
background-color: black;
width: 30%;
max-height: 10vh;

`;


const TitleH2 = styled.h1`
width: 50%;
`;



const IconLink = styled(Link)`
display: flex;
`;

const Header = () => {

    const Orn = logo;

    return (<>
        <Head>
           <Search />
            <DivIcon>
                <IconLink to={'/'} draggable='false'>
                    <Icon>
                        <img src={Orn} width={'30px'} height={'30px'} alt="icon"></img>
                    </Icon>
                    <TitleH2>Task Manager</TitleH2>
                </IconLink>
            </DivIcon>
         
        </Head>
    </>)
}

export default Header;