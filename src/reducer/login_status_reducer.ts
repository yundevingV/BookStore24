import { SAVE_LOGIN_STATUS } from "../action/types";
import { saveloginStatus } from "../action/login_status";


type LoginStatusStateType = {
    loginStatusData : boolean;
}

const initalState = {
    loginStatusData : true,
}

type LoginStatusActionType =
    | ReturnType<typeof saveloginStatus>;

export default function LoginStatusReducer(
    state : LoginStatusStateType = initalState,
    action : LoginStatusActionType
) {
    switch (action.type) {
        case SAVE_LOGIN_STATUS :
            return {...state,loginStatusData : action.payload}
        default :
            return state;
    }

}