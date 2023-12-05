import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

interface HeaderLinkProps {
  url: string;
  label: string;
}

const StyledLink = styled(Link)<{ isActive: boolean }>`
  width: 100%;
  height: 50px;
  font-weight: ${props => (props.isActive ? '900' : 'normal')};
  border-bottom : ${props => (props.isActive ? '3px solid #4dac27' : '0px')};

  /* 링크 보라색, 밑줄제거 */
  text-decoration: none;
  color: black;

  display: flex;
  align-items: center;
  justify-content: center;
  
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%; 

  }
`;

const HeaderLink = ({ url, label }: HeaderLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname.includes(url);

  return (
    <StyledLink to={`/${url}`} isActive={isActive}>
      <span>{label}</span>
    </StyledLink>
  );
};

export default HeaderLink;