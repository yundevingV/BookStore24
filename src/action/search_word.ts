import { SAVE_SEARCH_WORD } from "./types";

interface saveSearchWordPropsType {
    searchWord : string;
}

export function saveSearchWord({searchWord} : saveSearchWordPropsType){
    return{
        type : SAVE_SEARCH_WORD,
        payload : searchWord,
    };
}
