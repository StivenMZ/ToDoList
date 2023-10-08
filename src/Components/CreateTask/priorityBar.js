import React, { useState } from 'react';
import styled from 'styled-components';

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
color: white;
`
const SpanError = styled.span`
color: red;
`;

const PriorityBar = ({set, onChangeInput, error}) =>{
    

    const [priority, setPriority] = useState('')

    return(
        <>
        <DivBar>
            <LabelSelect htmlFor='prioridad'>Prioridad:</LabelSelect>
            <Selection id='prioridad' name='prioridad'
            onChange={(e)=>{
                setPriority(e.target.value)
                onChangeInput(set, e.target.value)
            }}
            value={priority}
            >   
                <Option disabled hidden value=''>Seleccione una prioridad</Option>
                <Option value={'Alta'}>Alta</Option>
                <Option value={'Media'}>Media</Option>
                <Option value={'Baja'}>Baja</Option>
            </Selection>
            <SpanError>{error}</SpanError>
        </DivBar>
        </>
    )


}

export default PriorityBar;