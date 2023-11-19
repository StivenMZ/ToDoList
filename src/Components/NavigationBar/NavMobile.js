import React, { useEffect, useState, useContext } from "react";
import styled, { keyframes } from "styled-components";
import { TareasGlobal } from '../../App';
import { Link, useLocation } from 'react-router-dom';

import home from '../../img/home.svg';
import list from '../../img/list.svg';
import add from '../../img/add.svg';
import history from '../../img/history.svg';
import aditional from '../../img/aditional.svg';
import { useMediaQuery } from "react-responsive";

const NavigationAnimationIn = keyframes`
0%{
    bottom: -23%;
     flex-basis: 20%;

  
}

100%{
    bottom: 0%;
flex-basis: 20%;


}

`

const NavigationAnimationOut = keyframes`
0%{
    bottom: 0%;
    flex-basis: 20%;

 
}

100%{
    bottom: -23%;
    flex-basis: 20%;

 

}

`



const NavigationBarAside = styled.footer`
background-color: ${props => props.theme.NavBarBg};
width: 100%;
height: 13vh;
max-height: 100vh;
display: flex;
justify-content: center;
position: fixed;
bottom: 0;
animation: ${({ direction }) => (direction ? NavigationAnimationIn : NavigationAnimationOut)} 0.27s ease-in 1; 
z-index: 7;



`;

// NavigationAnimationOut  NavigationAnimationIn


const OptionsSection = styled.section`
width: 100%;
height: 100%;
align-self: center;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

`;



//Divs para secciones de la barra de navegación
const DivOpciones = styled.div`
width: 100%;
height: 100%;
`;



const NavLi = styled.li`
display: flex;
justify-content: flex-end;
cursor: pointer;
background-color: ${({ activate, theme }) => (activate ? theme.NavLiBg : '')};
align-items: center;
flex-direction: column-reverse;
height: 100%;
gap: 1rem   ;
flex-wrap: wrap;

&:hover{
   background-color: ${({ activate, theme }) => (activate ? theme.NavLiBg : theme.NavLiHover)}; 

}





`;


//Ul y Li de la barra de navegación para el menú de exploración
const NavList = styled.ul`
display: flex;
flex-direction: row;
width: 100%;
position: relative;
height: 100%;
`;

//Elementos para cada LI del mení de exploración
const DivElementoTexto = styled.div`
text-decoration: none;
color: ${props => props.theme.NavBarText};
font-size: 1.7rem;
align-items: center;
padding: 1%;
text-align: center;
flex-basis: 30%;
overflow-wrap: break-word;
width: 97%;
max-height: 40%;


`;



const SpanElementoIcono = styled.div`
display: flex;
height: auto;
width: 20%;
justify-content: flex-start;
flex-basis: 30%;
padding-top: 6%;

`;

const Imgicon = styled.img`
width: 100%;
height: 100%;


`;

const LinkStyled = styled(Link)`
width: 20%;
height: 100%;
`;


const NavMobile = () => {
    const Url = useLocation();



    const { setBusqueda, setEsTemaOscuro, esTemaOscuro } = useContext(TareasGlobal);

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
    
        
          
                <NavigationBarAside direction={direction}>
                    <OptionsSection>
                        <DivOpciones>
                            <NavList>
                                <LinkStyled to='/' draggable="false">
                                    <NavLi>
                                        <DivElementoTexto>
                                            Inicio
                                        </DivElementoTexto>
                                        <SpanElementoIcono>
                                            <Imgicon
                                                src={home}
                                                alt="inicio-icono"
                                                draggable="false"
                                            />
                                        </SpanElementoIcono>
                                    </NavLi>
                                </LinkStyled>
                               
                                <LinkStyled to='/crear-tarea' draggable="false">
                                    <NavLi activate={Url.pathname === '/crear-tarea'}
                                    >
                                        <DivElementoTexto>
                                            Crear tarea
                                        </DivElementoTexto>
                                        <SpanElementoIcono>
                                            <Imgicon
                                                src={add}
                                                alt="crear-icono"
                                                draggable="false"
                                            />
                                        </SpanElementoIcono>
                                    </NavLi>
                                </LinkStyled>
                                <LinkStyled to='/lista-de-tareas'
                                draggable="false"
                                >
                                    <NavLi activate={Url.pathname === '/lista-de-tareas'}
                                    >
                                        <DivElementoTexto>
                                            Lista de tareas
                                        </DivElementoTexto>
                                        <SpanElementoIcono>
                                            <Imgicon
                                                src={list}
                                                alt="lista-icono"
                                                draggable="false"
                                            />
                                        </SpanElementoIcono>
                                    </NavLi>
                                </LinkStyled>
                                <LinkStyled to='/historial' draggable="false">
                                    <NavLi activate={Url.pathname === '/historial'}>
                                        <DivElementoTexto>
                                            Historial
                                        </DivElementoTexto>
                                        <SpanElementoIcono>
                                            <Imgicon
                                                src={history}
                                                alt="historial-icono"
                                                draggable="false"
                                            />
                                        </SpanElementoIcono>
                                    </NavLi>
                                </LinkStyled>

                                <LinkStyled to='/mas-funciones' draggable="false">
                                    <NavLi activate={Url.pathname === '/mas-funciones'}
                                    >
                                        <DivElementoTexto>
                                            Más funciones
                                        </DivElementoTexto>
                                        <SpanElementoIcono>
                                            <Imgicon
                                                src={aditional}
                                                alt="funciones-icono"
                                                draggable="false"
                                            />
                                        </SpanElementoIcono>
                                    </NavLi>
                                </LinkStyled>

                            </NavList>
                        </DivOpciones>
                     
                    </OptionsSection>
                </NavigationBarAside>
            
            
        </>

    )
    
}



export default NavMobile;


