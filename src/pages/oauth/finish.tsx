import { useEffect } from "react"
import { useNavigate } from "react-router"
import { getCookie } from "../../components/Cookie";
import Header from "../../components/Header";
import useDecodedJWT from "../../hooks/useDecodedJWT";


export default function Finish(){

    let token = getCookie('jwt');
    let dec = useDecodedJWT(token);

    console.log(dec)

    return(
        <>
            <Header />
        </>
    )
}