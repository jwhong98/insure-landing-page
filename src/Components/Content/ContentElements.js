import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

export const ContentImg = styled.img`
  margin-bottom: 30px;
`;

export const ContentTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 1.75rem;
  font-family: "DM Serif Display", serif;
  font-weight: 400;
`;

export const ContentDescription = styled.p`
  text-align: center;
  font-size: 1rem;
  font-family: "Karla", sans-serif;
  line-height: 1.5;
  color: hsl(273, 4%, 51%);
`;
