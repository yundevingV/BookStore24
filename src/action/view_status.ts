import { SAVE_VIEW_STATUS } from "./types";



export function saveViewStatus(viewStatus : string){
    return{
        type : SAVE_VIEW_STATUS,
        payload : viewStatus,
    };
}
