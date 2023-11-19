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
    width: 70%;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1%;
    gap: 0.1rem;
    justify-content: flex-start;
    flex-basis: 70%;
    animation: ${AnimationWake} 0.2s ease-in-out;

    @media screen and (max-width: 1199px) {
      gap: 0.5rem;
}

@media screen and (max-width: 768px) {
    flex-basis: 100%;
    padding: 0;
    gap: 0;
    margin-top: 4%;
    max-height: 85%;

    }


  
`
const Title = styled.h1`
color: ${({ theme }) => theme.SectionTitle};
font-weight: bolder;
font-size: 1.8rem;
flex-basis: 2%;

@media screen and (max-width: 1199px) {
 font-size :2.3rem ;
}

@media screen and (max-width: 768px) {
font-size: 2.8rem;
    }

`



const ListaTreas = styled.section`
flex-basis: 80%;
width: 90%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
overflow: auto;
overflow-x: hidden;
gap: 1rem;
@media screen and (max-width: 768px) {
max-height: 60vh;
width: 95%;
    }

 `

 const DivNoTask= styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
 `;

const NoTasks = styled.h4`
 margin: auto;
 font-size: 1.4rem;
 font-weight: bold;
 color:  ${({ theme }) => theme.TaskCardTitleCards};

 @media screen and (max-width: 1199px) {
 font-size :1.6rem ;
}


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

    if (prioridad === 'sin prioridad') {
      if (checked) {
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
              
              <DivNoTask>
                <NoTasks>{hayTareas ? `No hay tareas con la prioridad seleccionada (${priority})` : 'No hay tareas, crea alguna'}</NoTasks>
              </DivNoTask>
              

          }
        </ListaTreas>
      </TaskLista>
    </>
  )
}

export default TaskList