import React, { useEffect, useContext, useState } from "react";
import styled, { keyframes } from "styled-components";
import Swal from "sweetalert2";


import "./icon.css"


const Notification = ({ mensaje, type }) => {

/* 
error
success
info
*/


let realType = {type: type, color: ""}

const colorFunct = () => {
  if(type === "error"){
    realType.color = "#FF4B3A"
  }
  if(type ==="info"){
    realType.type = "success"
    realType.color ="#01ABD8"
  }
  if(type === "success"){
    realType.color = "#A2DC4A"
  }
  if(type === "success error"){
    realType.type = "success"
    realType.color = "#FF4B3A"
  }
}

colorFunct();


  useEffect(() => {
    showAlerta();
  }, []);
 
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
      background: "#DEF7F5",
      color: realType.color,
     
    })
    
  };

;



  return null;
};

export default Notification;
