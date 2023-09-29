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
  border-bottom : 1px solid #000000;
  text-decoration: none;
  cursor: pointer;    
  font-size : 17px;

`
export const StyledButtonLink = styled(Link)`
  color:  #000000;

  text-decoration: none;
  cursor: pointer;    

  font-size : 17px;

  
`
// 프로필 목록 링크
export const PLink = styled(Link)`
text-decoration : none;
color : #000;
`