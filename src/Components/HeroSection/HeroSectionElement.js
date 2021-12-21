import styled from "styled-components";
import img from "../../images/bg-pattern-intro-left-mobile.svg";
import img2 from "../../images/bg-pattern-intro-right-mobile.svg";

export const HeroSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeroImg = styled.img`
  width: 100%;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
  background-color: hsl(256, 26%, 20%);
  margin: 0;
  padding: 30px;
  background-image: url(${img}), url(${img2});
  background-repeat: no-repeat;
  background-position: left top, right bottom -200px;
`;

export const HeroHead = styled.h1`
  text-align: center;
  color: #fff;
  font-family: "DM Serif Display", serif;
  font-weight: 400;
  font-size: 2.75rem;
  line-height: 1;
  margin-bottom: 20px;
`;

export const HeroDescription = styled.p`
  text-align: center;
  color: #fff;
  font-family: "Karla", sans-serif;
  font-weight: 400;
  line-height: 1.75;
  margin-bottom: 30px;
`;
