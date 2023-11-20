import React from "react";
import styled, { keyframes } from "styled-components";
import { useState, useContext } from "react";
import { TareasGlobal } from "../../App";

/* Importar funciones de finalizar y eliminar tarea */
import taskCardFunctions from "./taskCardFunctions"

/* Efecto de aparición para las tareas */
const ShowTask = keyframes`

0%{
    opacity: 0.2;
}

100%{
    opacity: 1;

}

`;


/* Article para cada tarea */
const ArticleCard = styled.article`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  border-radius: 1rem;
  width: 55%;
  margin-top: 0.3rem;
  background-color: ${({ theme }) => theme.TaskCarddBackground};
  animation: ${ShowTask} 0.3s ease-in-out 1;

  @media screen and (max-width: 1199px) {
 width: 60%;
}

`;

/* Div para información de cada tarea */
const DivPrimary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-top: 4%;
`;


/* Strong para mostrar el estado de la tarea */
const StatusCard = styled.strong`
  position: absolute;
  top: 3%;
  left: 1.5%;
  background-color: ${({ completada, theme }) =>
    completada ? theme.TaskCardCompletada : theme.TaskCardPendiente};
  padding: 0.2rem;
  color: ${({ completada, theme }) =>
    completada ? theme.TaskCardCompletadaText : theme.TaskCardPendienteText};
  border-radius: 0.4rem;
  font-size: 1.1rem;

  @media screen and (max-width: 1199px) {
 font-size :1.3rem ;
}

@media screen and (max-width: 1171px) {
 font-size :1.4rem ;
}


`;


/* Texto para prioridad de cada tarea */
const ProirityCard = styled.p`
  position: absolute;
  top: 3%;
  right: 1.5%;
  /* Elegir el background-color dependiendo del valor de la prioridad */
  background-color: ${({ prioridad, theme }) =>
    prioridad === "Alta"
      ? theme.TaskCardPriotyBgHigh
      : prioridad === "Media"
      ? theme.TaskCardPriotyBgMedium
      : prioridad === "Baja"
      ? theme.TaskCardPriotyBgLow
      : ""};
  padding: 0.5rem;
    /* Elegir el color dependiendo del valor de la prioridad */
  color: ${({ prioridad, theme }) =>
    prioridad === "Alta"
      ? theme.TaskCardPriorityTextHigh
      : prioridad === "Media"
      ? theme.TaskCardPriorityTextMedium
      : prioridad === "Baja"
      ? theme.TaskCardPriorityTextLow
      : ""};
  border-radius: 0.4rem;
  font-size: 1.1rem;
  font-weight: bold;


  @media screen and (max-width: 1199px) {
 font-size :1.3rem ;
}
@media screen and (max-width: 1171px) {
 font-size :1.4rem ;
}


`;

/* Titulo de la tarea */
const TitleCard = styled.h2`
  font-size: 1.43rem;
  font-weight: bold;
  color: ${({ theme }) => theme.TaskCardTitleCards};
  overflow-wrap: break-word;
  margin-top: 2.6%;

  
  @media screen and (max-width: 1199px) {
    font-size: 1.63rem;
}

@media screen and (max-width: 1171px) {
 font-size :1.73rem ;
}


`;


/* Descripción de la tarea */
const DescCard = styled.p`
  font-size: 1.23rem;
  color: ${({ theme }) => theme.TaskCardDescriptionCards};
  overflow-wrap: break-word;

  @media screen and (max-width: 1199px) {
    font-size: 1.43rem;
}

@media screen and (max-width: 1171px) {
 font-size :1.53rem ;
}


`;


/* Fecha de creación o finalización de la tarea */
const FechaCard = styled.p`
  font-size: 1.06rem;
  color: ${({ theme }) => theme.TaskCardFechaText};

  @media screen and (max-width: 1199px) {
    font-size: 1.26rem;
}

@media screen and (max-width: 1171px) {
 font-size :1.36rem ;
}

`;

/* Div para botones de completar y eliminar de cada tarea */
const ButtonsDiv = styled.div`
  display: flex;
  gap: 0.6rem;
  width: 100%;
  justify-content: space-around;
`;


/* Boton para completar tarea */
const ButtonCardP = styled.button`
  color: ${({ theme }) => theme.buttonPositiveText};
  border: none;
  background-color: ${({ theme }) => theme.buttonPositiveBackground};
  padding: 0.7rem 1.5rem;
  cursor: pointer;
  font-size: 1.3rem;
  border: 0.15rem solid transparent;
  box-sizing: border-box;
  border-radius: 0.4rem;
  &:hover {
    box-shadow: 0 0 0 0.11rem rgba(0, 0, 0, 0.3);
  }

  &:active {
    border: 0.15rem solid ${({ theme }) => theme.ActivateButton}; 
  }
@media screen and (max-width: 1171px) {
 font-size :1.4rem ;
}

`;

/* Botón para eliminar tarea */
const ButtonCardN = styled.button`
  color: ${({ theme }) => theme.buttonNegativeText};
  border: none;
  background-color: ${({ theme }) => theme.buttonNegativeBackground};
  padding: 0.7rem 1.5rem;
  cursor: pointer;
  font-size: 1.3rem;
  box-sizing: border-box;
  border: 0.15rem solid transparent;
  border-radius: 0.4rem;

  &:hover {
    box-shadow: 0 0 0 0.11rem rgba(0, 0, 0, 0.3);
  }

  &:active {
    border: 0.15rem solid ${({ theme }) => theme.ActivateButton};
  }

  @media screen and (max-width: 1171px) {
 font-size :1.4rem ;
}
`;

/* POPUP */
/* Div para la interacción click en los botones aceptar o eliminar */
const DivPop = styled.div`
  position: absolute;
  width: 93%;
  height: 90%;
  background-color: aliceblue;
  opacity: 0.97; 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.TaskCarddBackground}; 
`;

/* Div para el titulo y los botones del div al interactuar con botones */
const DivContentPop = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-self: center;
gap: 1rem;




`;


/* Texto de cada interacción */
const TitlePop = styled.p`
font-size: 1.4rem;
align-self: center;
color: ${({ theme }) => theme.TaskCardTitleCards};
max-width: 90%;
overflow-wrap: break-word;

@media screen and (max-width: 1199px) {
 font-size :1.5rem ;
}


@media screen and (max-width: 1171px) {
 font-size :1.6rem ;
}


`;

/* Div para botones "Si o No" */
const DivButtonsContentPop = styled.div`
display: flex;
width: 100%;
justify-content: space-evenly;
`;


/* Botón Si */
const ButtonFormA = styled.button`
color:  ${({ theme }) => theme.buttonPositiveText}; 
border: none;
background-color:  ${({ theme }) => theme.buttonPositiveBackground}; 
padding: 0.7rem 1.5rem;
cursor: pointer;
font-size: 1.3rem;
border: 0.15rem solid transparent;
box-sizing: border-box;
border-radius: 0.4rem;
&:hover{
    box-shadow: 0 0 0 0.11rem rgba(0, 0, 0, 0.3);
}

&:active{
    border: 0.15rem solid ${({ theme }) => theme.ActivateButton};
}

@media screen and (max-width: 1199px) {
 font-size :1.3rem ;
}

@media screen and (max-width: 1171px) {
 font-size :1.4rem ;
}

`;

/* Botónn No */
const ButtonFormC = styled.button`
color: ${({ theme }) => theme.titleCards}; 
border: none;
background-color:  ${({ theme }) => theme.buttonNegativeBackground}; 
padding: 0.7rem 1.5rem;
cursor: pointer;
font-size: 1.03rem;
box-sizing: border-box;
border: 0.15rem solid transparent;
border-radius: 0.4rem;

&:hover{
    box-shadow: 0 0 0 0.11rem rgba(0, 0, 0, 0.3);;
}

&:active{
    border: 0.15rem solid ${({ theme }) => theme.ActivateButton};
}


@media screen and (max-width: 1199px) {
 font-size :1.3rem ;
}

@media screen and (max-width: 1171px) {
 font-size :1.4rem ;
}

`;

/*  */

/* Importación de props aplicando destructuración de objetos */
const TaskCard = ({titulo,descripcion,prioridad,fechaIn,id,completada,fechaFin,}) => {

  /* Importaciones del contexto globall, tareas y settareas para agregar la tarea nueva, notificaciones y setnotificaciones para enviar una notificación en base a crear, completar o eliminar */
  const {tareas,setTareas,notificaciones,setNotificaciones,history,setHistory,} = useContext(TareasGlobal);
  /* Contenido para la ventana que se levanta al interactucar con los botones completar o eliminar */
   const [popContent, setPopcontent] = useState({
    
    mensaje: "",  // Mensaje de eliminar o completar 
    callback: "",  //  callBack para llamar a la función en uptadePop 
    render: false,  // booleano para renderizar o no la ventana 
  });

  /* Estado para el mensaje y el tipo de notificación */
  const [notification, setNotification] = useState({mensaje: "", type: ""});
  

/* Función que se llama al interactuar con los botones "Completar o Eliminar" */
  const UpdatePop = (mensaje /* Para mostar el mensaje en la ventana */, callback /* Función que se llama al interactucar con el botón "Si" de la ventana */, notificationMessage /* Mensaje para la notificación */, type /* Tipo de notificación "Crear, completar o eliminar" */) => {
    /* Actualizar contenido del popContent */
    setPopcontent({ mensaje: mensaje, callback: callback, render: true });

    /* Actualizar el estado, con el mensaje y el tipo */
    setNotification({mensaje: notificationMessage, type: type});
  };


  return (
    <>
    {/* Key id para los MAP */}
      <ArticleCard key={id} >
        {/* Validaciópn para la ventana de completar o eliminar, renderizar si popContent.render es true */}
        {popContent.render && (
          <DivPop>
            <DivContentPop>
              <TitlePop>{popContent.mensaje}</TitlePop>
              <DivButtonsContentPop>
                <ButtonFormA
                  onClick={() => {
                    /* llamar a popContent.calback al hacer click */
                    popContent.callback(id,tareas, setTareas, history, setHistory, titulo);
                    /* Actualizar setPopContent a su estado inicial  */
                    setPopcontent({ mensaje: "", callback: "", render: false });
                    /*Actualizar notificaciones para mostrar en pantalla una nueva noticación */
                    setNotificaciones([
                      ...notificaciones,
                      { mensaje: notification.mensaje, type: notification.type },
                    ]);
                    /* Establecer notificación al valor inicial */
                    setNotification({mensaje: "", type: ""});
                  }}
                >
                  Si
                </ButtonFormA>
                <ButtonFormC
                  onClick={() => {
                    /* Establecer popContent a su valor inicial, cerrando la ventana */
                    setPopcontent({ mensaje: "", callback: "", render: false });
                  }}
                >
                  No
                </ButtonFormC>
              </DivButtonsContentPop>
            </DivContentPop>
          </DivPop>
        )}
        {/* renderizar texto dependiendo del valor de la propiedad completada de la tarea */}
        <StatusCard completada={completada}>
          {completada ? "Completada" : "Pendiente"}
        </StatusCard>
        <ProirityCard prioridad={prioridad}/* prop prioridad para el coolor del background */ >Prioridad {prioridad}</ProirityCard>
        <DivPrimary>
          <TitleCard>{titulo}</TitleCard>
          <DescCard>{descripcion}</DescCard>
          <FechaCard>Fecha de inicio: {fechaIn}</FechaCard>
          <FechaCard>
            {/* Validar si hay texto en fecha fin, para renderizarlo o no */}
            {fechaFin.length > 0 ? `Fecha fin: ${fechaFin}` : " "}
          </FechaCard>
        </DivPrimary>

        <ButtonsDiv>
          {!completada && (
            <ButtonCardP
              onClick={() => {
                /* llamar a updatePop */
                UpdatePop(
                  `¿Deseas completar la tarea ${titulo}`,
                  taskCardFunctions.finishTask,
                  `Completaste la tarea ${titulo}`,
                  "success"
                
                );
              }}
            >
              Completar
            </ButtonCardP>
          )}

          <ButtonCardN
            onClick={() => {
              /* llamar a updatePop */
              UpdatePop(`¿Deseas eliminar la tarea ${titulo}`,taskCardFunctions.deleteTask,`La tarea ${titulo} ha sido eliminada`, "success error");
            }}
          >
            Eliminar
          </ButtonCardN>

        </ButtonsDiv>
      </ArticleCard>
    </>
  );
};

export default TaskCard;
