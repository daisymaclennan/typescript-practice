import React from "react";
import styled from "styled-components";

interface ContentSectionProps {
  className?: string;
  children: React.ReactNode;
  alignment?: string;
}

const ContentSection = ({ className, children, alignment } : ContentSectionProps) => {
  const rightStyles = `
  @media screen and (min-width: 800px){
    right: 200px;

    .content-head{
        justify-content: flex-end;
    }

    .titles{
        text-align: right;
    }

    .link{
        float: right;
    }
  }

  @media screen and (max-width: 1300px) {
      right: 100px;
    }
    
    `;

  const leftStyles = `
left: 200px;
    

    @media screen and (max-width: 1300px) {
      left: 100px;
    }
    `;
  return (
    <div
      className={className}
      css={`
        ${alignment === "right" ? rightStyles : leftStyles}
      `}
    >
      {children}
    </div>
  );
};

const StyledContentSection = styled(ContentSection)`
  position: absolute;
  top: 35vh;
  height: 50vh;
  width: 40vw;
  z-index: 1;
  max-width: 400px;

  @media screen and (max-width: 800px) {
    position: static;
    height: auto;
    margin-top: 150px;
    margin-left: 45px;
    margin-bottom: 100px;
    width: calc(100vw - 90px);
  }
`;

export default StyledContentSection;
