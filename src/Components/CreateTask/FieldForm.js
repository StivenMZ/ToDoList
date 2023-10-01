import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const  DivField = styled.div`
display: flex;
flex-direction: column;
width: 100%;

`;

const LabelField = styled.label`
margin-top: 3%;
color: ${({ theme }) => theme.textOB};  

`;

const SpanError = styled.span`
color: red;
`;

const SpanValid = styled.span`
color: #05ff05;
`;

const InputField = styled.input`
width: 93%;
padding: 2%;
outline: none;
background-color: ${({ theme }) => theme.backgroundBody };  ;

`;

const FieldForm = ({text, textlower, values, onChangeInput, set, error}) =>{

    const [errorm, setErrorm] = useState({isError: false, message: ''})
    const [valido, setValido] = useState('')
    const [forValid, setForValid] = useState('');
   

    useEffect(()=>{


        if(errorm.isError === false && forValid.length > 0){
            setValido('Campo válido')
        }else{
           setValido('') 
        }


    }, [errorm])


    return(
        <>
        <DivField>
            <LabelField htmlFor={textlower}>{text}:</LabelField>
            <InputField name={textlower} 
            value={values}
            onChange ={(e)=>{
                const value = e.target.value;
                onChangeInput(set, value)
                
                console.log(value.length)
            }}

            onBlur={(e)=>{
                let verify = error(e.target.value);
                console.log(verify)
                setForValid(e.target.value);
                setErrorm(verify)
            }}

            ></InputField>
            {errorm.isError && errorm.message.length > 0 ? 
            (<SpanError>{errorm.message}</SpanError>) 
            : (<SpanValid>{valido}</SpanValid>) 
            }
        </DivField>
        </>
    )
}

export default FieldForm;
