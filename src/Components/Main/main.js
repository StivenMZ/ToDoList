import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { useState } from "react";
import { TareasGlobal } from "../../App";



const Mainma = styled.main`
width:   100%;
position: absolute;
right: 0;
height: 90vh;
display: flex;
flex-wrap: wrap;

@media screen and (max-width: 768px) {
    flex-wrap: nowrap;
    max-width: 100%;
    }
`;


const Main = ({ children }) => {
  const {showNavigationBar} = useContext(TareasGlobal)

    return (
        <>
            <Mainma>
                    {children}
            </Mainma>
        </>
    )
}

export default Main;