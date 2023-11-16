import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { TaskFormContext } from './creaeteTask';


const DivBar = styled.div`
display: flex;
flex-direction: column;
margin: 3% 0;
gap: 1rem;

`;

const Selection = styled.select`
width: 94%;
font-size: 1.22rem;
display: block;
padding: 2%;
box-sizing: border-box;
box-shadow: 0  0 1rem  rgba(0,0,0,0.1);
outline: none;
background-color:  ${({ theme }) => theme.FormInputBg};
cursor: pointer;
border: 0.1rem solid transparent;
color:${({ theme }) => theme.FormInputPlText};

&:focus{
    border: 0.1rem solid  ${({ theme }) => theme.FormInputBorderActivate};

    
    
}
@media screen and (max-width: 1199px) {
    font-size: 1.5rem;
padding: 3%;
}
`

const Option = styled.option`



`
const LabelSelect = styled.label` 
color: ${({ theme }) => theme.FormText};
font-size: 1.1rem;

@media screen and (max-width: 1199px) {
 font-size :1.6rem ;
}
`

const PriorityBar = () => {

    const { prioridad, setPrioridad } = useContext(TaskFormContext)
    const [viewPrioridad, setViewPrioridad] = useState('')

    useEffect(() => {
        setViewPrioridad(prioridad.valor)
    }, [prioridad])

    return (
        <>
            <DivBar>
                <LabelSelect htmlFor='prioridad'>¿Cual es la prioridad de tu tarea?:</LabelSelect>
                <Selection id='prioridad' name='prioridad'
                    onChange={(e) => {
                        setPrioridad({ invalido: false, valor: e.target.value, error: '' })

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