import { CLOSE_MODAL } from "./types";

interface closeModalPropsType {
    dropDownValue : boolean;
}

export function closeModal(toggle : boolean){
    return{
        type : CLOSE_MODAL,
        payload : toggle,
    };
}
