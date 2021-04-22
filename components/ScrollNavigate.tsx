import React from "react"
import styled from "styled-components"

interface ScrollNavigateProps {
  className?: string;
}

const ScrollNavigate = ({ className } : ScrollNavigateProps) => (
  <div className={ className }>
    <span className="line-text">
      <hr/>
      Scroll <br />
    </span>
    <span>
      to navigate
    </span>
  </div>
)

const StyledScrollNavigate = styled(ScrollNavigate)`
  position: fixed;
  left: 30px;
  bottom: 100px;
  z-index: 1;
  transform: rotate(90deg);
  transform-origin: 0;

  .line-text{
    display: flex;
    align-items: center;

    hr{
      width: 30px;
    }
  }

  span{
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    font-weight: 400;
  }

  @media screen and (max-width: 800px){
    left: 20px;
  bottom: 80px;
  }
`

export default StyledScrollNavigate
