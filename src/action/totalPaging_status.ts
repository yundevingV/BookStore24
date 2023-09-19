import { SAVE_TOTAL_PAGING } from "./types";


export function saveTotalPaging(paging : number){
    return{
        type : SAVE_TOTAL_PAGING,
        payload : paging,
    };
}
