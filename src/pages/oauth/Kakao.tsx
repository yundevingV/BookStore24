import React,{useEffect, useState} from "react";

import axios from "axios";
import {Link, useNavigate} from 'react-router-dom';
import { getCookie, setCookie } from "../../components/common/Cookie";


export default function Kakao(){

    const navigate = useNavigate();
    const redirectUrl = getCookie('redirectUrl');


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
            // 토큰 쿠키 저장
            setCookie('jwt', token,1000);
            sessionStorage.setItem('token',token);

            navigate(-2)

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

