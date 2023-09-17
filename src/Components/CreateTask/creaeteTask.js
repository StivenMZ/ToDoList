import React, { useState , useEffect} from 'react';
import styled from 'styled-components';
import FieldForm from './FieldForm';
import PriorityBar from './priorityBar';

const SectionCreateTask = styled.section`
width: 35%;
padding: 1rem;
`;

const TitleCreate = styled.h2`

`;

const Form = styled.form`
margin-top: 4%;
margin-left: 7%;
width: 70%;
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
padding: 0.5rem;

`;



const CreateTask = () => {
    
    const [title, setTitle] = useState('');
    const [descripcion, setDescription] = useState('');
    const [prioridad, setPrioridad] = useState('');
    const [date, setDate] = useState('');

    const [task, setTask] = useState(undefined);




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
        setDate(time);
        setTask({titutlo: title, descripcion : descripcion, creacion: date, prioridad: prioridad})

    }
    
    useEffect(() => {
        console.log('Nuevo valor de task:', task);
      }, [task]);

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
                        />
                        <FieldForm text={'Descripción'} 
                        textlower={'descripcion'} 
                        values={descripcion} 
                        onChangeInput={onChangeInput}
                        set = {setDescription}
                        />
                        <PriorityBar set={setPrioridad} onChangeInput={onChangeInput}></PriorityBar>
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