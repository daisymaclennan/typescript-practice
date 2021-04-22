import React from "react";
import styled from "styled-components";

interface ContentHeadProps {
  className?: string;
  number: number;
  smallTitle: string;
}

const ContentHead = ({ className, number, smallTitle } : ContentHeadProps) => (
  <div className={`${className} content-head`}>
    <span>
      <span>{number}</span>
      <hr />
      <span>0{parseInt(number) + 1}</span>
    </span>
    <h6>{smallTitle}</h6>
  </div>
);

const StyledContentHead = styled(ContentHead)`
  display: flex;

  > span {
    display: flex;
    width: 100px;
    justify-content: space-between;

    &:first-of-type {
      font-weight: 600;
    }

    hr {
      width: 50px;
    }
  }

  h6,
  span {
    margin: 0;
    font-weight: 400;
    font-size: 14px;
  }

  h6 {
    margin-left: 10px;
  }
`;

export default StyledContentHead;
