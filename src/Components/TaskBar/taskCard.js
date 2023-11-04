import React from "react";
import styled, { keyframes } from "styled-components";
import { useState, useContext } from "react";
import { TareasGlobal } from '../../App'


const ShowTask = keyframes`

0%{
    opacity: 0.2;
}

100%{
    opacity: 1;

}

`

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
`;

const DivPrimary = styled.div`
display: flex;
flex-direction: column;
gap: 0.3rem;
margin-top: 4%;
`;

const StatusCard = styled.strong`
position: absolute;
top: 3%;
left: 1.5%;
background-color: ${({ completada, theme }) => (completada ? theme.TaskCardCompletada : theme.TaskCardPendiente)};
padding: 0.2rem;
color:  ${({ completada, theme }) => (completada ? theme.TaskCardCompletadaText : theme.TaskCardPendienteText)};
border-radius: 0.4rem;
font-size: 1.1rem;
`;






const ProirityCard = styled.p`
position: absolute;
top: 3%;
right: 1.5%;
background-color: ${({ prioridad, theme }) => (prioridad === 'Alta'
    ? theme.TaskCardPriotyBgHigh 
    : prioridad === 'Media' 
    ? theme.TaskCardPriotyBgMedium
    : prioridad === 'Baja' 
    ? theme.TaskCardPriotyBgLow : '' )};
padding: 0.5rem;
color:   ${({ prioridad, theme }) => (prioridad === 'Alta'
    ? theme.TaskCardPriorityTextHigh 
    : prioridad === 'Media' 
    ? theme.TaskCardPriorityTextMedium
    : prioridad === 'Baja' 
    ? theme.TaskCardPriorityTextLow : '' )};
border-radius: 0.4rem;
font-size: 1.1rem;
font-weight: bold;
`;



const TitleCard = styled.h2`
font-size: 1.43rem;
font-weight: bold;
color: ${({ theme }) => theme.TaskCardTitleCards};
overflow-wrap: break-word;
`;

const DescCard = styled.p`
font-size: 1.23rem;
color: ${({ theme }) => theme.TaskCardDescriptionCards};
overflow-wrap: break-word;
`;



const FechaCard = styled.p`
font-size: 1.06rem;

`;

const ButtonsDiv = styled.div`
display: flex;
gap: 0.6rem;
width: 100%;
justify-content: space-around;
`;



const ButtonCardP = styled.button`
color:  ${({ theme }) => theme.buttonPositiveText}; 
border: none;
background-color:  ${({ theme }) => theme.buttonPositiveBackground}; 
padding: 0.7rem 1.5rem;
cursor: pointer;
font-size: 1.03rem;
border: 0.15rem solid transparent;
box-sizing: border-box;
border-radius: 0.4rem;
&:hover{
    box-shadow: 0 0 0 0.11rem rgba(0, 0, 0, 0.3);
}

&:active{
    border: 0.15rem solid lightpink;
}

`;

const ButtonCardN = styled.button`
color: ${({ theme }) => theme.buttonNegativeText}; 
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
    border: 0.15rem solid lightpink;
}

`;


const DivPop = styled.div`
    position: absolute;
    width: 93%;
    height: 85%;
    background-color: aliceblue;
    opacity: 0.8;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DivContentPop = styled.div``;

const TitlePop = styled.p``;

const DivButtonsContentPop = styled.div``;

const ButtonPop = styled.button``;

const TaskCard = ({ titulo, descripcion, prioridad, fechaIn, id, completada, fechaFin }) => {


    const { tareas, setTareas, notificaciones, setNotificaciones, history, setHistory } = useContext(TareasGlobal);

    const finishTask = (id) => {

        const fecha = new Date();
        let time = '';
        time += fecha.getDate() + '/';
        time += fecha.getUTCMonth() + 1 + '/';
        time += fecha.getFullYear();

        const tareasActual = [...tareas];

        const tareaActualizar = tareasActual.find((task) => task.id === id);

        if (tareaActualizar) {
            tareaActualizar.completada = true;
            tareaActualizar.fechaFin = time;

        }

        setTareas(tareasActual);

        setHistory([{ date: `${time}    ${fecha.getHours()}:${fecha.getMinutes().length === 1 ? (`0+1`) : (fecha.getMinutes())}`, title: titulo, type: 'completed' }, ...history])



    }

    const deleteTask = (id) => {

        const fecha = new Date();
        let time = '';
        time += fecha.getDate() + '/';
        time += fecha.getUTCMonth() + 1 + '/';
        time += fecha.getFullYear();


        const newArray = tareas.filter((task) => task.id !== id);

        setTareas(newArray);

        setHistory([{ date: `${time}    ${fecha.getHours()}:${fecha.getMinutes().length === 1 ? (`0+1`) : (fecha.getMinutes())}`, title: titulo, type: 'delete' }, ...history])
    }

    const [popContent, setPopcontent] = useState({ mensaje: '', callback: '', render: false });


    const UpdatePop = (mensaje, callback, notificationMessage) => {
        setPopcontent({ mensaje: mensaje, callback: callback, render: true })
        setNotification(notificationMessage)
    }

    const [notification, setNotification] = useState('');


    return (
        <>
            <ArticleCard key={id}>

                {popContent.render &&
                    <DivPop>
                        <DivContentPop>
                            <TitlePop>{popContent.mensaje}</TitlePop>
                            <DivButtonsContentPop>
                                <ButtonPop
                                    onClick={() => {
                                        popContent.callback(id);
                                        setPopcontent({ mensaje: '', callback: '', render: false });
                                        setNotificaciones([...notificaciones, { mensaje: notification }]);
                                        setNotification('');
                                    }}
                                >Si</ButtonPop>
                                <ButtonPop
                                    onClick={() => {
                                        setPopcontent({ mensaje: '', callback: '', render: false })
                                    }}
                                >No</ButtonPop>
                            </DivButtonsContentPop>
                        </DivContentPop>
                    </DivPop>
                }
                <StatusCard
                    completada={completada}
                >{completada ? 'Completada' : 'Pendiente'}</StatusCard>
                <ProirityCard
                    prioridad={prioridad}
                >Prioridad {prioridad}</ProirityCard>
                <DivPrimary>
                    <TitleCard>{titulo}</TitleCard>
                    <DescCard>{descripcion}</DescCard>
                    <FechaCard>Fecha de inicio: {fechaIn}</FechaCard>
                    <FechaCard>{fechaFin.length > 0 ? (`Fecha fin: ${fechaFin}`) : ' '}</FechaCard>
                </DivPrimary>

                <ButtonsDiv>

                    {!completada &&
                        <ButtonCardP
                            onClick={() => {
                                /* finishTask(id) */
                                UpdatePop(`¿Deseas completar la tarea ${titulo}`, finishTask, `Completaste la tarea ${titulo}`);
                            }}
                        >
                            Completar
                        </ButtonCardP>


                    }

                    <ButtonCardN
                        onClick={() => {
                            /* deleteTask(id) */
                            UpdatePop(`¿Deseas eliminar la tarea ${titulo}`, deleteTask, `La tarea ${titulo} ha sido eliminada`);

                        }}
                    >
                        Eliminar
                    </ButtonCardN>

                    {/*  <ButtonCard>
                        Archivar
                    </ButtonCard> */}
                </ButtonsDiv>
            </ArticleCard>
        </>
    )
}

export default TaskCard;