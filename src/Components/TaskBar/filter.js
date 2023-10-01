import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import {TareasGlobal} from '../../App'


const TitleFilter = styled.h3`
color: ${({ theme }) => theme.background};
`;

const SectionButtons = styled.section`
display: flex;
width: 80%;
align-items: center;
justify-content: center;
gap: 1%;
margin-bottom: 1%;
`;

const ButtonFilter = styled.button`
font-style: italic;
cursor: pointer;
background-color: ${(props) => (props.activate ? 'orange' : 'white')};
border: none;

`;





const FilterTask = ({setTaskView, setPrioridad}) =>{

    const {tareas, setTareas} = useContext(TareasGlobal);
    const [activeFilter, setActiveFilter] = useState("no");

    useEffect(()=>{
      setActiveFilter('no')
    },[tareas])


    const filterFunct = (prioridad) =>{
      setActiveFilter(prioridad);

        let newArray = [];
    
        if(prioridad === 'no'){
          newArray = [...tareas];
        }else{
           newArray = tareas.filter((task)=> task.prioridad === prioridad);
    
        }
        setPrioridad(prioridad)
        setTaskView(newArray)
       

        console.log("activeFilter:", activeFilter); 


    
      }



    return (<>
        <TitleFilter>Filtrar por prioridad</TitleFilter>
        <SectionButtons>
            <ButtonFilter
            onClick={()=>{
                filterFunct("Alta")
               
                
            }}
            activate={activeFilter === "Alta"} 
            >Alta</ButtonFilter>
            <ButtonFilter
             onClick={()=>{
                filterFunct("Media")
            }}
            activate={activeFilter === "Media"} 
            >Media</ButtonFilter>
            <ButtonFilter
             onClick={()=>{
                filterFunct("Baja")
            }}
            activate={activeFilter === "Baja"} 
            >Baja</ButtonFilter>
            <ButtonFilter
              onClick={()=>{
                filterFunct("no")
            }}
            activate={activeFilter === "no"} 
            >No filtrar</ButtonFilter>

        </SectionButtons>
    </>)

}

export default FilterTask;