import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { TaskFormContext } from './creaeteTask';


const  DivField = styled.div`
display: flex;
flex-direction: column;
width: 100%;
gap: 0.4rem;

`;

const LabelField = styled.label`
margin-top: 3%;
color: ${({ theme }) => theme.FormText};
font-size: 1.1rem;

@media screen and (max-width: 1199px) {
 font-size :1.6rem ;
}

@media screen and (max-width: 1199px) {
font-size: 1.7rem;
}


`;

const InputField = styled.input`
width: 93%;
padding: 2%;
outline: none;
background-color: ${({ theme }) => theme.FormInputBg};
font-size: 1.22rem;
border: none;
box-sizing: border-box;
border-radius: 1rem;
box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
border: 1px solid transparent;
color: ${({ textlower, theme }) =>  textlower === 'descripcion' ? theme.FormInputTextColorTitleDesc  : theme.FormInputTextColorTitle};


&::placeholder{
    color: ${({ theme }) => theme.FormInputPlText};
    opacity: 0.4;
}

&:focus{
    border: 1px solid ${({ theme }) => theme.FormInputBorderActivate};

}

@media screen and (max-width: 1199px) {
 font-size :1.5rem ;
 padding: 3%;
 
}

@media screen and (max-width: 1199px) {
font-size: 1.6rem;
}


`;



const FieldForm = ({text, textlower, value, error, placeholder}) =>{


    const {setTitle, setDescription} = useContext(TaskFormContext)


    const ActualizarCampo = (valor, validation ) =>{
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
            autoComplete={'off'}
            textlower={textlower}
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
