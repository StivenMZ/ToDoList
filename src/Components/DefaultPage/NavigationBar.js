import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { TareasGlobal } from '../../App';
import { Link } from 'react-router-dom';


const NavigationBarAside = styled.aside`
background-color: lightgray;
border: 1px solid black;
width: 17%;
position: absolute;
left: 0;
height: 99.7vh;
top: 0;
border-radius: 0 1rem 1rem 0;
display: flex;
justify-content: center;
`;

const OptionsSection = styled.section`
width: 93%;
height: 95%;
align-self: center;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;

const ButtonSearch = styled.button``;

//Divs para secciones de la barra de navegación
const DivBuscar = styled.div``;

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

const SpanElementoIcono = styled.span``;


//Botón para cambiar colores de la página

const ButtonChangeColor = styled.button``;


const NavigationBar = () => {
    return (
        <>
            <NavigationBarAside>
                <OptionsSection>
                    <DivBuscar>
                        <ButtonSearch>
                            buscar
                        </ButtonSearch>
                    </DivBuscar>
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
        </>
    )
}

export default NavigationBar