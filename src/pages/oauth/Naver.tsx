import React,{useEffect,useState} from "react";
import FirstLogin from "../../modal/FirstLogin";

import axios from "axios";
import { getCookie, setCookie } from "../../components/common/Cookie";
import base64 from 'base-64';
import {useNavigate} from 'react-router-dom';


export default function Naver(){


    const navigate = useNavigate();
    const redirectUrl = getCookie('redirectUrl');

    useEffect(() => {

        const code : string | null = new URL(window.location.href).searchParams.get("code");

        axios.post(
            `http://bookstore24.shop/auth/naver/callback?Authorization_code=${code}`,
        )
        .then(response => {

            // 토큰 획득
            const token = response.headers.authorization 
            
            setCookie('jwt', token);   
            sessionStorage.setItem('status',token);

            if(getCookie('redirectUrl')==='/login' ){
                navigate('/')
            } else {
                navigate(`${redirectUrl}`)
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