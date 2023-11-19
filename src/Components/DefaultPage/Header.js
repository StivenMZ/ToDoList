import React, { useContext } from "react";
import styled from "styled-components";
import { TareasGlobal } from "../../App";
import { Link } from "react-router-dom";
import logoa from "../../img/logoa.svg";
import logoab from "../../img/paste-clipboard .svg";
import sun from "../../img/sun.svg";
import moon from "../../img/moon.svg";
import mooncolor from "../../img/half-moon.svg";
import suncolor from "../../img/sun-light.svg";
import Search from "../SearchResults/SearchInput";
import { useMediaQuery } from "react-responsive";

const Head = styled.header`
  padding-top: 1.3%;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  gap: 2%;

  @media screen and (max-width: 1199px) {
    padding-top: 1.5%;
  }

  @media screen and (max-width: 768px) {
    justify-content: space-evenly;
  }
`;

const DivIcon = styled.div`
  display: flex;
  width: 10%;
  justify-content: center;
  align-items: center;
  position: relative;
  align-items: center;
  @media screen and (max-width: 1199px) {
    width: 20%;
  }

`;

const Icon = styled.div`
  width: 30%;
  max-height: 10vh;

  @media screen and (max-width: 1199px) {
    max-height: 15vh;
  }
`;

const TitleH2 = styled.h2`
  width: 50%;
  font-weight: bold;
  text-align: justify;

  @media screen and (max-width: 1199px) {
    font-size: 1.4rem;
  }



`;

const IconLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: ${({ theme }) => theme.titleMain};
`;

const ImgIcon = styled.img`
  width: 2.3rem;
  height: 2.3rem;

  @media screen and (max-width: 1199px) {
    width: 3rem;
    height: 3rem;
  }
`;



const DivColor = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  
`;

const ImgColor = styled.img`
  width: 2rem;
  height: 2rem;
  @media screen and (max-width: 1199px) {
    width: 2.3rem;
    height: 2.3rem;
  }

  @media screen and (max-width: 980px) {
    width: 2.5rem;
    height: 2.5rem;
  }


`;

const ButtonChangeColor = styled.button`
  background-color: ${({ theme }) => theme.cardBackground};
  border: none;
  border: 0.15rem solid ${({ theme }) => theme.backgroundBody};
  cursor: pointer;
`;

const Header = () => {
  const { esTemaOscuro, setEsTemaOscuro } = useContext(TareasGlobal);
  const isMobile = useMediaQuery({maxWidth: 768})


  return (
    <>
      <Head>
        {isMobile &&
 
        <DivColor>
          <ButtonChangeColor
            onClick={() => {
              setEsTemaOscuro(false);
            }}
          >
            <ImgColor
              src={esTemaOscuro ? sun : suncolor}
              alt="sol-icono"
              draggable="false"
            />
          </ButtonChangeColor>
          <ButtonChangeColor
            onClick={() => {
              setEsTemaOscuro(true);
            }}
          >
            <ImgColor
              src={esTemaOscuro ? mooncolor : moon}
              alt="luna-icono"
              draggable="false"
            />
          </ButtonChangeColor>
        </DivColor>
        }
        <Search />

        <DivIcon>
          <IconLink to={"/"} draggable="false">
            <Icon>
              <ImgIcon
                src={esTemaOscuro ? logoab : logoa}
                alt="icon"
                draggable="false"
              ></ImgIcon>
            </Icon>
            <TitleH2>Task Manager</TitleH2>
          </IconLink>
        </DivIcon>
      </Head>
    </>
  );
};

export default Header;
