import React, { useContext} from "react";
import styled from "styled-components";
import { TareasGlobal } from '../../App';
import { Link } from "react-router-dom";
import logoa from "../../img/logoa.svg"
import logoab from "../../img/paste-clipboard .svg"

import Search from "../SearchResults/SearchInput";


const Head = styled.header`
margin-top: 1.3%;
display: flex;
justify-content: flex-end;
width: 100%;
align-items: center;
gap: 2%;

@media screen and (max-width: 800px) {
    margin-top: 1.5%;
 }

`;

const DivIcon = styled.div`
display: flex;
width: 10%;
justify-content: center;
align-items: center;
position: relative;
align-items: center;
@media screen and (max-width: 800px) {
   width: 20%
 }

`;


const Icon = styled.div`
width: 30%;
max-height: 10vh;

@media screen and (max-width: 800px) {
    max-height: 15vh;
 }

`;


const TitleH2 = styled.h1`
width: 50%;
font-weight: bold;
text-align: justify;

@media screen and (max-width: 800px) {
   font-size: 1.4rem;
 }

`;



const IconLink = styled(Link)`
display: flex;
text-decoration: none;
color: ${({theme}) => theme.titleMain};



`;

const ImgIcon = styled.img`
width: 2.3rem;
height: 2.3rem;

@media screen and (max-width: 800px) {
    width: 3rem;
height: 3rem;
 }


`;

const Header = () => {

    const {esTemaOscuro} = useContext(TareasGlobal);


    return (<>
        <Head>
           <Search />
            <DivIcon>
                <IconLink to={'/'} draggable='false'>
                    <Icon>
                        <ImgIcon src={esTemaOscuro ? logoab : logoa}  alt="icon" draggable="false"></ImgIcon>
                    </Icon>
                    <TitleH2>Task Manager</TitleH2>
                </IconLink>
            </DivIcon>
         
        </Head>
    </>)
}


export default Header;