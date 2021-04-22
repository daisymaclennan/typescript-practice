import React from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";

interface BackgroundWordsProps {
  className?: string;
  words: string;
  scrollY: number;
}

const BackgroundWords = ({ className, words, scrollY } : BackgroundWordsProps) => {
  const [{ springscrollY }, springsetScrollY] = useSpring(() => ({
    springscrollY: 0,
  }));

  springsetScrollY({ springscrollY: scrollY });

  const interpOne = springscrollY.interpolate((o) => `translateX(-${o}px)`);
  const interpTwo = springscrollY.interpolate((o) => `translateX(${o}px)`);

  const wordsArr = words.split(" ");
  return (
    <div className={className}>
      <animated.div style={{ transform: interpOne }}>
        {wordsArr[0]}
      </animated.div>
      <animated.div className="second-word" style={{ transform: interpTwo }}>
        {wordsArr[1]}
      </animated.div>
    </div>
  );
};

const StyledBackgroundWords = styled(BackgroundWords)`
  position: absolute;
  transform: rotate(90deg);
  right: -20vw;
  top: 50vh;
  div {
    font-size: 200px;
    font-weight: 600;
    opacity: 0.3;
  }

  div:last-of-type {
    margin-left: 30vh;
  }

  @media screen and (max-width: 800px) {
    position: static;
    transform: rotate(0deg);

    div {
      font-size: 100px;
    }

    div:last-of-type {
      margin-left: 0;
    }
  }

  @media screen and (max-width: 1500px) {
    right: -35vw;
  }

  @media screen and (max-width: 1050px) {
    right: -50vw;
  }
`;

export default StyledBackgroundWords;
