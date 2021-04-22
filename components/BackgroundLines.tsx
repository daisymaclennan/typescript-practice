import styled from "styled-components";

const BackgroundLines = styled.div`
  position: fixed;
  width: calc(100vw - 120px);
  top: 0;
  left: 60px;
  right: 60px;
  height: 100vh;
  background: repeating-linear-gradient(
    to right,
    #d3d3d3 0px,
    #d3d3d3 1px,
    rgba(0, 0, 0, 0) 1px,
    rgba(0, 0, 0, 0) calc(1px + calc(calc(100vw - 84px) / 4)),
    #d3d3d3 calc(1px + calc(calc(100vw - 84px) / 4))
  );
  pointer-events: none;
  border-right: 1px solid #d3d3d3;
  z-index: 1;

  @media screen and (max-width: 800px) {
    width: calc(100vw - 80px);
    left: 40px;
    right: 40px;
  }
`;

export default BackgroundLines;
