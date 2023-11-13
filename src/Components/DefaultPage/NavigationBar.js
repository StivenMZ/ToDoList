import React, { useEffect, useState, useContext } from "react";
import styled, { keyframes } from "styled-components";
import { TareasGlobal } from '../../App';
import { Link, useLocation } from 'react-router-dom';

import home from '../../img/home.svg';
import list from '../../img/list.svg';
import add from '../../img/add.svg';
import history from '../../img/history.svg';
import aditional from '../../img/aditional.svg';
import sun from '../../img/sun.svg';
import moon from '../../img/moon.svg';


const NavigationAnimationIn = keyframes`
0%{
    left: -23%;
     flex-basis: 20%;
}

100%{
    left: -5%;
flex-basis: 20%;
}

`

const NavigationAnimationOut = keyframes`
0%{
    left: 0%;
    flex-basis: 20%;
}

100%{
    left: -26%;
    flex-basis: 20%;

}

`



const NavigationBarAside = styled.aside`
background-color: ${props => props.theme.NavBarBg};
flex-basis: 20%;
height: 100vh;
display: flex;
justify-content: center;
position: relative;
bottom: 11%;
animation: ${({ direction }) => (direction ? NavigationAnimationIn : NavigationAnimationOut)} 0.27s ease-in 1; 
z-index: 7;
`;

// NavigationAnimationOut  NavigationAnimationIn


const OptionsSection = styled.section`
width: 93%;
height: 95%;
align-self: center;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;



//Divs para secciones de la barra de navegación
const DivOpciones = styled.div`
width: 100%;
`;



const NavLi = styled.li`
display: flex;
justify-content: space-between;
cursor: pointer;
padding: 2%;
background-color: ${({ activate, theme }) => (activate ? theme.NavLiBg : '')};
border-radius: 0 1rem 1rem 0;

&:hover{
   background-color: ${({ activate, theme }) => (activate ? theme.NavLiBg : theme.NavLiHover)}; 
    border-radius: 0 1rem 1rem 0;

}


`;


//Ul y Li de la barra de navegación para el menú de exploración
const NavList = styled.ul`
display: flex;
flex-direction: column;
gap: 0.4rem;
width: 100%;
`;

//Elementos para cada LI del mení de exploración
const DivElementoTexto = styled.div`
text-decoration: none;
color: ${props => props.theme.NavBarText};
font-size: 1.2rem;
align-items: center;
padding: 1%;




`;

const DivProfile = styled.div`
width: 30%;
background-color: goldenrod;
`;


const SpanElementoIcono = styled.span`
display: flex;
    height: 100%;
    width: 20%;
    justify-content: center;
`;

const Imgicon = styled.img`
width: 55%;
height: 55%;
`;





const DivColor = styled.div``;

const ImgColor = styled.img``;



const ButtonChangeColor = styled.button``;

const NavigationBar = () => {
    const Url = useLocation();

    const { setBusqueda } = useContext(TareasGlobal);

    const rutas = ['/']

    const [render, setRender] = useState(false);

    const [direction, setDirection] = useState(false);


    useEffect(() => {
        if (!(rutas.includes(Url.pathname))) {
            setRender(true)
            setDirection(true);
        } else {
            setDirection(false);
            setTimeout(() => {
                setRender(false);
            }, 150);
        }

        if (Url.pathname !== '/resultado-de-busqueda') {
            setBusqueda('')
        }

    }, [Url.pathname])

    return (
        <>
            {render &&
                <NavigationBarAside direction={direction}>
                    <OptionsSection>
                        <DivProfile />
                        <DivOpciones>
                            <NavList>
                                <Link to='/'>
                                    <NavLi>
                                        <DivElementoTexto>
                                            Inicio
                                        </DivElementoTexto>
                                        <SpanElementoIcono>
                                            <Imgicon
                                                src={home}
                                                alt="inicio-icono"
                                            />
                                        </SpanElementoIcono>
                                    </NavLi>
                                </Link>
                               
                                <Link to='/crear-tarea'>
                                    <NavLi activate={Url.pathname === '/crear-tarea'}
                                    >
                                        <DivElementoTexto>
                                            Crear tarea
                                        </DivElementoTexto>
                                        <SpanElementoIcono>
                                            <Imgicon
                                                src={add}
                                                alt="crear-icono"
                                            />
                                        </SpanElementoIcono>
                                    </NavLi>
                                </Link>
                                <Link to='/lista-de-tareas'>
                                    <NavLi activate={Url.pathname === '/lista-de-tareas'}
                                    >
                                        <DivElementoTexto>
                                            Lista de tareas
                                        </DivElementoTexto>
                                        <SpanElementoIcono>
                                            <Imgicon
                                                src={list}
                                                alt="lista-icono"
                                            />
                                        </SpanElementoIcono>
                                    </NavLi>
                                </Link>
                                <Link to='/historial'>
                                    <NavLi activate={Url.pathname === '/historial'}>
                                        <DivElementoTexto>
                                            Historial
                                        </DivElementoTexto>
                                        <SpanElementoIcono>
                                            <Imgicon
                                                src={history}
                                                alt="historial-icono"
                                            />
                                        </SpanElementoIcono>
                                    </NavLi>
                                </Link>

                                <Link to='/funciones-adicionales'>
                                    <NavLi activate={Url.pathname === '/funciones-adicionales'}
                                    >
                                        <DivElementoTexto>
                                            Funciones Adicionales
                                        </DivElementoTexto>
                                        <SpanElementoIcono>
                                            <Imgicon
                                                src={aditional}
                                                alt="funciones-icono"
                                            />
                                        </SpanElementoIcono>
                                    </NavLi>
                                </Link>

                            </NavList>
                        </DivOpciones>
                        <DivColor>
                            <ButtonChangeColor>
                                <ImgColor
                                    src={sun}
                                    alt="sol-icono"
                                />
                            </ButtonChangeColor>
                            <ButtonChangeColor>
                                <ImgColor src={moon}
                                    alt="luna-icono"
                                />
                            </ButtonChangeColor>
                        </DivColor>
                    </OptionsSection>
                </NavigationBarAside>
            }
        </>

    )
}



export default NavigationBar


