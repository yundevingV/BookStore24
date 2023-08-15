
import { combineReducers } from "redux";
import searchOptionReducer from "./search_option_reducer";
import searchWordReducer from "./search_word_reducer";
import LoginStatusReducer from "./login_status_reducer";
import DropDownValueReducer from "./dropdown_value_reducer";
import openModal  from "./openModal_reducer";
import BookInformationReducer from "./book_information_reducer";
import BookratingReducer from "./book_rating_reducer";
import cancelStatusReducer from "./cancel_status_reducer";

const rootReducer = combineReducers({
  searchOptionReducer,
  searchWordReducer,
  LoginStatusReducer,
  DropDownValueReducer,
  openModal,
  BookInformationReducer,
  BookratingReducer,
  cancelStatusReducer
  
});

export default rootReducer;

// useSelector로 스토어에 접근할 때 필요하다!
export type RootState = ReturnType<typeof rootReducer>;