import React from "react"
import styled from "styled-components"

interface NavMenuItemProps {
  className?: string;
  title: string;
  number: number;
  page: number;
  setPage: React.SetStateAction<any>;
}

const NavMenuItem = ({ className, title, number, page, setPage } : NavMenuItemProps) => {
  const newNum = number - 1;
  var scrollTo : number;
  
  if (typeof window !== "undefined") {
    scrollTo = window.innerWidth * newNum;
  }
  return(
  <div 
    className={className} 
    onClick={() => {
      window.scroll({
        top: scrollTo,
        left: 0,
        behavior: 'smooth'
      });
      setPage(number);
      console.log(page);
    }}
    css={page === number ? `opacity: 1; border-bottom: 1px solid black;` : `opacity: 0.6;`}
  >
    <h4>{title}</h4>
    <span>{number}</span>
  </div>
  )
}

const StyledNavMenuItem = styled(NavMenuItem)`
display: flex;
align-items: center;
margin-left: calc(calc(100vw - 423px) /4);
cursor: pointer;

h4, span{
  font-weight: 400;
}

h4{
  font-size: 12px;
  letter-spacing: 0.03em;
  color: black;
  width: 60px;
  text-transform: uppercase;
}

span{
  font-size: 36px;
  margin-left: 10px;
}
`

export default StyledNavMenuItem
