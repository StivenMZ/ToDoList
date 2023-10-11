import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import {TareasGlobal} from '../../App';
import NavigationBar from "./NavigationBar";
import Header from "./Header";

const Main = styled.main`
width: 83%;
position: absolute;
right: 0;
height: 90vh;
`;




const DefaultPage = ({children}) =>{

return(
    <>
    <Header></Header>
    <NavigationBar>
    </NavigationBar>
    <Main>
        {children}
    </Main>
    </>
    )
}

export default DefaultPage;