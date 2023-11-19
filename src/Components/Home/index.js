import React from "react";
import styled, { keyframes } from "styled-components";
import NavigationCard from "./NavigationCard";



const SectionHome = styled.section`
width: 100%;
height: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
position: absolute;

`;


const Pmain = styled.h1`
margin-top: 10%;
font-size: 2.2rem;
color:  ${props => props.theme.titleMain};
text-align: center;
width: 100%;

@media screen and (max-width: 1199px) {
      font-size: 2.7rem;
      margin-top: 3%;
 }

 @media screen and (max-width: 768px) {
    width: 90%;
}

`;

const CardsSection = styled.section`

width: 100%;
height: 70vh;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 1199px) {
    min-height: 40%;


 }

`;

const DivCards = styled.div`
display: flex;
width: 90%;
height: 40vh;
flex-wrap: wrap;
gap: 1%;
box-sizing: border-box;
align-self: flex-end;
margin-bottom: 2%;



@media screen and (max-width: 1199px) {
    gap: 5%;
    align-self: center;
    justify-content: center;
   /*  height: auto; */
   height: 100%;
    margin-bottom: 0%;
    align-self: flex-start;
    margin-top: 3vh;
    
 }

 @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    gap: 2%;
    height: 110%;
}





`;

const Home = () => {
    
/*      const {setShowNavigationBar} = useContext(TareasGlobal);
    setShowNavigationBar(false);  */


    return (<>
        <SectionHome>
            <Pmain>
                Crea, gestiona, y lleva el control total de tus tareas
            </Pmain>
            <CardsSection>
                <DivCards>
                    <NavigationCard title={'Crear tarea'} ruta={'/crear-tarea'} description={'Aquí puedes añadir una nueva tarea a tu lista de tareas'}></NavigationCard>
                    <NavigationCard title={'Lista de tareas'} ruta={'/lista-de-tareas'} description={'Visualiza y gestiona todas tus tareas'}></NavigationCard>
                    <NavigationCard title={'Historial'} ruta={'/historial'} description={'Échale un vistazo a todos lo que has hecho con tus tareas'}></NavigationCard>      
                    <NavigationCard title={'Más funciones'} ruta={'/mas-funciones'} description={'Como usar este sitio web, sugerencias, centro de ayuda y mas...'}></NavigationCard>
                </DivCards>
            </CardsSection>
        </SectionHome>
    </>)
}

export default Home;