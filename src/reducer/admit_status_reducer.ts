import { SAVE_ADMIT_STATUS } from "../action/types";
import { saveAdmitStatus } from "../action/admit_status";


type admitStatusStateType = {
    admitStatusData : boolean;
}

const initalState = {
    admitStatusData : false,
}

type admitStatusActionType =
    | ReturnType<typeof saveAdmitStatus>;

export default function admitStatusReducer(
    state : admitStatusStateType = initalState,
    action : admitStatusActionType
) {
    switch (action.type) {
        case SAVE_ADMIT_STATUS :
            return {...state,admitStatusData : action.payload}
        default :
            return state;
    }

}