import styled from "styled-components";
import img from "../../images/bg-pattern-footer-mobile.svg";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: hsl(0, 0%, 98%);
  padding: 20px;
  background-image: url(${img});
  background-repeat: no-repeat;
`;

export const FooterHead = styled.div`
  margin-top: 50px;
  padding: 20px;
  border-bottom: 1px solid hsl(216, 30%, 68%);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SocialMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const SocialItem = styled.li``;

export const SocialIcon = styled.img``;

export const FooterBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Karla", sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 70px;
`;

export const FooterSection = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionLabel = styled.p`
  margin-bottom: 20px;
  color: hsl(273, 4%, 51%);
`;

export const SectionMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const MenuItem = styled.li`
  color: hsl(270, 9%, 17%);
`;
