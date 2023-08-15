import { SAVE_BOOK_INFORMATION } from "./types";

// Define the object type structure
interface ObjectType {
    title: string;
    author: string;
    publisher: string;
}

export function saveBookInformation(bookInformation: ObjectType) {
    return {
        type: SAVE_BOOK_INFORMATION,
        payload: bookInformation,
    };
}