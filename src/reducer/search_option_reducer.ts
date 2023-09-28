import { SAVE_SEARCH_OPTION } from "../action/types";
import {saveSearchOption} from "../action/search_option";

type SearchOptionStateType = {
    searchOptionData : string;
}

const initalState = {
    searchOptionData : 'title',
}

type SearchOptionActionType =
    | ReturnType<typeof saveSearchOption>;

export default function searchOptionReducer(
    state : SearchOptionStateType = initalState,
    action : SearchOptionActionType
) {
    switch (action.type) {
        case SAVE_SEARCH_OPTION :
            return {...state , searchOptionData : action.payload}
        default :
            return state;
    }

}