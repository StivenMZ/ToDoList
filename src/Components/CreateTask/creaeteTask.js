import React, { useState, useEffect, useContext, createContext } from 'react';
import styled, { keyframes } from 'styled-components';
import FieldForm from './FieldForm';
import PriorityBar from './priorityBar';
import { TareasGlobal } from '../../App';
import { NavigationBarGlobal } from '../Main/main'

const AnimationWake = keyframes`
  0% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }


`;
 

const SectionCreateTask = styled.section`
width: 100%;
padding: 1rem;
display: flex;
justify-content: center;
flex-basis: 70%;
animation: ${AnimationWake} 0.2s ease-in-out;
`;

const TitleCreate = styled.h2`
font-size: 1.8rem;
color: black;
align-self: center;
margin-top: 3%;
font-weight: bold;
;
`;

const Form = styled.form`
margin-top: 4%;
width: 70%;
display: flex;
flex-direction: column;
padding: 0 4%;
border-radius: 4%;

`;

const DivFields = styled.div`
display: flex;
flex-direction: column;
gap: 2%;
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



const TaskFormContext = createContext();

const CreateTask = () => {
    const { tareas, setTareas, notificaciones, setNotificaciones} = useContext(TareasGlobal);
    
 

    const [title, setTitle] = useState({ invalido: false, valor: '', error: '', valid: '' });
    const [descripcion, setDescription] = useState({ invalido: false, valor: '', error: '', valid: '' });
    const [prioridad, setPrioridad] = useState({ invalido: true, valor: '', error: '', });


  /*   useEffect(() => {
        console.log(title.invalido + ' ' + title.valor + ' ' + title.error + ' ' + title.valid + '<=Titulo')
    }, [title]) */
    //title, setTitle, descripcion, setDescripcion, prioridad, setPrioridad,

    const [renderizar, setRenderizar] = useState(true);


    const errorTitle = (title) => {
        let error = { isError: false, message: '', valid: '' };
        if (title.length > 45) {
            error.isError = true;
            error.message = 'Título inválido, el máximo permitido es de 45 carácteres';
        }
        if (title.length <= 45) {
            error.isError = false;
            error.message = ''
            error.valid = 'Título válido'
        }

        if (title.length < 1) {
            error.isError = false;
            error.message = ''
            error.valid = ''
        }


        return error;

    }


    const errorDescripcion = (descripcion) => {
        let error = { isError: false, message: '', valid: '' };
        if (descripcion.length > 80) {
            error.isError = true;
            error.message = 'Descripción inválida, el máximo permitido es de 80 carácteres';
        }
        if (descripcion.length <= 80) {
            error.isError = false;
            error.message = ''
            error.valid = 'Descripción válida'
        }

        if (descripcion.length < 1) {
            error.isError = false;
            error.message = ''
            error.valid = ''
        }


        return error;
    }




    ////CREACIÓN DE TAREA
    const sendForm = () => {

        let validations = { titleValid: false, descripcionValid: false, prioridadValid: false }


        if (title.valor.length === 0) {
            setTitle({ invalido: true, valor: title.valor, error: 'El campo título no puede estar vacío', valid: '' })
            validations.titleValid = false;
        } else {
            validations.titleValid = true;

        }

        if (descripcion.valor.length === 0) {
            setDescription({ invalido: true, valor: descripcion.valor, error: 'El campo descripción no puede estar vacío', valid: '' })
            validations.descripcionValid = false;

        } else {
            validations.descripcionValid = true;

        }

        if (prioridad.valor.length === 0) {
            setPrioridad({ invalido: true, valor: prioridad.valor, error: 'Debes seleccionar alguna prioridad', valid: '' })
            validations.prioridadValid = false;

        } else {
            validations.prioridadValid = true;

        }

        if ((validations.titleValid  && !title.invalido ) && (validations.descripcionValid  && !descripcion.invalido ) && (validations.prioridadValid && !prioridad.invalido)) {
            try {
                const fecha = new Date();
                let time = '';
                time += fecha.getDate() + '/';
                time += fecha.getUTCMonth() + '/';
                time += fecha.getFullYear();


                const newTarea = {
                    titulo: title.valor,
                    descripcion: descripcion.valor,
                    prioridad: prioridad.valor,
                    fechaIn: time,
                    id: tareas.length,
                    completada: false,
                    fechaFin: ''
                };

                console.log(newTarea);
                setTareas([...tareas, newTarea])
                cancelarFunct();
                setNotificaciones([...notificaciones, {mensaje: `Se ha creado la tarea ${title.valor}`}])

            } catch (error) {
                console.log(error)
                setNotificaciones([...notificaciones, {mensaje: `Hubo un error al crear la tarea ${title.valor}, por favor intente de nuevo`}])
                
            }
        } else {
            return

        }

    }

    const cancelarFunct = () => {
        if (title.valor.length > 0 || descripcion.valor.length > 0 || prioridad.valor.length > 0 || title.invalido || prioridad.invalido || descripcion.invalido ) {
            setTitle({ invalido: false, valor: '', error: '', valid: '' });
            setPrioridad({ invalido: true, valor: '', error: '', valid: '' });
            setDescription({ invalido: false, valor: '', error: '', valid: '' });
        }


    }

    useEffect(() => {
        setRenderizar(true);
    }, [renderizar])



    return (
        <>
            <TaskFormContext.Provider value={{ title, setTitle, descripcion, setDescription, prioridad, setPrioridad }}>
                <SectionCreateTask>
                    <Form>
                        <TitleCreate>Crea una nueva tarea</TitleCreate>
                        {renderizar ? (<>
                            <DivFields>
                                <FieldForm text={'Crea un título para tu tarea'}
                                    textlower={'titulo'}
                                    value={title.valor}
                                    error={errorTitle}
                                    placeholder={'Título de la tarea...'}
                                />
                                <SpanError
                                    invalid={title.invalido}
                                >
                                    {title.invalido && title.error.length > 0 && title.error}
                                    {!title.invalido && title.valid.length > 0 && title.valid}

                                </SpanError>


                                <FieldForm text={'Crea una descripción para tu tarea'}
                                    textlower={'descripcion'}
                                    value={descripcion.valor}
                                    error={errorDescripcion}
                                    placeholder={'Descripción de la tarea...'}
                                />
                                <SpanError
                                    invalid={descripcion.invalido}
                                >
                                    {descripcion.invalido && descripcion.error.length > 0 && descripcion.error}
                                    {!descripcion.invalido && descripcion.valid.length > 0 && descripcion.valid}
                                </SpanError>

                                <PriorityBar set={setPrioridad}
                                ></PriorityBar>
                                <SpanError
                                    invalid={prioridad.invalido}
                                >{prioridad.error}
                                </SpanError>

                            </DivFields>
                            <DivButtons>
                                <ButtonForm
                                    onClick={(e) => {
                                        e.preventDefault();
                                        sendForm();

                                    }}
                                >Crear tarea</ButtonForm>
                                <ButtonForm
                                    onClick={(e) => {
                                        e.preventDefault();
                                        cancelarFunct();
                                    }}

                                >Borrar datos</ButtonForm>
                            </DivButtons>
                        </>) : <></>}


                    </Form>
                </SectionCreateTask>
            </TaskFormContext.Provider>
        </>
    )
}
export { TaskFormContext };
export default CreateTask;