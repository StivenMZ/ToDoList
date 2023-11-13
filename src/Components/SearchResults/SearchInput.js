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
    outline: none;
    z-index: 100;
    height: 100%;
    padding: 0.4rem;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.backGroundInput};
    font-size: 1.2rem;
    color: ${({ theme }) => theme.FormInputTextColorTitleDesc};
    border-radius: 1rem;
    border: 2px solid #1D63AA;
    

    &:focus{
      border: 2px solid #1D63AA;
      box-shadow: 0 0 2px #007bff, 0 0 2.5px #007bff;

    }
    &::placeholder{
    color: ${({ theme }) => theme.FormInputPlText};
    opacity: 0.4;
}


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

    if (ruta.pathname !== '/resultado-de-busqueda' && busqueda.length > 0) {
      navigate('/resultado-de-busqueda')
    }
  }, [busqueda])


  return (<>

    <DivBuscar>

      <InputSearch
        value={busqueda}
        direction={direction}
        placeholder="Buscar tarea"
        onInput={(e) => {
          let value = e.target.value;
          if(value.length <= 100){
            UpdateSearch(e.target.value);
          }
        }}
      />

    </DivBuscar>
  </>)

}

export default SearchInput;
