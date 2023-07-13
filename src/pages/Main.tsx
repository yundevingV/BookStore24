import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel"

import { styled } from "styled-components";
import { Link } from 'react-router-dom';


export default function Main(){
    
    return(
        <Wrapper>
            <Header />
            <Carousel />
        </Wrapper>  
    )
}

const Wrapper = styled.div`
    
`