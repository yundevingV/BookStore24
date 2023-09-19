import { SAVE_PAGING } from "../action/types";
import { savePaging } from "../action/paging_status";



type PagingStateType = {
    PagingData : number;
}

const initalState = {
    PagingData : 0,
}

type PagingActionType =
    | ReturnType<typeof savePaging>;

export default function PagingReducer(
    state : PagingStateType = initalState,
    action : PagingActionType
) {
    switch (action.type) {
        case SAVE_PAGING :
            return {...state,PagingData : action.payload}
        default :
            return state;
    }

}