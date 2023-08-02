import { CLOSE_MODAL } from "../action/types";
import { closeModal } from "../action/firstlogin";


type closeModalType = {
    closeModalData : boolean;
}

const initalState = {
    closeModalData : true,
}

type closeModalActionType =
    | ReturnType<typeof closeModal>;

export default function LoginStatusReducer(
    state : closeModalType = initalState,
    action : closeModalActionType
) {
    switch (action.type) {
        case CLOSE_MODAL :
            return {...state,closeModalData : action.payload}
        default :
            return state;
    }

}