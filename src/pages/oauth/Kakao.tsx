import React,{useEffect} from "react";

import axios from "axios";

export default function Kakao(){

    const code : string | null = new URL(window.location.href).searchParams.get("code");

    useEffect(() => {
        axios.post(
            `http://61.79.215.100/auth/kakao/callback?Authorization_code=${code}`,
        )
        .then(response => {
            // Handle the response
            console.log('Response:', response.data);
        })
        .catch(error => {
        // Handle errors
        console.error('Error:', error);
        });
    }, [code]);

    return(
        <>
        카카오

        </>
    )
}