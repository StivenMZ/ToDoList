import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';


const TitleP = styled.p`
margin-top: 8%;
font-size: 1.5rem;
color: ${props => props.theme.titleCards};


@media screen and (max-width: 1199px) {
   font-size: 1.7rem;
 }


 @media screen and (max-width: 768px) {
    font-size: 2rem;
    margin-top: 4%;
}


 @media screen and (max-width: 400px) {
    font-size: 1.5rem;
 }



`;

const Links = styled(Link)`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
box-sizing: border-box;

`;

const DescriptionCard = styled.p`
margin: 15%;
font-size: 1.2rem;
color: ${props => props.theme.descriptionCards};
width: 85%;


@media screen and (max-width: 1199px) {
    font-size: 1.6rem;
    color: ${({theme}) => theme.descriptionCards};
    margin: 10%;
 }

 @media screen and (max-width: 768px) {
    font-size: 1.8rem;
    margin-top: 5%;
}



 @media screen and (max-width: 400px) {
    font-size: 1.4rem;
   margin-top: 2%;
 }


`;

const DivCard = styled.div`
text-align: center;
background-color:${props => props.theme.cardBackground};
flex-basis: 24%;
height: 100%;
border-radius: 1rem;
display: flex;
align-items: center;
flex-direction: column;
cursor: pointer;
box-sizing: border-box;
box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0); 

&:hover{
    box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.4); 


    & ${TitleP}, & ${DescriptionCard} {
      font-weight: bold;

    }


    

}

@media screen and (max-width: 1199px) {
    flex-basis: 40%;
    height: 46%;
    margin-top: 0%;

 }

 @media screen and (max-width: 768px) {
    flex-basis: 0;
    height: 13rem;
}

 @media screen and (max-width: 400px) {
    height: 9rem;


 }
 @media screen and (max-width: 300px) {
    height: 8.5rem;


 }



`;




const NavigationCard = ({ title, ruta, description }) => {

    const isDesktop = useMediaQuery({ maxWidth: 1199 });


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

                    {!isDesktop ? (
                          <DescriptionCard>
                          {showDescription &&
                          description  }
                      </DescriptionCard>
                    ) : (
                        <DescriptionCard>
                        {description}
                    </DescriptionCard>
                    )}
                  
                </Links>
            </DivCard>
        </>
    )

}

export default NavigationCard;