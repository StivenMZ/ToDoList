import { useContext, useEffect, useState } from "react";
import TaskCard from "../TaskBar/taskCard";
import { TareasGlobal } from "../../App";
import Loading from "./Loading";
import styled from "styled-components";

const PError = styled.p`
  color: ${({ theme }) => theme.TaskCardTitleCards};
  font-size: 1.3rem;
`;

const DivMainResults = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    max-height: 60%;
    align-items: center;

`;

const SectionResults = styled.section`
  align-self: center;
  display: flex;
  max-height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
  align-items: center;
  gap: 0.3rem;
  width: 100%;
    
`;

const ResultsOfSearch = () => {
  const { tareas, busqueda, resultadoBusqueda, setResultadoBusqueda } =
    useContext(TareasGlobal);

  const [startRender, setStartRender] = useState(false);

  const [time, setTime] = useState("");

  const onSearch = async (busqueda) => {
    clearTimeout(time);
    setStartRender(false);
    if (busqueda.length > 0) {
      let orderRes = [];

      try {
        await new Promise((resolve) => {
          setTime(
            setTimeout(() => {
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

              setResultadoBusqueda(orderRes);
              setStartRender(true);
              resolve();
            }, 400)
          );
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      setResultadoBusqueda([]);
      setStartRender(true);
    }
  };

  useEffect(() => {
    onSearch(busqueda);
  }, [busqueda, tareas]);

  return startRender ? (
    resultadoBusqueda ? (
      resultadoBusqueda.length > 0 ? (
        <DivMainResults>
       { <SectionResults>
          {resultadoBusqueda.map((tarea) => (
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
          ))}
        </SectionResults>}
        </DivMainResults>
      ) : (
        <PError>No se encontraron tareas que coincidan con tu búsqueda</PError>
      )
    ) : (
      <PError>
        Lo sentimos, hubo un error al realizar la búsqueda, por favor inténtelo
        nuevamente
      </PError>
    )
  ) : (
    <Loading />
  );
};

export default ResultsOfSearch;
