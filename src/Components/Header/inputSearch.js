import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import {TareasGlobal} from '../../App'



const InputBusqued = styled.input`
width: 70%;
padding: 0.23rem;


`

const InputBusqueda = ({taskList}) => {

    const {tareas, setTareas} = useContext(TareasGlobal);
    const [busqueda, setBusqueda] = useState('');
    const [resultado, setResultado] = useState([])



    const onSearch = (params) =>{
        if(busqueda.length > 0){
            let orderRes = [];
            tareas.filter((task)=>{
                if (params.toLowerCase() === task.titulo.toLowerCase()){
                 orderRes.push(task);
                }
                if (params.toLowerCase() === task.descripcion.toLowerCase()){
                    orderRes.push(task);
                }
                return setResultado(orderRes);
            })



        }else{
            console.log('No buscar nada')
        }

    }

    
    useEffect(()=>{
   console.log(resultado)

    },[resultado])

    return(
    <>
    <InputBusqued
            type="text"
            placeholder="Buscar tarea"
            value = {busqueda}
            onChange={(e)=>{
                let value = e.target.value;
                setBusqueda(value);
                onSearch(busqueda);
            
            }}

            />
         
    </>)

}

export default InputBusqueda;