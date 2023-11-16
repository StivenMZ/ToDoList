import React, { useContext, useEffect, useState } from "react";
import { useNavigationType } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const ArticleElement = styled.article`
  width: 100%;
  border: 1px solid;
  display: flex;
  padding: 2%;
  border: none;
  border-bottom: 1px;
  opacity: 0.86;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 1199px) {
 padding: 3%;
}

`;

const DivDate = styled.div`
  width: 20%;
  max-width: 20%;
  padding: 0.7%;
  background-color: #a5fef2;
  border-radius: 2rem 0 0rem 2rem;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1199px) {
 width: 29%;
 max-width: 29%;
}

`;

const SpanDate = styled.span`
  color: #3a4cb7;
  font-size: 1.2rem;

  @media screen and (max-width: 1199px) {
 font-size :1.4rem ;
}

`;

const PText = styled.p`
  font-weight: bold;
  color: ${({ back, theme }) =>
    back === "create"
      ? theme.articleTextInfo
      : back === "completed"
      ? theme.articleTextCompleted
      : back === "delete"
      ? theme.articleTextDeleted
      : ""};
  font-size: 1.4rem;
  word-wrap: break-word;

  @media screen and (max-width: 1199px) {
 font-size :1.6rem ;
}
`;

const DivText = styled.div`
  background-color: ${({ back, theme }) =>
    back === "create"
      ? theme.infoColor
      : back === "completed"
      ? theme.successColor
      : back === "delete"
      ? theme.errorColor
      : ""};
  width: 60%;
  max-width: 60%;
  border-radius: 1rem /* 2rem 2rem 0.5rem */;
  padding: 3%;

  @media screen and (max-width: 1199px) {
 width: 57%
}

`;

/* 
articleTextCompleted
articleTextDeleted
articleTextInfo
*/

const ElementHistory = ({ date, title, type }) => {
  let newText = date.replace(/-/g, "/");

  const [text, setText] = useState("");

  useEffect(() => {
    if (type === "create") {
      setText(`Creaste la tarea ${title}`);
    }
    if (type === "completed") {
      setText(`Completaste la tarea ${title}`);
    }
    if (type === "delete") {
      setText(`Eliminiaste la tarea ${title}`);
    }
  }, []);

  return (
    <>
      <ArticleElement back={type}>
        <DivDate>
          <SpanDate back={type}>{newText}</SpanDate>
        </DivDate>
        <DivText back={type}>
          <PText back={type}>{text}</PText>
        </DivText>
      </ArticleElement>
    </>
  );
};

export default ElementHistory;
