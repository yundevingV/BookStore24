import React,{useEffect, useState} from "react";

import axios from "axios";
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { getCookie, setCookie } from "../../components/common/Cookie";
import { RootState } from "../../reducer";
import { useSelector } from "react-redux";
import Header from "../../components/common/Header";


export default function Kakao(){

    const navigate = useNavigate();

    const redirectUrl = sessionStorage.getItem('url')?.split("/")[1]

    useEffect(() => {
        const code : string | null = new URL(window.location.href).searchParams.get("code");

        axios.post(
            `http://bookstore24.shop/auth/kakao/callback?Authorization_code=${code}`,
        )
        .then(response => {

            // 상태코드
            console.log(response.status)

            // 토큰 획득
            const token = response.headers.authorization 
            // 토큰 저장
            sessionStorage.setItem('token',token);
            
            if(redirectUrl){
                navigate(`./${redirectUrl}`);
            } else{
                navigate('./')
            }
            

        })
        
        .catch(error => {
        console.error('Error:', error);

        console.log(`에러 사유 : ${error.response.data}`)
        console.log(`에러 토큰 : ${error.response.headers.authorization}`);

        });

    }, []);

    return(
        <>
            카카오
        </>
    )
}

