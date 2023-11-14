import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";



const TitleP = styled.p`
margin-top: 8%;
font-size: 1.5rem;
color: ${props => props.theme.titleCards};

@media screen and (max-width: 800px) {
   font-size: 1.7rem;
 }



`;

const Links = styled(Link)`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

`;

const DescriptionCard = styled.p`
margin: 15%;
font-size: 1.2rem;
color: ${props => props.theme.descriptionCards};
width: 85%;


@media screen and (max-width: 800px) {
    font-size: 1.5rem;
 }


`;

const DivCard = styled.div`
/* border: 1px solid; */
text-align: center;
background-color:${props => props.theme.cardBackground};
flex-basis: 24%;
height: 100%;
border-radius: 16px;
display: flex;
align-items: center;
flex-direction: column;
cursor: pointer;
box-sizing: border-box;

&:hover{
    box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.4); 


    & ${TitleP}, & ${DescriptionCard} {
      font-weight: bold;
    }


    

}

@media screen and (max-width: 800px) {
    flex-basis: 45%;
    height: 100%;
    margin-top: 1%;
 }

`;




const NavigationCard = ({ title, ruta, description }) => {

    const [showDescription, setShowDescription] = useState(false);

    return (
        <>
            <DivCard
                onMouseEnter={() => {
                    setShowDescription(true);
                }}
                onMouseLeave={() => {
                    setShowDescription(false);
                }}
            >
                <Links to={ruta} draggable='false'>
                    <TitleP>
                        {title}
                    </TitleP>
                    <DescriptionCard>
                        {showDescription &&
                        description  }
                    </DescriptionCard>
                </Links>
            </DivCard>
        </>
    )

}

export default NavigationCard;