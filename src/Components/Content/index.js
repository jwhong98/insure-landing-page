import React from "react";
import {
  ContentContainer,
  ContentImg,
  ContentTitle,
  ContentDescription,
} from "./ContentElements";

const Content = (props) => {
  return (
    <ContentContainer>
      <ContentImg src={props.img} />
      <ContentTitle>{props.title}</ContentTitle>
      <ContentDescription>{props.description}</ContentDescription>
    </ContentContainer>
  );
};

export default Content;
