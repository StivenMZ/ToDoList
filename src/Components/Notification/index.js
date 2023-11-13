import React, { useEffect, useContext, useState } from "react";
import styled, { keyframes } from "styled-components";
import Swal from "sweetalert2";
import { TareasGlobal } from "../../App";



import "./icon.css"




const Notification = ({ mensaje, type }) => {

  const {esTemaOscuro} = useContext(TareasGlobal);

const objDark = {

  info: '#58DCD9',
  success: '#6FDE6C',
  error: '#C55C51',
  background: "#062273"

}

const objLight = {
  error: "#FF4B3A",
  info: "#01ABD8",
  success: "#A2DC4A",
  background: "#DEF7F5"

}


let realType = {type: type, color: ""}

const colorFunct = () => {
  if(type === "error"){
    realType.color = esTemaOscuro ? objDark.error : objLight.error;
  }
  if(type ==="info"){
    realType.type = "success"
    realType.color =esTemaOscuro ? objDark.info : objLight.info;
  }
  if(type === "success"){
    realType.color = esTemaOscuro ? objDark.success : objLight.success;
  }
  if(type === "success error"){
    realType.type = "success"
    realType.color = esTemaOscuro ? objDark.error : objLight.error;
  }
}

colorFunct();


  useEffect(() => {
    showAlerta();
  }, [ ]);
 
  const showAlerta = () => {

    Swal.fire({
      position: 'top-end',
      icon: realType.type,
      title: mensaje,
      showConfirmButton: false,
      width: "27%",
      timer: 4500,
      iconColor: realType.color,
      customClass: {
        popup: "swal2-popup",
        container: "container"
      },
      backdrop: false,
      padding: "0.4%",
      background:  esTemaOscuro ? objDark.background : objLight.background,
      color: realType.color,
     
    })
    
  };

;



  return null;
};

export default Notification;
