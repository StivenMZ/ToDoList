import React, { useEffect, useState, useContext } from "react";
import styled, { keyframes } from "styled-components";
import TaskCard from "./taskCard";
import FilterTask from "./filter";
import { TareasGlobal } from '../../App'


const AnimationWake = keyframes`
  0% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }


`;

const TaskLista = styled.section`
    height: auto;
    max-height: 90%;
    width: 100%;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1%;
    gap: 0.1rem;
    justify-content: flex-start;
    flex-basis: 70%;
    animation: ${AnimationWake} 0.2s ease-in-out;

  
`
const Title = styled.h1`
color: black;

font-size: 1.6rem;
flex-basis: 2%;
`

const ListaTreas = styled.section`
flex-basis: 80%;
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

  const { tareas, showCompleted, setShowCompleted, priority, setPriority } = useContext(TareasGlobal);
  const [taskView, setTaskView] = useState([]);
  const [hayTareas, setHayTareas] = useState(false);
  const [checked, setCheked] = useState(showCompleted);
  const [activeFilter, setActiveFilter] = useState(priority);


  const filterFunct = (prioridad) => {
    setActiveFilter(prioridad);

    let newArray = [];

    if (prioridad === 'no') {
      if (checked) {
        console.log('test desde prioridad no, desde filterFunct Cheked true')
        newArray = [...tareas];
      } else {
        newArray = tareas.filter((task) => !(task.completada));

      }

    } else {
      if (checked) {
        newArray = tareas.filter((task) => (task.prioridad === prioridad));
      } else {
        newArray = tareas.filter((task) => task.prioridad === prioridad && !task.completada);
      }

    }
    setPriority(prioridad)
    setTaskView(newArray)
    console.log("activeFilter:", activeFilter);

  }


  useEffect(() => {
    console.log(taskView, 'TaskView dede TaskList')
  }, [taskView]);



  const validarSiHayTareas = () => {

      if (tareas.length > 0) {
        setHayTareas(true);
        filterFunct(priority)
      } else {
        setHayTareas(false);
      
      }
    
  }



  useEffect(() => {
    validarSiHayTareas();
    console.log('Useeffect que llama validarSiHayTareas')
  }, [tareas]);


  return (
    <>

      <TaskLista>
        <Title>{`Tu lista de tareas (${taskView.length} tareas en total)`}</Title>
        <FilterTask taskView={taskView} setTaskView={setTaskView} showCompleted={showCompleted} setShowCompleted={setShowCompleted} priority={priority}
          setPriority={setPriority} filterFunct={filterFunct} checked={checked} setCheked={setCheked} activeFilter={activeFilter}></FilterTask>
        <ListaTreas>
          {
            hayTareas && taskView.length > 0 ?
              taskView.map((tarea) => {
                /*    console.log('tarea', tarea); */
                return <TaskCard key={`${tarea.titulo}${tarea.id}`} titulo={tarea.titulo} descripcion={tarea.descripcion} prioridad={tarea.prioridad} fechaIn={tarea.fechaIn} id={tarea.id} completada={tarea.completada} fechaFin={tarea.fechaFin}></TaskCard>

              }) :
              <>
                <NoTasks>{hayTareas ? `No hay tareas con prioridad ${priority}` : 'No hay tareas, crea alguna'}</NoTasks>
              </>

          }
        </ListaTreas>
      </TaskLista>
    </>
  )
}

export default TaskList