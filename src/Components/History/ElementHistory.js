import React, { useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";


const ArticleElement = styled.article`
width: 100%;
border: 1px solid;
display: flex;
gap: 2rem;
`;

/*
create
completed
delete
    { date: '19:30 h 55s', title: 'TAREA 3', type: 'delete' },
*/

const ElementHistory = ({ date, title, type }) => {

    const [text, setText] = useState('');

    useEffect(() => {
        if (type === 'create') {
            setText(`Creaste la tarea ${title}`)
        }
        if (type === 'completed') {
            setText(`Completaste la tarea ${title}`)
        }
        if (type === 'delete') {
            setText(`Eliminiaste la tarea ${title}`)
        }
    }, [])

    return (
        <ArticleElement>
            <span>{date}</span>
            <p>{text}</p>
        </ArticleElement>
    )
}

export default ElementHistory;
