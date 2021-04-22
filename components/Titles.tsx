import React from "react";
import styled from "styled-components";

interface TitlesProps {
  className?: string;
  mainTitle: string;
  subtitle: string;
  xl?: boolean;
}

const Titles = ({ className, mainTitle, subtitle, xl } : TitlesProps) => (
  <div className={`${className} titles`}>
    <h2 dangerouslySetInnerHTML={ {__html: mainTitle} } />
    <h3>{subtitle}</h3>
  </div>
);

const StyledTitles = styled(Titles)`
  margin-bottom: 100px;
  h2 {
    font-size: 42px;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  h3 {
    font-weight: 400;
    margin-top: 0;
    font-size: 20px;
  }
  ${props => props.xl && `
  h2{
    font-size: 100px;
    white-space: nowrap;
  }
  `}
`;

export default StyledTitles;
