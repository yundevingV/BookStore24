import { SAVE_BOOK_RATING } from "../action/types";
import { saveBookRating } from "../action/book_rating";

// Define the type for the book rating data
type BookRatingType = {
    bookRatingData: number; // Use 'any[]' for an array of any type
}

// Initial state with the correct type
const initialState: BookRatingType = {
    bookRatingData: 0,
}

type BookRatingActionType =
    | ReturnType<typeof saveBookRating>;

// Reducer function
export default function BookratingReducer(
    state: BookRatingType = initialState,
    action: BookRatingActionType
) {
    switch (action.type) {
        case SAVE_BOOK_RATING:
            return { ...state, bookRatingData: action.payload }
        default:
            return state;
    }
}
