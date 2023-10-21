import React, { useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import lupa from '../../img/lupa.svg'
import { TareasGlobal } from '../../App';
import { useNavigate, useLocation } from "react-router-dom";


const DivBuscar = styled.div`
flex-basis: 65%;
display: flex;
justify-content: center;
position: relative;
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

/* const AnimationInputOut = keyframes`
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
 */
const InputSearch = styled.input`
width: 100%;
z-index: 100;
`;

const LupaIcon = styled.img`
width: 100%;
height: 98%;
`;

const SpanX = styled.span`

`;


const SearchInput = () => {

  const ruta = useLocation();

  const { busqueda, setBusqueda } = useContext(TareasGlobal);


  const [seeInput, setSeeInput] = useState(false);

  const [direction, setDirection] = useState(false);

  const functionAnim = () => {
    if ((!seeInput) && (!direction)) {
      setSeeInput(true);
      setDirection(true);
    } else {
      setDirection(false);
      setTimeout(() => {
        setSeeInput(false)
      }, 300);
    }

  }

  const UpdateSearch = (valor) => {
    setBusqueda(valor);
  }

  const navigate = useNavigate();


  useEffect(() => {

    if(ruta.pathname !== '/resultado-de-busqueda' && busqueda.length > 0){
      navigate('/resultado-de-busqueda')
    }
  }, [busqueda])


  return (<>

    <DivBuscar>
      
    <InputSearch
    value={busqueda}
    direction={direction}
    placeholder="Buscar tarea..."
    onInput={(e) => {
      UpdateSearch(e.target.value);
    }}
    />

    </DivBuscar>
  </>)

}

export default SearchInput;
