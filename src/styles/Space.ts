import { styled } from "styled-components";

interface HeightProps {
    width : number;
    height: number; 
    
} 

export const Space = styled.div<HeightProps>`

width : ${props => props.width}px;
height : ${props => props.height}px;

`

