import React, { useState, useContext, useEffect, createContext } from 'react';
import styled, { keyframes } from 'styled-components';
import FieldForm from './FieldForm';
import { TareasGlobal } from '../../../../App';

const Form = styled.form`
display: flex;
flex-direction: column;
width: 100%;
box-sizing: border-box;
justify-content: center;
`;

const Title = styled.h4`
align-self: center;
`;

const DivFields = styled.div`
gap: 2%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
box-sizing: border-box;
padding: 1% 3%;
`;

const DivButtons = styled.div`
display: flex;
justify-content: space-around;
`;

const ButtonForm = styled.button`
color: purple;
border: none;
background-color:  ${({ theme }) => theme.button}; ;
padding: 0.5rem;
cursor: pointer;
font-size: 1.1rem;
border: 0.15rem solid transparent;

&:hover{
    opacity: 0.82;
}

&:active{
    border: 0.15rem solid lightpink;
}

`;


const SpanError = styled.span`
  color: ${({ invalid }) => (invalid ? 'red' : '#01ff01')};
`;


const sugerenciasGlobal = createContext();

const Sugerencias = () => {

    const {notificaciones, setNotificaciones} = useContext(TareasGlobal);

    const [nombre, setNombre] = useState({ invalido: false, valor: '', error: '', valid: '' });

    const [sugerencia, setSugerencia] = useState({ invalido: false, valor: '', error: '', valid: '' });

    const errorNombre = (nombre) => {
        let error = { isError: false, message: '', valid: '' };
        if (nombre.length > 50) {
            error.isError = true;
            error.message = 'Nombre inválido, el máximo permitido es de 50 carácteres';
        }
        if (nombre.length <= 50) {
            error.isError = false;
            error.message = ''
            error.valid = 'Nombre válido'
        }

        if (nombre.length < 1) {
            error.isError = false;
            error.message = ''
            error.valid = ''
        }


        return error;

    }


    const errorSugerencia = (sugerencia) => {
        let error = { isError: false, message: '', valid: '' };
        if (sugerencia.length > 100) {
            error.isError = true;
            error.message = 'Sugerencia inválida, el máximo permitido es de 100 carácteres';
        }
        if (sugerencia.length <= 100) {
            error.isError = false;
            error.message = ''
            error.valid = 'Sugerencia válida'
        }

        if (sugerencia.length < 1) {
            error.isError = false;
            error.message = ''
            error.valid = ''
        }


        return error;
    }

    const sendForm = () => {

        let validations = { titleValid: false, descripcionValid: false, prioridadValid: false }


        if (nombre.valor.length === 0) {
            setNombre({ invalido: true, valor: nombre.valor, error: 'El campo nombre no puede estar vacío', valid: '' })
            validations.nombreValid = false;
        } else {
            validations.nombreValid = true;

        }

        if (sugerencia.valor.length === 0) {
            setSugerencia({ invalido: true, valor: sugerencia.valor, error: 'El campo sugerencia no puede estar vacío', valid: '' })
            validations.sugerenciaValid = false;

        } else {
            validations.sugerenciaValid = true;

        }

        

        if ((validations.nombreValid  && !nombre.invalido ) && (validations.sugerenciaValid  && !sugerencia.invalido )){
            try {
                const fecha = new Date();
                let time = '';
                time += fecha.getDate() + '/';
                time += fecha.getUTCMonth()+1 + '/';
                time += fecha.getFullYear();

                const newComment = {
                    nombre: nombre.valor, 
                    mensaje: sugerencia.valor,
                    fechaSugerencia: time
                };

                console.log(newComment, 'newComment desde sugerencias');
                cancelarFunct();
                setNotificaciones([...notificaciones, {mensaje: `Hemos recibido tu sugerencia, ¡muchas gracias!`}])

            } catch (error) {
                console.log(error)
                setNotificaciones([...notificaciones, {mensaje: `Lo sentimos, no pudimos recibir tu comentario, por favor intentálo de nuevo`}])
                
            }
        } else {
            return

        }

    }

    const cancelarFunct = () => {
        if (nombre.valor.length > 0 || sugerencia.valor.length > 0 || nombre.invalido || sugerencia.invalido ) {
            setNombre({ invalido: false, valor: '', error: '', valid: '' });
            setSugerencia({ invalido: true, valor: '', error: '', valid: '' });
        }


    }


    useEffect(() => {
        console.log(nombre, sugerencia, ' nombre -sugerencia')
    }, [nombre, sugerencia])

    return (<>
        <Form>
            <Title>Para enviar tu sugerencia, llena el siguiente formulario</Title>
            <DivFields>
                <sugerenciasGlobal.Provider value={{ nombre, setNombre, sugerencia, setSugerencia }}>


                    <FieldForm
                        text={'Tu nombre'}
                        textlower={'nombre'}
                        value={nombre.valor}
                        error={errorNombre}
                        placeholder={'Nombre..'}
                        textarea={false}
                    >
                    </FieldForm>

                    <SpanError
                        invalid={nombre.invalido}
                    >
                        {nombre.invalido && nombre.error.length > 0 && nombre.error}
                        {!nombre.invalido && nombre.valid.length > 0 && nombre.valid}

                    </SpanError>

                    <FieldForm
                        text={'Sugerencia'}
                        textlower={'sugerencia'}
                        value={sugerencia.valor}
                        error={errorSugerencia}
                        placeholder={'Deberían cambiar....'}
                        textarea={true}
                    >

                    </FieldForm>
                    <SpanError
                        invalid={sugerencia.invalido}
                    >
                        {sugerencia.invalido && sugerencia.error.length > 0 && sugerencia.error}
                        {!sugerencia.invalido && sugerencia.valid.length > 0 && sugerencia.valid}

                    </SpanError>

                </sugerenciasGlobal.Provider>
            </DivFields>
            <DivButtons>
                <ButtonForm
                    onClick={(e) => {
                        e.preventDefault();
                        sendForm();
                    }}/*  */
                >Enviar sugerencia</ButtonForm>
                <ButtonForm

                    onClick={(e) => {
                        e.preventDefault();
                        cancelarFunct();
                    }}
                >Borrar datos</ButtonForm>
            </DivButtons>
        </Form>
    </>)

}

export { sugerenciasGlobal };
export default Sugerencias;