import { SAVE_BOOK_RATING } from "./types";

// Define the object type structure
interface valueType {
    rate : number,
}

export function saveBookRating(rate: number) {
    return {
        type: SAVE_BOOK_RATING,
        payload: rate,
    };
}