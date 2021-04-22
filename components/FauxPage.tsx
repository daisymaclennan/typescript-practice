import React from "react";
import styled from "styled-components";

interface FauxPageProps {
  className?: string;
  children: React.ReactNode;
}

const FauxPage = ({ className, children } : FauxPageProps) => (
  <div className={className}>{children}</div>
);

const StyledFauxPage = styled(FauxPage)`
  position: relative;
  width: 100vw;

  @media screen and (max-width: 800px) {
    height: 100vh;
  }
`;

export default StyledFauxPage;
