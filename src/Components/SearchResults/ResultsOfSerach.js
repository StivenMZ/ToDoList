import { useContext, useEffect, useState } from "react";
import TaskCard from "../TaskBar/taskCard";
import { TareasGlobal } from "../../App";
import Loading from "./Loading";
import styled from "styled-components";

const PError = styled.p`
  color: ${({ theme }) => theme.TaskCardTitleCards};
  font-size: 1.3rem;
  width: 70%;

  @media screen and (max-width: 1171px) {
    font-size: 1.5rem;
    

 }
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

  function ordenarArray (array, busqueda) {

    let lowerText = busqueda.toLowerCase();
    const regExp = new RegExp(lowerText);

    let newArray = [];
/* Organizar por título */
    array.forEach((task) => {
      if(task.titulo.toLowerCase() === lowerText){
        newArray.push(task)
      }

    })

    array.forEach((task) => {
      if(regExp.test(task.titulo.toLowerCase())){
        newArray.push(task)
      }

    })

/* Organizar por descripción */
array.forEach((task) => {
  if(task.descripcion.toLowerCase() === lowerText){
    newArray.push(task)
  }

})

array.forEach((task) => {
  if(regExp.test(task.descripcion.toLowerCase())){
    newArray.push(task)
  }

})

    let arraynoreplic = new Set(newArray);
    let result = [...arraynoreplic];
    return  result;

  }

  const onSearch = async (busqueda) => {
    clearTimeout(time);
    setStartRender(false);
    let lowerText = busqueda.toLowerCase();
    const regExp = new RegExp(lowerText);
    if (busqueda.length > 0) {
      let orderRes = [];

      try {
        await new Promise((resolve) => {
          setTime(
            setTimeout(() => {
              tareas.forEach((task) => {
                let tituloLower = task.titulo.toLowerCase();
                let descripcionLower = task.descripcion.toLowerCase();

                if (tituloLower === lowerText || regExp.test(tituloLower)) {
                  orderRes.push(task);
                }
                
                if (descripcionLower === lowerText || regExp.test(descripcionLower)) {
                  orderRes.push(task);
                }
                
              });


              let orderArray = ordenarArray(orderRes, busqueda); 


              setResultadoBusqueda(orderArray);
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
