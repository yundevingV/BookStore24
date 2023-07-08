import { SAVE_SEARCH_OPTION } from "./types";

interface saveSearchOptionPropsType {
    searchOption : string;
}

export function saveSearchOption(searchOption : string){
    return{
        type : SAVE_SEARCH_OPTION,
        payload : searchOption,
    };
}
