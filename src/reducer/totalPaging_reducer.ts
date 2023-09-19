import { saveTotalPaging } from "../action/totalPaging_status";
import { SAVE_TOTAL_PAGING } from "../action/types";


type totalPagingStateType = {
    totalPagingData : number ;
}

const initalState = {
    totalPagingData : 0,
}

type totalPagingActionType =
    | ReturnType<typeof saveTotalPaging>;

export default function PagingReducer(
    state : totalPagingStateType = initalState,
    action : totalPagingActionType
) {
    switch (action.type) {
        case SAVE_TOTAL_PAGING :
            return {...state,totalPagingData : action.payload}
        default :
            return state;
    }

}