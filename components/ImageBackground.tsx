import React  from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";

interface ImageBackgroundProps {
  className?: string;
  src: string;
  alt: string;
  scrollY: number;
}

const ImageBackground = ({ className, src, alt, scrollY } : ImageBackgroundProps) => {
  const [{ springscrollY }, springsetScrollY] = useSpring(() => ({
    springscrollY: 0,
  }));

  const parallaxLevel = 1.7;
  springsetScrollY({ springscrollY: scrollY });

  const interpSquare = springscrollY.interpolate(
    (o: any) => `translateX(${o / parallaxLevel}px) scaleX(-1)`
  );
  return (
    <animated.img
      className={className}
      src={src}
      alt={alt}
      style={{ transform: interpSquare }}
    />
  );
};

const StyledImageBackground = styled(ImageBackground)`
  height: 100vh;
  transform: scaleX(-1);
  position: absolute;
  top: 0;
  right: 0px;
  object-fit: cover;

  @media screen and (max-width: 1500px) {
    right: -200px;
  }

  @media screen and (max-width: 1200px) {
    right: -300px;
  }

  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

export default StyledImageBackground;
