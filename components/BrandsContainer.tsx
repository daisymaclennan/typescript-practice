import styled from "styled-components";

const BrandsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  left: 10vw;
  height: calc(100vh - 200px);
  margin-top: 100px;
  margin-bottom: 100px;

  div:first-of-type {
    margin-left: 20vw;
    z-index: -1;
  }

  @media screen and (max-width: 800px) {
    flex-direction: row;
    left: 0px;
    height: auto;
    margin-top: 0;
    width: calc(100vw - 90px);

    margin-left: 45px;
    margin-right: 45px;

    div:first-of-type {
      margin-left: 0;
      margin-top: 40px;
    }

    div:last-of-type {
      margin-top: -450px;
    }
  }
`;

export default BrandsContainer;
