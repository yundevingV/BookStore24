import { SAVE_LOGIN_STATUS } from "./types";

interface saveloginStatusPropsType {
    loginStatus : boolean;
}

export function saveloginStatus(loginStatus : boolean){
    return{
        type : SAVE_LOGIN_STATUS,
        payload : loginStatus,
    };
}
