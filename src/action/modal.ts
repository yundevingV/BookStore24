import { OPEN_MODAL } from "./types";

interface openModalPropsType {
    dropDownValue : boolean;
}

export function openModal(toggle : boolean){
    return{
        type : OPEN_MODAL,
        payload : toggle,
    };
}
