import React from "react";
import Button from "../Button";
import Content from "../Content";
import {
  AboutContainer,
  AboutHead,
  AboutMore,
  MoreTitle,
} from "./AboutElements";
import data from "./data.json";

const About = () => {
  const createContent = (info) => {
    return (
      <Content
        key={info.id}
        img={info.img}
        title={info.heading}
        description={info.description}
      />
    );
  };
  return (
    <AboutContainer>
      <AboutHead>We're different</AboutHead>
      {data.map(createContent)}
      <AboutMore>
        <MoreTitle>Find out more about how we work</MoreTitle>
        <Button label="how we work" />
      </AboutMore>
    </AboutContainer>
  );
};

export default About;
