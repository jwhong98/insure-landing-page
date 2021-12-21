import React from "react";
import Logo from "../Logo";
import {
  FooterContainer,
  FooterHead,
  SocialMenu,
  SocialItem,
  SocialIcon,
  FooterBody,
  FooterSection,
  SectionLabel,
  SectionMenu,
  MenuItem,
} from "./FooterElements";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import instagram from "../../images/icon-instagram.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterHead>
        <Logo />
        <SocialMenu>
          <SocialItem>
            <SocialIcon src={facebook} />
          </SocialItem>
          <SocialItem>
            <SocialIcon src={twitter} />
          </SocialItem>
          <SocialItem>
            <SocialIcon src={pinterest} />
          </SocialItem>
          <SocialItem>
            <SocialIcon src={instagram} />
          </SocialItem>
        </SocialMenu>
      </FooterHead>
      <FooterBody>
        <FooterSection>
          <SectionLabel>our company</SectionLabel>
          <SectionMenu>
            <MenuItem>how we work</MenuItem>
            <MenuItem>why insure?</MenuItem>
            <MenuItem>check price</MenuItem>
            <MenuItem>reviews</MenuItem>
          </SectionMenu>
        </FooterSection>
        <FooterSection>
          <SectionLabel>help me</SectionLabel>
          <SectionMenu>
            <MenuItem>faq</MenuItem>
            <MenuItem>terms of use</MenuItem>
            <MenuItem>privacy policy</MenuItem>
            <MenuItem>cookies</MenuItem>
          </SectionMenu>
        </FooterSection>
        <FooterSection>
          <SectionLabel>contact</SectionLabel>
          <SectionMenu>
            <MenuItem>sales</MenuItem>
            <MenuItem>support</MenuItem>
            <MenuItem>live chat</MenuItem>
          </SectionMenu>
        </FooterSection>
        <FooterSection>
          <SectionLabel>others</SectionLabel>
          <SectionMenu>
            <MenuItem>careers</MenuItem>
            <MenuItem>press</MenuItem>
            <MenuItem>licenses</MenuItem>
          </SectionMenu>
        </FooterSection>
      </FooterBody>
    </FooterContainer>
  );
};

export default Footer;
