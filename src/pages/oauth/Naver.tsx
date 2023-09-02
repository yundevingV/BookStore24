import React,{useEffect,useState} from "react";
import FirstLogin from "../../modal/FirstLogin";

import axios from "axios";
import { getCookie, setCookie } from "../../components/common/Cookie";
import base64 from 'base-64';
import {useNavigate} from 'react-router-dom';


export default function Naver(){


    const navigate = useNavigate();
    const redirectUrl = sessionStorage.getItem('url')?.split("/")[1]

    useEffect(() => {

        const code : string | null = new URL(window.location.href).searchParams.get("code");

        axios.post(
            `http://bookstore24.shop/auth/naver/callback?Authorization_code=${code}`,
        )
        .then(response => {

            // 토큰 획득
            const token = response.headers.authorization 
            
            sessionStorage.setItem('token',token);

            if(redirectUrl){
                navigate(`./${redirectUrl}`);
            } else{
                navigate('./')
            }
        })
        .catch(error => {
        console.log(`에러 사유 : ${error.response.data}`)
        console.log(`에러 토큰 : ${error.response.headers.authorization}`);
        

        });

    }, []);
    
    return(
        <>
            네이버
        </>
    )
    
}