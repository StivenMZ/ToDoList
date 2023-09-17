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

`


const PriorityBar = ({set, onChangeInput}) =>{
    


    return(
        <>
        <DivBar>
            <LabelSelect htmlFor='prioridad'>Prioridad:</LabelSelect>
            <Selection id='prioridad' name='prioridad'
            onChange={(e)=>{
                onChangeInput(set, e.target.value)
            }}
            defaultValue={'Baja'}
            >
                <Option value={'Alta'}>Alta</Option>
                <Option value={'Media'}>Media</Option>
                <Option value={'Baja'}>Baja</Option>
            </Selection>
        </DivBar>
        </>
    )


}

export default PriorityBar;