import useDecodedJWT from "../hooks/useDecodedJWT";

export const CalculateTime = () => {

    let token = sessionStorage.getItem('token')

    let dec = useDecodedJWT(token);
    
    const date = new Date(dec?.exp * 1000);
    const curDate = new Date();
    const timeDifferenceInMilliseconds = date.getTime() - curDate.getTime();
    const totalSeconds = Math.floor(timeDifferenceInMilliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return { minutes, seconds };
}