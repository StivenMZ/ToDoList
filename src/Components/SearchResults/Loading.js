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
`;


const Loading = () => {
    return (
        <DivLoading>
            <ImgLoading src={waiting}></ImgLoading>
        </DivLoading>
    )
}

export default Loading;