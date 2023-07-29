import React,{useEffect} from "react";

import axios from "axios";

export default function Google(){

    const code : string | null = new URL(window.location.href).searchParams.get("code");
    console.log(code)
    
    useEffect(() => {
        axios.post(
            `http://61.79.215.100/auth/google/callback?Authorization_code=${code}`,
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
        구글

        </>
    )
}