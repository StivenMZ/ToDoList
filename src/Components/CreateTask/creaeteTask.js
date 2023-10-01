import React, { useState , useEffect, useContext} from 'react';
import styled from 'styled-components';
import FieldForm from './FieldForm';
import PriorityBar from './priorityBar';
import {TareasGlobal} from '../../App'

const SectionCreateTask = styled.section`
width: 35%;
padding: 1rem;
display: flex;
justify-content: center;
`;

const TitleCreate = styled.h2`
font-size: 1.4rem;
color: ${({ theme }) => theme.textOB};
align-self: center;
margin-top: 3%;
font-weight: bold;
;
`;

const Form = styled.form`
margin-top: 4%;
width: 70%;
border: 0.2rem solid;
border-color: ${({ theme }) => theme.secondary};
display: flex;
flex-direction: column;
background-color: ${({ theme }) => theme.background};
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



const CreateTask = ({recibirTarea, newId}) => {
    
    const [title, setTitle] = useState('');
   
    const errorTitle = (title) =>{
        let error = {isError: false, message:''};
        if(title.length > 45){
            error.isError = true;
            error.message = 'Título inválido, el máximo permitido es de 45 carácteres';
        } 
        if(title.length < 1){
            error.isError = false;
            error.message = ''
        } 

        return error;

    }


    const [descripcion, setDescription] = useState('');

    const errorDescripcion = (descripcion) =>{
        let error = {isError: false, message:''};
        if(descripcion.length > 85){
            error.isError = true;
            error.message = 'Descripción inválida, el máximo permitido es de 85 carácteres';
        } 
        if(descripcion.length < 1){
            error.isError = false;
            error.message = ''
        } 

        return error;

    }

    const [prioridad, setPrioridad] = useState('Baja');


    const {tareas, setTareas} = useContext(TareasGlobal);





    const onChangeInput = (set,data) =>{
        set(data)
        console.log(data)
    }


    const sendForm =  () =>{
        const fecha = new Date();
        let time = '';
        time += fecha.getDate() + '/';
        time += fecha.getUTCMonth() + '/';
        time += fecha.getFullYear();
      

        const newTarea = {
            titulo: title,
            descripcion: descripcion,
            prioridad: prioridad,
            fechaIn: time,
            id: tareas.length, 
            completada: false
          };

          console.log(newTarea);
          setTareas([...tareas, newTarea])
       

    }
     
    return (
        <>
            <SectionCreateTask>
                <Form>
                    <TitleCreate>Crea una nueva tarea</TitleCreate>
                    <DivFields>
                        <FieldForm text={'Título'} 
                        textlower={'titulo'} 
                        value={title} 
                        onChangeInput={onChangeInput}
                        set = {setTitle}
                        error={errorTitle}
                        />
                        <FieldForm text={'Descripción'} 
                        textlower={'descripcion'} 
                        values={descripcion} 
                        onChangeInput={onChangeInput}
                        set = {setDescription}
                        error= {errorDescripcion}
                        />
                        <PriorityBar set={setPrioridad} onChangeInput={onChangeInput}

                        ></PriorityBar>
                    </DivFields>

                    <DivButtons>
                        <ButtonForm
                            onClick={(e) => {
                                e.preventDefault();
                                sendForm();
                            }}
                        >Guardar</ButtonForm>
                        <ButtonForm
                            onClick={(e) => {
                                e.preventDefault();
                            }}

                        >Cancelar</ButtonForm>
                    </DivButtons>
                </Form>
            </SectionCreateTask>
        </>
    )
                        }

export default CreateTask;