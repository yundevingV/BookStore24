import React,{useState, useEffect} from "react";

import axios from "axios";
import {useNavigate} from 'react-router-dom';
import {  getCookie, setCookie } from "../../components/common/Cookie";

export default function Google(){

    const navigate = useNavigate();
    const redirectUrl = getCookie('redirectUrl');

    useEffect(() => {
        const code : string | null = new URL(window.location.href).searchParams.get("code");

        axios.post(
            `http://bookstore24.shop/auth/google/callback?Authorization_code=${code}`,
        )
        .then(response => {
            console.log(response.status)
            // 토큰 획득
            const token = response.headers.authorization 

            setCookie('jwt',token)
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

        </>
    )
}