import React, { useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import lupa from '../../img/lupa.svg'
import { TareasGlobal } from '../../App';
import { useNavigate } from "react-router-dom";


const DivBuscar = styled.div`
width: 100%;
display: flex;
justify-content: center;
position: relative;
flex-basis: 7%;
`;

const ButtonSearch = styled.button`
background-color: tra;
width: 30%;
align-self: center;
display: flex;
justify-content: center;
flex-basis: 22.4%;
cursor: pointer;
max-height: 100%;
`;

const AnimationInputOut = keyframes`
  0% {
    width: 1%;
  }
 
  100% {
    width: 500%;
  }
`

const AnimationInputIn = keyframes`
  0% {
    width: 500%;
  }
 
  100% {
    width: 1%;
  }
`

const InputSearch = styled.input`
position: absolute;
left: 62%;
top: 14%;
width: ${({ direction }) => (direction ? '500%' : '1%')};
animation: ${({ direction }) => (direction ? AnimationInputOut : AnimationInputIn)} 0.2s linear 1;
z-index: 100;
`;

const LupaIcon = styled.img`
width: 100%;
height: 98%;
`;

const SpanX = styled.span`

`;


const Search = () => {

  const {busqueda, setBusqueda} = useContext(TareasGlobal);


    const [seeInput, setSeeInput] = useState(false);

    const [direction, setDirection] = useState(false);

    const functionAnim = () =>{
        if((!seeInput) && (!direction)){
            setSeeInput(true);
            setDirection(true);
        }else{
            setDirection(false);
            setTimeout(() => {
                setSeeInput(false)
            }, 300);
        }

    }

    const UpdateSearch = (valor) =>{
      setBusqueda(valor);
    }
    
    const navigate = useNavigate();

    
  useEffect(()=>{
    if(busqueda.length === 0){
      navigate('/')
    }else{
      navigate('/resultado-de-busqueda')
    }
    

    

  }, [busqueda])


    return (<>

        <DivBuscar>

            <ButtonSearch
            onClick={()=>{functionAnim()}}
            >
                {seeInput ? (<SpanX>X</SpanX>) : (<LupaIcon src={lupa} alt="icono búsqueda"></LupaIcon>)}
                
                
            </ButtonSearch>
            {seeInput &&  <InputSearch
            onInput={(e)=>{
              UpdateSearch(e.target.value);
            }}
            value={busqueda}
            direction={direction}
            placeholder="Buscar tarea..."
            ></InputSearch>}   
        </DivBuscar>
    </>)

}

export default Search;
