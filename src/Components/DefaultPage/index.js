import React from "react";
import Header from "./Header";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, createContext } from "react";



const DefaultPage = ({ children }) => {


    return (
        <>
                <Header />
                {children}

        </>
    )
}


export default DefaultPage;