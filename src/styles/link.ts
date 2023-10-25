import { styled } from "styled-components";
import {Link} from "react-router-dom"

export const StyledLink = styled(Link)`
  color:  #000;

  text-decoration: none;
  cursor: pointer;    

  font-size : 17px;  
`


export const StyledLinkBlack = styled(Link)`
  color:  #000000;

  text-decoration: none;
  cursor: pointer;   
  font-size : 17px;


`

export const CurrentLink = styled(Link)`
  color:  #000000;
  border-bottom : 3px solid #4dac27;
  text-decoration: none;
  cursor: pointer;    
  font-size : 17px;
  font-weight : 900;

`
export const StyledButtonLink = styled(Link)`


border-radius : 8px;

font-size : 15px;
font-family: tway, sans-serif, Arial;


text-decoration : none;

  
`
// 프로필 목록 링크
export const PLink = styled(Link)`
text-decoration : none;
color : #000;
`