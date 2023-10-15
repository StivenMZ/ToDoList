import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DivCard = styled.div`
border: 1px solid;
background-color: white;
flex-basis: 24%;
height: 100%;
border-radius: 16px;
display: flex;
align-items: center;
flex-direction: column;
cursor: pointer;

&:hover{
    background-color: rgba(0,6,1, 0.3);
}

`;

const TitleP = styled.p`
margin-top: 8%;

`;

const Links = styled(Link)`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

`;

const NavigationCard = ({ title, ruta }) => {

    return (
        <>
            <DivCard>
                <Links to={ruta}>
                    <TitleP>
                        {title}
                    </TitleP>
                </Links>
            </DivCard>
        </>
    )

}

export default NavigationCard;