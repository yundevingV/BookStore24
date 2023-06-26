import React from "react";
import Header from "../components/Header";

import { styled } from "styled-components";
import { Link } from 'react-router-dom';


export default function Main(){
    return(
        <Wrapper>
            <Header />
            <Link to='/login' >login </Link>
            <Link to='/join' > join </Link>
            <Link to='/profile' > profile </Link>
        </Wrapper>  
    )
}

const Wrapper = styled.div`
    
`