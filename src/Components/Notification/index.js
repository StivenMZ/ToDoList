import React, { useEffect, useContext, useState } from "react";
import styled, { keyframes } from "styled-components";


const AnimationNotiIn = keyframes`
  0% {
    opacity: 0.1;
  }

  50% {
    opacity: 0.3;
  }
 
  90% {
    opacity: 0.8;
  }

  90% {
    opacity: 1;
  }
`

const AnimationNotiOut = keyframes`
  0% {
    opacity: 1;
  }
 

  100%{
    opacity: 0;

  }
`

const DivNotificacion = styled.div`
position: relative;
z-index: 10;
width: 100%;
max-height: 14vh;
border: 1px solid;
display: flex;
align-items: center;
flex-direction: column;
gap: 0.3rem;
padding: 1%;
background-color: white;
margin-bottom: 2%;
margin-right: 1%;
animation: ${({ direction }) => (direction ? AnimationNotiIn : AnimationNotiOut)} 0.4s linear 1;

`;


const Phora = styled.p`
`;

const PMessage = styled.p`
    line-break: anywhere;
    width: 90%;

`;

const SpanClose = styled.span`
position: absolute;
right: 2%;
align-self: end;
bottom: 33%;
color: red;
font-weight: bold;
cursor: pointer;
`;



const Notification = ({ mensaje }) => {

  const [mostrarNotificacion, setMostrarNotificacion] = useState(true);

  const [direction, setDirection] = useState(true);


  if (mostrarNotificacion) {
    setTimeout(() => {
      functionAnim();
    }, 1000 * 6.7);
  }

  const functionAnim = () => {
    if ((!mostrarNotificacion) && (!direction)) {
      setMostrarNotificacion(true);
      setDirection(true);
    } else {
      setDirection(false);
      setTimeout(() => {
        setMostrarNotificacion(false)
      }, 300);
    }

  }



  const fecha = new Date();

  let time  = `${fecha.getDate()}/${fecha.getUTCMonth()+1}/${fecha.getFullYear()}       ${fecha.getHours()}:${fecha.getMinutes()}`;

  const [date, setDate] = useState(time);

  return (<>
    {mostrarNotificacion && (
      <DivNotificacion direction={direction}>
        <Phora>{date}</Phora>
        <PMessage>{mensaje}</PMessage>
        <SpanClose
          onClick={() => {
            functionAnim();
          }}
        >X</SpanClose>
      </DivNotificacion>
    )}
  </>)
}

export default Notification;