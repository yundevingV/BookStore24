import { SAVE_PAGING } from "./types";


export function savePaging(paging : number){
    return{
        type : SAVE_PAGING,
        payload : paging,
    };
}
