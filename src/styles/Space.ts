import { styled } from "styled-components";

interface HeightProps {
    height: number; 
} 

export const Space = styled.div<HeightProps>`

height : ${props => props.height}px;

`

