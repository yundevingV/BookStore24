import { SAVE_BOOK_INFORMATION } from "../action/types";
import { saveBookInformation } from "../action/book_information";

// Define the type for the book information data
type BookInformationType = {
    bookInformationData: any; // Use 'any[]' for an array of any type
}

// Initial state with the correct type
const initialState: BookInformationType = {
    bookInformationData: '',
}

type BookInformationActionType =
    | ReturnType<typeof saveBookInformation>;

// Reducer function
export default function BookInformationReducer(
    state: BookInformationType = initialState,
    action: BookInformationActionType
) {
    switch (action.type) {
        case SAVE_BOOK_INFORMATION:
            return { ...state, bookInformationData: action.payload }
        default:
            return state;
    }
}
