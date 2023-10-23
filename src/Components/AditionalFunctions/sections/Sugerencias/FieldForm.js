import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { sugerenciasGlobal } from './index';


const DivField = styled.div`
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
background-color: ${({ theme }) => theme.backgroundBody};  ;

`;

const TextAreaField = styled.textarea`
width: 93%;
padding: 2%;
outline: none;
background-color: ${({ theme }) => theme.backgroundBody};  ;

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
                            placeholder = { placeholder }
                        }}
                    >

                    </TextAreaField>)
                    :
                    (<InputField
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
