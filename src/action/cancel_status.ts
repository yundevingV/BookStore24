import { SAVE_CANCEL_STATUS } from "./types";


export function saveCancelStatus(cancelStatus : boolean){
    return{
        type : SAVE_CANCEL_STATUS,
        payload : cancelStatus,
    };
}
