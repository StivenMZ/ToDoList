import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { sugerenciasGlobal } from './index';


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
 margin-top: 1%;
}

@media screen and (max-width: 768px) {
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

@media screen and (max-width: 768px) {
font-size: 1.6rem;
}


`;

const TextAreaField = styled.textarea`
width: 93%;
padding: 1% 2%;
outline: none;
background-color: ${({ theme }) => theme.FormInputBg};
font-size: 1.22rem;
border: none;
box-sizing: border-box;
border-radius: 1rem;
box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
border: 1px solid transparent;
color: ${({ textlower, theme }) =>  textlower === 'descripcion' ? theme.FormInputTextColorTitleDesc  : theme.FormInputTextColorTitle};

min-width: 93%;
max-width: 93%;
min-height: 4rem;
max-height: 8rem;


&::placeholder{
    color: ${({ theme }) => theme.FormInputPlText};
    opacity: 0.4;
}

&:focus{
    border: 1px solid ${({ theme }) => theme.FormInputBorderActivate};

}

@media screen and (max-width: 1199px) {
 font-size :1.5rem ;
 padding: 2%;
 
}

@media screen and (max-width: 1199px) {
font-size: 1.6rem;
}


`;



const FieldForm = ({ text, textlower, value, error, placeholder, textarea }) => {

    const [errorm, setErrorm] = useState({ isError: false, message: '' })

    const { nombre, setNombre, sugerencia, setSugerencia } = useContext(sugerenciasGlobal)



    const ActualizarCampo = (valor, validation) => {
        console.log('Test de validation', validation)
        if (textlower === 'nombre') {
            if (validation.message.length < 1 && validation.valid.length > 0) {
                setNombre({ invalido: validation.isError, valor: valor, error: '', valid: validation.valid })
            } else {
                setNombre({ invalido: validation.isError, valor: valor, error: validation.message, valid: '' })
            }
        }
        if (textlower === 'sugerencia') {
            if (validation.message.length < 1 && validation.valid.length > 0) {
                setSugerencia({ invalido: validation.isError, valor: valor, error: '', valid: validation.valid })
            } else {
                setSugerencia({ invalido: validation.isError, valor: valor, error: validation.message, valid: '' })
            }
        }
    }



    return (
        <>
            <DivField>
                <LabelField htmlFor={textlower}>{text}:</LabelField>


                {textarea ? (
                    <TextAreaField
                        name={textlower}
                        value={value}
                        onInput={(e) => {
                            let value = e.target.value;
                            let verify = error(e.target.value);
                            ActualizarCampo(value, verify);
                        }}
                        placeholder = { placeholder }
                    >

                    </TextAreaField>)
                    :
                    (<InputField autoComplete='off'
                        name={textlower}
                        value={value}
                        onInput={(e) => {
                            let value = e.target.value;
                            let verify = error(e.target.value);
                            ActualizarCampo(value, verify);

                        }}
                        placeholder={placeholder}
                    ></InputField>

                    )}

            </DivField>

        </>
    )
}

export default FieldForm;
