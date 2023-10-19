import React, { useEffect, useState, useContext } from "react";
import styled, { keyframes } from "styled-components";
import TaskCard from "./taskCard";
import FilterTask from "./filter";
import { TareasGlobal } from '../../App'


const AnimationWake = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }


`;

const TaskLista = styled.section`
    margin-top: 2%;
    height: 90%;
    width: 100%;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.1rem;
    justify-content: center;
    flex-basis: 70%;
    animation: ${AnimationWake} 0.3s ease-in-out;

  
`
const Title = styled.h1`
color: black;

font-size: 1.6rem;
flex-basis: 6%;
`

const ListaTreas = styled.section`
flex-basis: 81%;
background-color: ${({ theme }) => theme.background};
width: 90%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
border: 0.1rem solid;
overflow: scroll;
overflow-x: hidden;
gap: 1rem;


 `

const NoTasks = styled.h4`
 margin: auto;
 font-size: 1.2rem;
 `;

const TaskList = () => {

  const { tareas, setTareas} = useContext(TareasGlobal);
  const [taskView, setTaskView] = useState(tareas);
  const [hayTareas, setHayTareas] = useState(false);
  const [prioridad, setPrioridad] = useState('no');
  
  


  const validarSiHayTareas = () => {
    setTaskView(tareas);

    if (tareas.length > 0) {
      setHayTareas(true);
      console.log('tamaño después:', tareas.length);
      console.log('hayTareas:', true);
    } else {
      setHayTareas(false);
      console.log('tamaño después:', tareas.length);
      console.log('hayTareas:', false);
    }
  }


  useEffect(() => {
    validarSiHayTareas();
  }, [tareas]);


  return (
    <>

      <TaskLista>
        <Title>{`Tu lista de tareas (${tareas.length} tareas en total)`}</Title>
        <FilterTask setTaskView={setTaskView} setPrioridad={setPrioridad}></FilterTask>
        <ListaTreas>
          {

            hayTareas && taskView.length > 0 ?
              taskView.map((tarea) => {
                console.log('tarea', tarea);
                return <TaskCard key={`${tarea.titulo}${tarea.id}`} titulo={tarea.titulo} descripcion={tarea.descripcion} prioridad={tarea.prioridad} fechaIn={tarea.fechaIn} id={tarea.id} completada={tarea.completada} fechaFin={tarea.fechaFin}></TaskCard>

              }) :
              <>
                <NoTasks>{hayTareas ? `No hay tareas con prioridad ${prioridad}` : 'No hay tareas, crea alguna'}</NoTasks>
              </>

          }
        </ListaTreas>
      </TaskLista>
    </>
  )
}

export default TaskList