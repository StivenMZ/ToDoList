import React from "react";
import styled, { keyframes } from "styled-components";

import waiting from '../../img/waiting.svg';

const loadingAnim = keyframes`
0%{
    transform: rotate(0deg);
}

100%{
    transform: rotate(360deg);
}

`;


const DivLoading = styled.div`
margin-top: 1%;
width: 100%;
height: 50%;
display: flex;
justify-content: center;



`

const ImgLoading = styled.img`
width: 40%;
height: 40%;
animation: ${loadingAnim} 1s linear infinite;

@media screen and (max-width: 1199px) {
 width: 30%;
 height: 30%;
}

@media screen and (max-width: 768px) {
 width: 25%;
 height: 25%;
}




`;


const Loading = () => {
    return (
        <DivLoading>
            <ImgLoading src={waiting}></ImgLoading>
        </DivLoading>
    )
}

export default Loading;