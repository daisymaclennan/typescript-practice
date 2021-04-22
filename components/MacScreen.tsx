import React from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring";

interface MacScreenProps {
  className?: string;
  screenshot: string;
}

const MacScreen = ({ className, screenshot } : MacScreenProps) => {
  return(
    <div className={className}>
        <animated.div>
            <img src="/img/mac.png" />
            <img src={screenshot} />
        </animated.div>
        
    </div>
  )
}

const StyledMacScreen = styled(MacScreen)`
    width: 55%;
    position: absolute;
    left: 5%;
    bottom: 0;
    height: 100%;
    > div{
        width: 100%;
        position: absolute;
        height:80%;
        bottom: 10px;
        aspect-ratio: 260 / 240;

        img{
            position: absolute;
            width: 100%;
            &:first-of-type{
              top: 0;
            }
            &:last-of-type{
                top: 0;
                padding:4%;
                width: 92%;

                aspect-ratio: 847 / 475;
            }
        }
    }

    @media screen and (max-width: 800px){
      width: calc(100vw - 80px);
      left: 40px;
    }
    
`;

export default StyledMacScreen
