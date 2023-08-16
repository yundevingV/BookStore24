import { SAVE_BOOK_INFORMATION } from "./types";

// Define the object type structure
interface ObjectType {
    object : object
}

export function saveBookInformation(bookInformation: object) {
    return {
        type: SAVE_BOOK_INFORMATION,
        payload: bookInformation,
    };
}