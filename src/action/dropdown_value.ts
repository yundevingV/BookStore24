import { SAVE_DROPDOWN_VALUE } from "./types";

interface saveDropDownValuePropsType {
    dropDownValue : string;
}

export function saveDropDownValue(dropdownValue : string){
    return{
        type : SAVE_DROPDOWN_VALUE,
        payload : dropdownValue,
    };
}
