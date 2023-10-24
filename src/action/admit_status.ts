import { SAVE_ADMIT_STATUS } from "./types";


export function saveAdmitStatus(admitStatus : boolean){
    return{
        type : SAVE_ADMIT_STATUS,
        payload : admitStatus,
    };
}
