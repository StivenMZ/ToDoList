import { useContext, useEffect, useState } from "react";
import TaskCard from "../TaskBar/taskCard";
import { TareasGlobal } from "../../App";
import Loading from "./Loading";
import styled from "styled-components";

const PError = styled.p`
margin-top: 7%;
color:  ${({ theme }) => theme.TaskCardTitleCards};
font-size: 1.3rem;
`;

const ResultsOfSearch = () => {
  const { tareas, busqueda, resultadoBusqueda, setResultadoBusqueda } = useContext(
    TareasGlobal
  );

    const [startRender, setStartRender] = useState(false);

    const [time, setTime] = useState("");

  const onSearch = async (busqueda) => {
    clearTimeout(time);
    setStartRender(false);
    if (busqueda.length > 0) {
      let orderRes = [];

      try {
        await new Promise(resolve => {
            setTime(setTimeout(() => {
            tareas.forEach((task) => {
              if (
                busqueda.toLowerCase() === task.titulo.toLowerCase() ||
                busqueda.toLowerCase() === task.descripcion.toLowerCase()
              ) {
                orderRes.push(task);
              }
            });

            let arraynoreplic = new Set(orderRes);
            let result = [...arraynoreplic];

            setResultadoBusqueda(result);
            setStartRender(true);
            resolve(); 
          }, 400));
        });
      } catch (error) {
        console.log(error);
      }
    }else{
        setResultadoBusqueda([]);
        setStartRender(true);
    }
  };

  useEffect(() => {
    onSearch(busqueda);
  }, [busqueda]);

   return startRender ? (
    resultadoBusqueda ? (
      resultadoBusqueda.length > 0 ? (
        resultadoBusqueda.map((tarea) => (
          <TaskCard
            key={`${tarea.titulo}${tarea.id}`}
            titulo={tarea.titulo}
            descripcion={tarea.descripcion}
            prioridad={tarea.prioridad}
            fechaIn={tarea.fechaIn}
            id={tarea.id}
            completada={tarea.completada}
            fechaFin={tarea.fechaFin}
          />
        ))
      ) : (
        <PError>No se encontraron tareas que coincidan con tu búsqueda</PError>
         
      )
    ) : (
      <PError>Lo sentimos, hubo un error al realizar la búsqueda, por favor inténtelo nuevamente</PError>
    )
   ) : <Loading />
};

export default ResultsOfSearch;
