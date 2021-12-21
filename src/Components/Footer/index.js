import React from "react";
import {
  FooterContainer,
  FooterHead,
  FooterLogo,
  SocialMenu,
  SocialItem,
  SocialIcon,
  FooterBody,
  FooterSection,
  SectionLabel,
  SectionMenu,
  MenuItem,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterHead>
        <FooterLogo></FooterLogo>
        <SocialMenu>
          <SocialItem>
            <SocialIcon />
          </SocialItem>
          <SocialItem>
            <SocialIcon />
          </SocialItem>
          <SocialItem>
            <SocialIcon />
          </SocialItem>
          <SocialItem>
            <SocialIcon />
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
