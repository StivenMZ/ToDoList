import React, { useEffect, useState } from "react";
import styled from "styled-components";

import TaskCard from "./taskCard";
import FilterTask from "./filter";

const TaskLista = styled.aside`
height: 100%;
width: 35%;
padding: 1rem;
background-color: #9bc5e7;
display: flex;
flex-direction: column;
align-items: center;
flex-wrap: wrap;
gap: 0.3rem;
border: 0.1rem solid;
`
const Title = styled.h1`
color: black;
font-weight: bold;
font-size: 1.3rem;
flex-basis: 6%;
`

const FiltrarOpt = styled.div`
background-color: ${({ theme }) => theme.text};
flex-basis: 6%;
`;

const ListaTreas = styled.section`
flex-basis: 80%;
background-color: white;
width: 95%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
border: 0.1rem solid;



 `

const TaskList = ({newTarea}) =>{

  const deleteTask = (id) => {
    const newArray = tasks.filter((task) => task.id !== id);
    setTasks(newArray);
  }

  
  const [tasks, setTasks] = useState([{titulo: 'Gimnasio', descripcion: 'Ir al gimnasio', prioridad: 'Alta', fechaIn: '27/08/2023', id: 1}]);
  
  
    useEffect(() => {
        if (newTarea && Object.keys(newTarea).length > 0) {
          console.log(newTarea);
          setTasks((prevTasks) => [...prevTasks, newTarea]);
        }
      }, [newTarea]);

      const [taskView, setTaskView] = useState(tasks);


      const filterFunct = (prioridad) =>{

        let newArray = [];

        if(prioridad === 'no'){
          newArray = [...tasks];
        }else{
           newArray = tasks.filter((task)=> task.prioridad === prioridad);

        }
        setTaskView(newArray)

      }
    

    return(
        <>
        <TaskLista>
        <Title>Tus tareas</Title>
        <FilterTask filterFunct={filterFunct}></FilterTask>
        <ListaTreas>
        {taskView.map((tarea)=>{
           return <TaskCard key={`${tarea.titulo}${tarea.id}`} titulo={tarea.titulo} descripcion={tarea.descripcion} prioridad={tarea.prioridad} fechaIn={tarea.fechaIn} id={tarea.id} deleteTask={deleteTask}></TaskCard>

        })}
        </ListaTreas>
        </TaskLista>
        </>
    )
}

export default TaskList