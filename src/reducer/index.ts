
import { combineReducers } from "redux";
import searchOptionReducer from "./search_option_reducer";
import searchWordReducer from "./search_word_reducer";

const rootReducer = combineReducers({
  searchOptionReducer,
  searchWordReducer
});

export default rootReducer;

// useSelector로 스토어에 접근할 때 필요하다!
export type RootState = ReturnType<typeof rootReducer>;