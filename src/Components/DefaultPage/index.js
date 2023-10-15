import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import {TareasGlobal} from '../../App';
import NavigationBar from "./NavigationBar";
import Header from "./Header";
import { useLocation } from "react-router-dom";

//83%

const Main = styled.main`
width:   ${({ widthIn }) => (widthIn ? '100%' : '83%')};
position: absolute;
right: 0;
height: 90vh;
`;




const DefaultPage = ({children}) =>{

    const ruta = useLocation();
    
    
    const [widthIn, setWidthIn] = useState('');

    const [url, setUrl] = useState(ruta.pathname);
    
    useEffect(()=>{
        setWidthIn(url === '/')
    },[url])

return(
    <>
    <Header></Header>
    {url !== '/' ?  <NavigationBar /> : <></>}
    {/* <NavigationBar>
    </NavigationBar> */}
    <Main
    widthIn={widthIn}
    >
        {children}
    </Main>
    </>
    )
}

export default DefaultPage;