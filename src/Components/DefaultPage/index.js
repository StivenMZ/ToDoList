import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { useState, useEffect, createContext } from "react";

const RutaContexto = createContext();

const DefaultPage = ({ children }) => {


    console.log('default page renderizado')

    return (
        <>
                <Header />
                {children}

        </>
    )
}

export { RutaContexto };
export default DefaultPage;