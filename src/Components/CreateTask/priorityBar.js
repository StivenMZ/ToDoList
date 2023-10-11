import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { TaskFormContext } from './creaeteTask';


const DivBar = styled.div`
display: flex;
flex-direction: column;
margin: 3% 0;

`;

const Selection = styled.select`
width: 102%;
`
const Option = styled.option`

`
const LabelSelect = styled.label`
color: black;
`
const SpanError = styled.span`
color: red;
`;

const PriorityBar = () =>{

    const {prioridad, setPrioridad} = useContext(TaskFormContext)
    const [viewPrioridad, setViewPrioridad] = useState('')

    useEffect(()=>{
        setViewPrioridad(prioridad.valor)
    } ,[prioridad])

    return(
        <>
        <DivBar>
            <LabelSelect htmlFor='prioridad'>¿Cual es la prioridad de tu tarea?:</LabelSelect>
            <Selection id='prioridad' name='prioridad'
            onChange={(e)=>{
                setPrioridad({invalido: false , valor: e.target.value, error: ''})
                
            }}
            value={viewPrioridad}
            >   
                <Option disabled hidden value=''>Seleccione una prioridad</Option>
                <Option value={'Alta'}>Alta</Option>
                <Option value={'Media'}>Media</Option>
                <Option value={'Baja'}>Baja</Option>
            </Selection>
        </DivBar>
        </>
    )


}

export default PriorityBar;