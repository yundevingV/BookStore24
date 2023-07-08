import { SAVE_SEARCH_WORD } from "../action/types";
import {saveSearchWord} from "../action/search_word";

type SearchWordStateType = {
    searchWordData : string;
}

const initalState = {
    searchWordData : '',
}

type SearchWordActionType =
    | ReturnType<typeof saveSearchWord>;

export default function searchWordReducer(
    state : SearchWordStateType = initalState,
    action : SearchWordActionType
) {
    switch (action.type) {
        case SAVE_SEARCH_WORD :
            return {...state , searchWordData : action.payload}
        default :
            return state;
    }

}