import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import TaskCard from "./taskCard";
import FilterTask from "./filter";
import {TareasGlobal} from '../../App'


const TaskLista = styled.aside`
height: 100%;
width: 35%;
padding: 1rem;
background-color: #9bc5e7;
display: flex;
flex-direction: column;
align-items: center;
flex-wrap: wrap;
gap: 0.1rem;
border: 0.1rem solid;
`
const Title = styled.h1`
color: black;
font-weight: bold;
font-size: 1.3rem;
flex-basis: 6%;
`

const ListaTreas = styled.section`
flex-basis: 80%;
background-color: white;
width: 95%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
border: 0.1rem solid;
overflow: scroll;
overflow-x: hidden;
gap: 1rem;


 `

const TaskList = () =>{
  
  const {tareas, setTareas} = useContext(TareasGlobal);
  const [taskView, setTaskView] = useState(tareas);
  const [hayTareas, setHayTareas] = useState(false);
  

  
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

      const filterFunct = (prioridad) =>{

        let newArray = [];

        if(prioridad === 'no'){
          newArray = [...tareas];
        }else{
           newArray = tareas.filter((task)=> task.prioridad === prioridad);

        }
        setTaskView(newArray)

      }
    

    return(
        <>
        
        <TaskLista>
        <Title>Tus tareas</Title>
        <FilterTask filterFunct={filterFunct}></FilterTask>
        <ListaTreas>
        {
        
        hayTareas && taskView.length > 0 ?
          taskView.map((tarea)=>{
          console.log('tarea',tarea );
           return <TaskCard key={`${tarea.titulo}${tarea.id}`} titulo={tarea.titulo} descripcion={tarea.descripcion} prioridad={tarea.prioridad} fechaIn={tarea.fechaIn} id={tarea.id} completada={tarea.completada}></TaskCard>

        }) : 
        <>
        <h1>No hay tareas</h1>
        </>

        }
        </ListaTreas>
        </TaskLista>  
        </>
    )
}

export default TaskList