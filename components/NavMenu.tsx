import styled from "styled-components";

const NavMenu = styled.div`
  position: fixed;
  bottom: 0px;
  right: 80px;

  display: flex;
  z-index: 2;

  @media screen and (max-width: 800px) {
    display: none;
    > * {
      display: none;
    }
  }
`;

export default NavMenu;
