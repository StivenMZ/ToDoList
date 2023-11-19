import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  html {
    font-size: 16px;
    width: 100%;
    max-width: 100%;
  }
 body{
    max-width: 100%;
    width: 100%;
    min-height: 100%;
    font-family: 'Josefin Sans', sans-serif;
    background-color: ${({ theme }) => theme.backgroundBody};
    position: relative;

    
    
 }
::-webkit-scrollbar {
  background-color: #A5FEF2;
  border-radius: 2rem;
  width: 0.4rem;
}

::-webkit-scrollbar-thumb {
  background-color: #17B7DA;
  border-radius: 2rem;
}

::-webkit-scrollbar {
  border-top:0.2rem solid #17B7DA;
  border-bottom: 0.2rem solid #17B7DA;
}

::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 0.3rem rgba(0, 0, 0, 0.3);
}




 
 @media screen and (max-width: 4001px) {
  html{
    font-size: 32px;
  }
 }


 @media screen and (max-width: 3000px) {
  html{
    font-size: 26px;
  }
 }


 @media screen and (max-width: 2500px) {
  html{
    font-size: 22px;
  }
 }


 @media screen and (max-width: 2100px) {
  html{
    font-size: 20px;
  }
 }


 @media screen and (max-width: 1840px) {
  html{
    font-size: 18px;
  }
 }


 @media screen and (max-width: 1640px) {
  html{
    font-size: 17px;
  }
 }


 @media screen and (max-width: 1440px) {
  html{
    font-size: 16px;
  }
 }

 @media screen and (max-width: 1265px) {
  html{
    font-size: 15px;
  }
 }



 @media screen and (max-width: 1199px) {
  html{
    font-size: 15px;
  }
 }






 @media screen and (max-width: 1171px) {
  html{
    font-size: 13px;
  }
 }



 @media screen and (max-width: 963px) {
  html{
    font-size: 13px;
  }
 }




 
 @media screen and (max-width: 767px) {
  html{
    font-size: 12px;
  }
 }


 @media screen and (max-width: 730px) {
  html{
    font-size: 11px;
  }
 }


 @media screen and (max-width: 500px) {
  html{
    font-size: 11px;
  }
 }




 
 @media screen and (max-width: 450px) {
  html{
    font-size: 10px;
  }
 }



 @media screen and (max-width: 330px) {
  html{
    font-size: 8px;
  }
 }



 


 @media screen and (max-width: 300px) {
  html{
    font-size: 7px;
  }
 }

 @media screen and (max-width: 270px) {
  html{
    font-size: 6px;
  }
 }

 @media screen and (max-width: 229px) {
  html{
    font-size: 5px;
  }
 }

 
 @media screen and (max-width: 190px) {
  html{
    font-size: 4px;
  }
 }

 @media screen and (max-width: 142px) {
  html{
    font-size: 3px;
  }
 }

 @media screen and (max-width: 110px) {
  html{
    font-size: 2px;
  }
 }

 @media screen and (max-width: 1199px) {
    body {
      overflow-y: hidden;
    }
  }

`;

export default Global;
