import React from "react";
import styled from "styled-components";
import SocialIcons from "./SocialIcons";

interface RightSidebarProps {
  className?: string;
}

const RightSidebar = ({ className } : RightSidebarProps) => (
  <div className={className}>
    <span><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" className="svg-inline--fa fa-map-marker-alt fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>Derby, UK</span>
    <h4>Hi, I'm daisy</h4>
    <div></div>
    <SocialIcons />
  </div>
);

const StyledRightSidebar = styled(RightSidebar)`
  position: fixed;
  top: 20px;
  right: 0;
  height: calc(100vh - 40px);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
  z-index: 1;

  span {
    margin-right: 19px;
    font-weight: 600;

    svg{
      height: 15px;
      margin-right: 8px;
      margin-bottom: -2px;
    }
  }

  h4 {
    margin-right: -25px;  
    transform: rotate(90deg);
    font-weight: 400;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 0.3em;
  }

  div {
    height: 12px;
  }

  @media screen and (max-width: 800px) {
    span {
      margin-right: 9px;
    }
    h4 {
      margin-right: -38px;
    }
  }
`;

export default StyledRightSidebar;
