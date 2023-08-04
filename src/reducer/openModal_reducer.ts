import { OPEN_MODAL } from "../action/types";
import { openModal } from "../action/modal";


type openModalType = {
    openModalData : boolean;
}

const initalState = {
    openModalData : false,
}

type openModalActionType =
    | ReturnType<typeof openModal>;

export default function LoginStatusReducer(
    state : openModalType = initalState,
    action : openModalActionType
) {
    switch (action.type) {
        case OPEN_MODAL :
            return {...state,openModalData : action.payload}
        default :
            return state;
    }

}