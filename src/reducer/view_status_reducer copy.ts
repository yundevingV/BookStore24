import { SAVE_VIEW_STATUS } from "../action/types";
import { saveViewStatus } from "../action/view_status";


type viewStatusStateType = {
    viewStatusData : string;
}

const initalState = {
    viewStatusData : 'list',
}

type viewStatusActionType =
    | ReturnType<typeof saveViewStatus>;

export default function ViewStatusReducer(
    state : viewStatusStateType = initalState,
    action : viewStatusActionType
) {
    switch (action.type) {
        case SAVE_VIEW_STATUS :
            return {...state,viewStatusData : action.payload}
        default :
            return state;
    }

}