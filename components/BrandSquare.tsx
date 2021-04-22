import React from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";

interface BrandSquareProps {
  className?: string;
  img: ImgFields;
  scrollY: number;
}

interface ImgFields {
  url: string;
  alt: string;
}

const BrandSquare = ({ className, img, scrollY } : BrandSquareProps) => {
  const [{ springscrollY }, springsetScrollY] = useSpring(() => ({
    springscrollY: 0,
  }));

  const parallaxLevel = 2;
  springsetScrollY({ springscrollY: scrollY });

  const interpSquare = springscrollY.interpolate(
    (o : any) => `translateX(${o / parallaxLevel}px)`
  );

  return (
    <animated.div className={className} key={img.url}>
      <img src={img.url} alt={img.alt} />
    </animated.div>
  );
};

const StyledBrandSquare = styled(BrandSquare)`
  background-color: black;
  height: 250px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
  }

  @media screen and (max-width: 800px) {
    height: 200px;
    width: 200px;
  }
`;

export default StyledBrandSquare;
