import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { TareasGlobal } from '../../App';
import { Link, useLocation } from 'react-router-dom';
import Search from "../SearchResults/SearchInput";


const NavigationAnimationIn = keyframes`
0%{
    left: -23%;
}

100%{
    left: 0%;

}

`

const NavigationAnimationOut = keyframes`
0%{
    left: 0%;
}

100%{
    left: -26%;

}

`



const NavigationBarAside = styled.aside`
background-color: lightgray;
border: 1px solid black;
flex-basis: 20%;
height: 97.3vh;
border-radius: 0 1rem 1rem 0;
display: flex;
justify-content: center;
position: relative;
bottom: 11%;
animation: ${({ direction }) => (direction ? NavigationAnimationIn : NavigationAnimationOut)} 0.27s ease-out 1;
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

const DivColor = styled.div``;

//Ul y Li de la barra de navegación para el menú de exploración
const NavList = styled.ul`
display: flex;
flex-direction: column;
gap: 0.4rem;
width: 100%;
`;

const NavLi = styled.li`
display: flex;
justify-content: space-between;
cursor: pointer;

&:hover{
    background: rgba(10,20,30,0.4);
}
`;

//Elementos para cada LI del mení de exploración
const DivElementoTexto = styled.div`
text-decoration: none;
color: black;
font-size: 1rem;
align-items: center;



`;

const DivProfile = styled.div`
width: 30%;
background-color: goldenrod;
`;


const SpanElementoIcono = styled.span``;



const ButtonChangeColor = styled.button``;

const NavigationBar = () => {
    const Url = useLocation();

    const rutas = ['/crear-tarea','/lista-de-tareas','/funciones-adicionales', '/resultado-de-busqueda']

    const [render, setRender] = useState(false);

    const [direction, setDirection] = useState(false);


    useEffect(()=>{
        if(rutas.includes(Url.pathname)){
            setRender(true)
            setDirection(true);
        }else{
            setDirection(false);
            setTimeout(() => {
                setRender(false);      
            }, 150);
        }

    },[Url.pathname])

    return (
        <>
        {render && 
           <NavigationBarAside direction={direction}>
                    <OptionsSection>
                        <DivProfile />
                        <DivOpciones>
                            <NavList>
                                <Link to='/lista-de-tareas'>
                                    <NavLi>
                                        <DivElementoTexto>
                                            Lista de tareas
                                        </DivElementoTexto>
                                        <SpanElementoIcono>
                                            😊
                                        </SpanElementoIcono>
                                    </NavLi>
                                </Link>
                                <Link to='/crear-tarea'>
                                    <NavLi>
                                        <DivElementoTexto>
                                            Crear tarea
                                        </DivElementoTexto>
                                        <SpanElementoIcono>
                                            😊
                                        </SpanElementoIcono>
                                    </NavLi>
                                </Link>
                                <Link to='/funciones-adicionales'>
                                    <NavLi>
                                        <DivElementoTexto>
                                            Funciones Adicionales
                                        </DivElementoTexto>
                                        <SpanElementoIcono>
                                            😊
                                        </SpanElementoIcono>
                                    </NavLi>
                                </Link>
                            </NavList>
                        </DivOpciones>
                        <DivColor>
                            <ButtonChangeColor>
                                Cambiar color
                            </ButtonChangeColor>
                        </DivColor>

                    </OptionsSection>
                </NavigationBarAside>
}
        </>
    
    )
}



export default NavigationBar


