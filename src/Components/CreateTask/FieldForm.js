import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { TaskFormContext } from './creaeteTask';


const  DivField = styled.div`
display: flex;
flex-direction: column;
width: 100%;

`;

const LabelField = styled.label`
margin-top: 3%;
color: black; 

`;

const InputField = styled.input`
width: 93%;
padding: 2%;
outline: none;
background-color: ${({ theme }) => theme.backgroundBody };  ;

`;

const FieldForm = ({text, textlower, value, error, placeholder}) =>{

    const [errorm, setErrorm] = useState({isError: false, message: ''})

    const {title, setTitle, descripcion, setDescription} = useContext(TaskFormContext)


    const ActualizarCampo = (valor, validation ) =>{
        console.log('Test de validation', validation)
        if(textlower === 'titulo'){
            if(validation.message.length < 1 && validation.valid.length > 0){
                setTitle({invalido: validation.isError, valor: valor, error: '', valid: validation.valid})
            }else{
                setTitle({invalido: validation.isError, valor: valor, error: validation.message, valid : ''})
            }
        }
        if(textlower === 'descripcion'){
            if(validation.message.length < 1 && validation.valid.length > 0){
                setDescription({invalido: validation.isError, valor: valor, error: '', valid: validation.valid})
            }else{
                setDescription({invalido: validation.isError, valor: valor, error: validation.message, valid : ''})
            }
        }
    }



    return(
        <>
        <DivField>
            <LabelField htmlFor={textlower}>{text}:</LabelField>
            <InputField name={textlower} 
            value={value}

            onInput={(e)=>{
                let value = e.target.value;
                let verify = error(e.target.value);
                ActualizarCampo(value, verify);

            }}

            placeholder={placeholder}
            ></InputField>
        </DivField>
        </>
    )
}

export default FieldForm;
