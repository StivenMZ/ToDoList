import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import TaskCard from "../TaskBar/taskCard";
import { TareasGlobal } from '../../App';
import {useNavigate} from "react-router-dom";

const SearchResult = styled.section`
margin-top: 3%;
border: 1px solid;
height: 80vh;
width: 70%;
display: flex;
justify-content: flex-start;
flex-direction: column;
align-items: center;
flex-wrap: wrap;
`;

const DivTitle = styled.div`
flex-basis: 10%;
margin-top: 2%;

`;

const PhTitle = styled.p`
color: black;
font-size: 1.3rem;
`;



const BackToBackButton = styled.button`
border: 1px solid;
display: flex;
justify-content: center;
text-align: center;
padding: 0.5rem 1rem;
align-self: end;
cursor: pointer;

`;


const SearchResults = () => {

    const  navigate = useNavigate();


    const { tareas, busqueda, resultadoBusqueda, setResultadoBusqueda, setBusqueda } = useContext(TareasGlobal);

    console.log(resultadoBusqueda, 'test resultado busqueda')


    const onSearch = (busqueda) => {
        if (busqueda.length > 0) {


            let orderRes = [];

            try {
                //Busqueda por títuo
                tareas.filter((task) => {
                    if (busqueda.toLowerCase() === task.titulo.toLowerCase()) {
                        orderRes.push(task);
                    }
                    if (busqueda.toLowerCase() === task.descripcion.toLowerCase()) {
                        orderRes.push(task);
                    }

                  

                })
                console.log(orderRes);

                let arraynoreplic = new Set(orderRes);

                let result = [...arraynoreplic]

                setResultadoBusqueda(result)

            } catch (error) {
                console.log(error);
            }

        }
    }




    useEffect(() => {
        onSearch(busqueda);
    }, [busqueda, tareas])


    
 

    return (
        <>
            <SearchResult>
                <BackToBackButton
                onClick={()=> {
                    console.log(`$desde resultados de búsuqeda`)
                    setBusqueda('')
                    navigate(-1)
                }
            }
                >Volver atrás 
                </BackToBackButton>
                <DivTitle>
                    <PhTitle>Resultados de búsqueda para {busqueda}</PhTitle>
             
                </DivTitle>
                {(resultadoBusqueda) ? (resultadoBusqueda.length > 0 ? (
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
                    <p>No se encontraron resultados</p>
                )) : <p>Sintax</p>}
            </SearchResult>
        </>
    )


}

export default SearchResults;
