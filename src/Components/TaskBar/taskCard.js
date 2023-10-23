import React from "react";
import styled from "styled-components";
import { useState, useContext } from "react";
import { TareasGlobal } from '../../App'



const ArticleCard = styled.article`
border: 1px solid black;
padding: 1rem;
display: flex;
flex-direction: column;
gap: 0.5rem;
position: relative;
border-radius: 1rem;
width: 55%;
margin-top: 0.3rem;
background-color: ${({ theme }) => theme.secondary};;
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
background-color: gray;
padding: 0.2rem;
color: white;
border-radius: 0.4rem;
`;


const ProirityCard = styled.p`
position: absolute;
top: 3%;
right: 1.5%;
background-color: ${({ theme }) => theme.backgroundPriority};
padding: 0.2rem;
color: ${({ theme }) => theme.priorityText};
border-radius: 0.4rem;
`;



const TitleCard = styled.h2`
font-size: 1.4rem;
font-weight: bold;
color: white;
overflow-wrap: break-word;
`;

const DescCard = styled.p`
font-size: 1.2rem;
font-style: italic;
color: white;
overflow-wrap: break-word;
`;

const FechaCard = styled.p`
font-size: 1rem;
font-style: italic;
`;

const CategoryDiv = styled.div`
display: flex;
gap: 0.6rem;
width: 40%;
`;

const ButtonCard = styled.button`
color: purple;
border: none;
background-color:  ${({ theme }) => theme.button}; ;
padding: 0.5rem;
cursor: pointer;
font-size: 0.8rem;
border: 0.15rem solid transparent;

&:hover{
    opacity: 0.82;
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
                <StatusCard>{completada ? 'Completada' : 'Pendiente'}</StatusCard>
                <ProirityCard>Prioridad {prioridad}</ProirityCard>
                <DivPrimary>
                    <TitleCard>{titulo}</TitleCard>
                    <DescCard>{descripcion}</DescCard>
                    <FechaCard>Fecha de inicio: {fechaIn}</FechaCard>
                    <FechaCard>{fechaFin.length > 0 ? (`Fecha fin: ${fechaFin}`) : ' '}</FechaCard>
                </DivPrimary>

                <CategoryDiv>

                    {!completada &&
                        <ButtonCard
                            onClick={() => {
                                /* finishTask(id) */
                                UpdatePop(`¿Deseas completar la tarea ${titulo}`, finishTask, `Completaste la tarea ${titulo}`);
                            }}
                        >
                            Completar
                        </ButtonCard>


                    }

                    <ButtonCard
                        onClick={() => {
                            /* deleteTask(id) */
                            UpdatePop(`¿Deseas eliminar la tarea ${titulo}`, deleteTask, `La tarea ${titulo} ha sido eliminada`);

                        }}
                    >
                        Eliminar
                    </ButtonCard>

                    {/*  <ButtonCard>
                        Archivar
                    </ButtonCard> */}
                </CategoryDiv>
            </ArticleCard>
        </>
    )
}

export default TaskCard;