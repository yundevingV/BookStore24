import React,{useState} from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel"
import MainRankingView from "../components/MainRankingView";
import MainRankingRating from "../components/MainRankingRating";
import FirstLogin from "../modal/FirstLogin";

import { styled } from "styled-components";
import { Space } from "../styles/Space";
import { getCookie } from "../components/Cookie";
import base64 from 'base-64';
import { RootState } from "../reducer/index";
import { useSelector} from "react-redux";


export default function Main(){

    //모달 펼치기
    const [viewModal , setViewModal] = useState(false);

    const closeModalData = useSelector(
        (state: RootState) => state.closeModal.closeModalData
    );
    // 토큰해독
    let token = getCookie('jwt')
    let payload = token.substring(token.indexOf('.')+1,token.lastIndexOf('.')); 
    let dec = JSON.parse(base64.decode(payload));

    console.log(dec);



    return(
        <Wrapper>
            <Header />
            <Carousel />
            <Space width={0} height={100} />
            <MainRankingView />
            <Space width={0} height={200} />
            <MainRankingRating />

            {closeModalData&&dec.nickName===null&&
            <FirstLogin viewModal={viewModal} setViewModal={setViewModal}/>}

        </Wrapper>  
    )
}

const Wrapper = styled.div`
    height  : fit-content;

    margin-bottom : 500px;
`