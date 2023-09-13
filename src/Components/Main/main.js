import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Mainma = styled.main`
width: 100%;
height: 74vh;
display: flex;
`

const Main = ({children}) =>{
    return(
        <>
        <Mainma>
            {children}
        </Mainma>
        </>
    )
}

export default Main;