import React, { useState } from 'react';
import styled from 'styled-components';

const  DivField = styled.div`
display: flex;
flex-direction: column;
width: 100%;

`;

const LabelField = styled.label`
margin-top: 3%;
`;

const InputField = styled.input`
width: 100%;
`;

const FieldForm = ({text, textlower, values, onChangeInput, set}) =>{

    return(
        <>
        <DivField>
            <LabelField htmlFor={textlower}>{text}:</LabelField>
            <InputField name={textlower} 
            value={values}
            onChange ={(e)=>{
                const value = e.target.value;
                onChangeInput(set, value)
            }}
            ></InputField>
        </DivField>
        </>
    )
}

export default FieldForm;
