import { SAVE_LOGIN_STATUS } from "./types";

export function saveloginStatus(loginStatus : boolean){
    return{
        type : SAVE_LOGIN_STATUS,
        payload : loginStatus,
    };
}
