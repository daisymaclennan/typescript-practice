import React from "react";
import styled from "styled-components";

interface ArrowLinkProps {
  className?: string;
  linkUrl: string;
  linkText: string;
}

const ArrowLink = ({ className, linkUrl, linkText } : ArrowLinkProps) => (
  <a className={`${className} link`} href={linkUrl}>
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="long-arrow-alt-right"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        fill="currentColor"
        d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"
      ></path>
    </svg>
    {linkText}
  </a>
);

const StyledArrowLink = styled(ArrowLink)`
  text-transform: uppercase;
  color: black;
  letter-spacing: 0.3em;
  text-decoration: none;
  font-size: 12px;
  position: relative;
  padding-left: 30px;

  svg {
    height: 14px;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

export default StyledArrowLink;
