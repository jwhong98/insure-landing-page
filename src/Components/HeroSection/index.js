import React from "react";
import img from "../../images/image-intro-mobile.jpg";
import Button from "../Button";
import {
  HeroSectionContainer,
  HeroImg,
  HeroContent,
  HeroHead,
  HeroDescription,
} from "./HeroSectionElement";

const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <HeroImg src={img} />
      <HeroContent>
        <HeroHead>Humanizing your insurance.</HeroHead>
        <HeroDescription>
          Get your life insurance coverage easier and faster. We blend out
          expertise and technology to help you find the plant that's right for
          you. Ensure you and your loved ones are protected.
        </HeroDescription>
        <Button label="view plans" />
      </HeroContent>
    </HeroSectionContainer>
  );
};

export default HeroSection;
