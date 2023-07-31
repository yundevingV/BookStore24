import React,{useEffect} from "react";

import axios from "axios";
import {useNavigate} from 'react-router-dom';
import { setCookie } from "../../components/Cookie";
import base64 from 'base-64';

export default function Naver(){

    const code : string | null = new URL(window.location.href).searchParams.get("code");

    useEffect(() => {

        axios.post(
            `http://61.79.215.100/auth/naver/callback?Authorization_code=${code}`,
        )
        .then(response => {
            // 토큰 획득
            const token = response.headers.authorization 
            console.log(token);
            
            setCookie('jwt', token);   

            let payload = token.substring(token.indexOf('.')+1,token.lastIndexOf('.')); 
            let dec = JSON.parse(base64.decode(payload));
            console.log(dec);


            axios.get(`http://61.79.215.100/user`,
            
            {
                
                headers : {

                    'Authorization' : token
                }
            }
            )
            .then(response =>{
                console.log(`Response : ${response.data}`)
                
            })
            .catch(error => {
                console.log('Error : ', error);
            })
        })
        .catch(error => {
        console.log(`에러 사유 : ${error.response.data}`)
        console.log(`에러 토큰 : ${error.response.headers.authorization}`);

        });

    }, [code]);
    
    return(
        <>
            네이버
        </>
    )
    
}