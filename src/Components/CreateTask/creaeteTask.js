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
max-height: 80vh;



`;

const TitleCreate = styled.h2`
font-size: 1.8rem;
color: ${({ theme }) => theme.SectionTitle};
align-self: center;
margin-top: 3%;
font-weight: bold;
@media screen and (max-width: 1199px) {
 font-size :2.3rem ;
}

;
`;

const Form = styled.form`
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
margin-top: 2%;
`;



const ButtonFormA = styled.button`
color:  ${({ theme }) => theme.buttonPositiveText}; 
border: none;
background-color:  ${({ theme }) => theme.buttonPositiveBackground}; 
padding: 0.7rem 1.5rem;
cursor: pointer;
font-size: 1.3rem;
border: 0.15rem solid transparent;
box-sizing: border-box;
border-radius: 0.4rem;
&:hover{
    box-shadow: 0 0 0 0.11rem rgba(0, 0, 0, 0.3);
}

&:active{
    border: 0.15rem solid lightblue;
}

`;

const ButtonFormC = styled.button`
color: ${({ theme }) => theme.titleCards}; 
border: none;
background-color:  ${({ theme }) => theme.TaskCarddBackground}; 
padding: 0.7rem 1.5rem;
cursor: pointer;
font-size: 1.3rem;
box-sizing: border-box;
border: 0.1rem solid transparent;
border-radius: 0.4rem;

&:hover{
    box-shadow: 0 0 0 0.11rem rgba(0, 0, 0, 0.3);;
}

&:active{
    border: 0.1rem solid lightblue;
}

`;


/* buttonPositiveBackground
buttonPositiveText
buttonNegativeBackground
buttonNegativeText */

const SpanError = styled.span`
  margin-top: 1%;
  color: ${({ invalid, theme }) => (invalid ? theme.FormInputError : theme.FormInputValid)};
  font-size: 1.1rem;

  @media screen and (max-width: 1199px) {
    margin-top: 0.5%;
    font-size: 1.2rem;

}

`;



const TaskFormContext = createContext();

const CreateTask = () => {
    const { tareas, setTareas, notificaciones, setNotificaciones, history, setHistory} = useContext(TareasGlobal);
    


    const [title, setTitle] = useState({ invalido: false, valor: '', error: '', valid: '' });
    const [descripcion, setDescription] = useState({ invalido: false, valor: '', error: '', valid: '' });
    const [prioridad, setPrioridad] = useState({ invalido: true, valor: '', error: '', });



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
        if (descripcion.length > 100) {
            error.isError = true;
            error.message = 'Descripción inválida, el máximo permitido es de 100 carácteres';
        }
        if (descripcion.length <= 100) {
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
                time += fecha.getUTCMonth()+1 + '/';
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
                setTareas([newTarea ,...tareas ])
                cancelarFunct();
                setNotificaciones([...notificaciones, {mensaje: `Se ha creado la tarea ${title.valor}`, type: "info"}])
                setHistory([{date: `${time}    ${fecha.getHours()}:${fecha.getMinutes().length === 1 ? (`0+1`) : (fecha.getMinutes())}` , title: title.valor , type:'create'},...history])
                localStorage.removeItem("datos");
            } catch (error) {
                console.log(error)
                setNotificaciones([...notificaciones, {mensaje: `Hubo un error al crear la tarea ${title.valor}, por favor intente de nuevo`, type: "error"}])
                
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
            localStorage.removeItem("datos");
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
                                    placeholder={'Título de la tarea'}
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
                                    placeholder={'Descripción de la tarea'}
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
                                <ButtonFormA
                                    onClick={(e) => {
                                        e.preventDefault();
                                        sendForm();

                                    }}
                                >Crear tarea</ButtonFormA>
                                <ButtonFormC
                                    onClick={(e) => {
                                        e.preventDefault();
                                        cancelarFunct();
                                    }}

                                >Borrar datos</ButtonFormC>
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