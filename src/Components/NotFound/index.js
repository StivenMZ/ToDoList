import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import TaskCard from "../TaskBar/taskCard";
import { TareasGlobal } from '../../App';
import {useNavigate} from "react-router-dom";



const NotFound = () => {

 
    
 

    return (
        <>
            <h1>Esta página no existe, ¿estas perdido?</h1>
        </>
    )


}

export default NotFound;
