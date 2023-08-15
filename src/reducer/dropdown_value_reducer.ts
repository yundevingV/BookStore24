import { SAVE_DROPDOWN_VALUE } from "../action/types";
import { saveDropDownValue } from "../action/dropdown_value";


type DropDownValueType = {
    dropDownValueData : string;
}

const initalState = {
    dropDownValueData : 'seoul',
}

type DropDownValueActionType =
    | ReturnType<typeof saveDropDownValue>;

export default function DropDownValueReducer(
    state : DropDownValueType = initalState,
    action : DropDownValueActionType
) {
    switch (action.type) {
        case SAVE_DROPDOWN_VALUE :
            return {...state,dropDownValueData : action.payload}
        default :
            return state;
    }

}