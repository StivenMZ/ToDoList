import React, { useEffect, useState, useContext } from "react";
import styled, { keyframes } from "styled-components";
import TaskCard from "./taskCard";
import FilterTask from "./filter";
import { TareasGlobal } from '../../App'

/* Animación general de cada sección, para dar efecto de aparición */
const AnimationWake = keyframes`
  0% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }


`;

/* Seccion general para la lista de tareas */
const TaskListaSection = styled.section`
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

/* Titulo lista de tareas */
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
text-align: center;
    }

`


/* Sección de lista de tareas   */
const ListaTareasSection = styled.section`
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


    @media screen and (max-width: 300px) {
max-height: 52vh;
width: 95%;
    }

 `

/* Div para cuando no hay tareas */
 const DivNoTask= styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
 `;

/* Texto para cuando no hay tareas */
const NoTasks = styled.p`
 margin: auto;
 font-size: 1.4rem;
 font-weight: bold;
 color:  ${({ theme }) => theme.TaskCardTitleCards};
 text-align: center;

 @media screen and (max-width: 1199px) {
 font-size :1.6rem ;
}


 `;

/* Componente de lista de tareas */
const TaskList = () => {

  /* Importación destructurada de las variables exportadas desde app con el contexto 
  Tareas para mostrar la lista, showCompleteded para guardar el ver tareas completadas y mostrarlo cada que se renderica el componente, en este sentido, showCompleteded para mostrar  el valor guardado en la última navegación, 
  lo mismo para priotiry y setPriority
  */
  const { tareas, showCompleted, setShowCompleted, priority, setPriority } = useContext(TareasGlobal);
  /* Estado con valor de array para mostrar la vista de tareas si se filtra por prioridad  */
  const [taskView, setTaskView] = useState([]);

  /* Estado para renderizar el map de tareas o el texto no hay tareas, dependiendo de si hay o no tareas */
  const [hayTareas, setHayTareas] = useState(false);
  /* Estado para "verTareasCompletadas" */
  const [checked, setChecked] = useState(showCompleted);
  /* Estado para guardar el valor de la prioridad al filtrar */
  const [activeFilter, setActiveFilter] = useState(priority);

/* Función para filtrar tareas */
  const filterFunct = (prioridad /* recibe la prioridad alta, media, baja o sin prioridad */) => {
    /* Actualizar estado de Activa filter con la prioridad poasada, para mostrar el background */
    setActiveFilter(prioridad);

    /* Array para mostrar las tareas filtradas */
    let newArray = [];

    /* Si no hay prioridad "sin prioridad" => */
    if (prioridad === 'sin prioridad') {
      /* Si cheked vale true, mostrar todas las tareas */
      if (checked) {
        newArray = [...tareas];
      } else {
        /* Si cheked vale false, mostrar todas las tareas, menos las que tengan su propiedad completada en true */
        newArray = tareas.filter((task) => !(task.completada));

      }
      /* Si la prioridad es diferente a "sin prioridad" => */
    } else {
      /* Mostrar tareas completadas si checked es true */
      if (checked) {
        /* filtrar las tareas que su propiedad "prioridad" tenga el valor pasado mediamte el parámetro de función "prioridad" */
        newArray = tareas.filter((task) => (task.prioridad === prioridad));
      } else {
        /* filtrar las tareas que su propiedad "prioridad" tenga el valor pasado mediamte el parámetro de función "prioridad", sin mostrar tareas completadas */
        newArray = tareas.filter((task) => task.prioridad === prioridad && !task.completada);
      }

    }
    /*Guardar globalmente la prioridad seleccionada */
    setPriority(prioridad)
    /*Actualizar la vista de tareas en base al resultado de la función */
    setTaskView(newArray)
  }

/* Función para validar si hay tareas */
  const validarSiHayTareas = () => {
    /* Si el array "tareas" tiene su tamaño mayor a 0 (1 o más) establecer haytareas a true, y llamar a la función filterFunct para filtrar las tareas */
    if (tareas.length > 0) {
      setHayTareas(true);
      filterFunct(priority)
    } else {
      /* Establecer hayTareas a false */
      setHayTareas(false);

    }

  }


  /* Validar si hay tareas cada que "tareas" obtenido desde el contexto global cambia, o, la primera vez que se renderiza el componente taskBar, llamandado a la función validarSiHayTareas */
  useEffect(() => {
    validarSiHayTareas();
  }, [tareas]);


  return (
    <>  


      <TaskListaSection>
        
        <Title>{`Tu lista de tareas (${taskView.length /* Mostrar cantidad de tareas */} tareas en total)`}</Title>
        {/* Componente filterTask, para filtrar tareas, se pasa taskView y el setter, para filtar las tareas y cambiar el valor de las tareas filtradas, showCompleted igual, priorioridad igual, y cheked igual, y se pasa la función para filtrar tareas filterFunct. Desde este componente se maneja toda la lógica del filtrado */}
        <FilterTask taskView={taskView} setTaskView={setTaskView} showCompleted={showCompleted} setShowCompleted={setShowCompleted} priority={priority}
          setPriority={setPriority} filterFunct={filterFunct} checked={checked} setCheked={setChecked} activeFilter={activeFilter}></FilterTask>

        {/* Sección de lista de tareas */}
        <ListaTareasSection>
          {/* Validar si hay tareas, en caso de que si hacer MAP al array de tareas para mostrarlas usando TaskCard */}
          {
            hayTareas && taskView.length > 0 ?
              taskView.map((tarea) => {
                return <TaskCard key={`${tarea.titulo}${tarea.id}`} titulo={tarea.titulo} descripcion={tarea.descripcion} prioridad={tarea.prioridad} fechaIn={tarea.fechaIn} id={tarea.id} completada={tarea.completada} fechaFin={tarea.fechaFin}></TaskCard>
              }) :
              /* En caso de no no haber tareas, validar si no hay para esa prioridad, o, si en total no hay */
              <DivNoTask>
                <NoTasks>{hayTareas ? `No hay tareas con la prioridad seleccionada (${priority})` : 'No hay tareas, crea alguna'}</NoTasks>
              </DivNoTask>
              

          }
        </ListaTareasSection>
      </TaskListaSection>
    </>
  )
}

export default TaskList