import { SAVE_CANCEL_STATUS } from "../action/types";
import { saveCancelStatus } from "../action/cancel_status";


type cancelStatusStateType = {
    cancelStatusData : boolean;
}

const initalState = {
    cancelStatusData : false,
}

type cancelStatusActionType =
    | ReturnType<typeof saveCancelStatus>;

export default function cancelStatusReducer(
    state : cancelStatusStateType = initalState,
    action : cancelStatusActionType
) {
    switch (action.type) {
        case SAVE_CANCEL_STATUS :
            return {...state,cancelStatusData : action.payload}
        default :
            return state;
    }

}