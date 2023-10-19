import React from "react";
import Header from "./Header";
const DefaultPage = ({ children }) => {

    console.log('default page renderizado')

    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default DefaultPage;