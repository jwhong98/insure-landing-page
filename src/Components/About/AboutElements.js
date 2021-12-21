import styled from "styled-components";
import img from "../../images/bg-pattern-how-we-work-mobile.svg";

export const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export const AboutHead = styled.h1`
  font-family: "DM Serif Display", serif;
  font-weight: 400;
  font-size: 3rem;
  color: hsl(270, 9%, 17%);
`;

export const AboutMore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: hsl(256, 26%, 20%);
  margin-top: 100px;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: right;
  margin-bottom: 100px;
`;
export const MoreTitle = styled.h1`
  text-align: center;
  font-family: "DM Serif Display", serif;
  font-weight: 400;
  color: #fff;
  line-height: 1.25;
  margin-bottom: 30px;
`;
