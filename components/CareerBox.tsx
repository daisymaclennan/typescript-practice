import React from "react";
import styled from "styled-components";

interface CareerBoxProps {
  className?: string;
  career: Object;
}

const CareerBox = ({ className, career } : CareerBoxProps) => {
  //I've created this component as a concept, I didn't want to push this over the weekend
  return <div className={className}></div>;
};

const StyledCareerBox = styled(CareerBox)``;

export default StyledCareerBox;
