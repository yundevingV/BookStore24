
import { combineReducers } from "redux";
import SearchOptionReducer from "./search_option_reducer";
import SearchWordReducer from "./search_word_reducer";
import LoginStatusReducer from "./login_status_reducer";
import DropDownValueReducer from "./dropdown_value_reducer";
import OpenModal  from "./openModal_reducer";
import BookInformationReducer from "./book_information_reducer";
import BookratingReducer from "./book_rating_reducer";
import CancelStatusReducer from "./cancel_status_reducer";
import PagingReducer from "./paging_reducer";
import TotalPaginReducer from "./totalPaging_reducer";
import ViewStatusReducer from "./view_status_reducer copy";
import AdmitStatusReducer from "./admit_status_reducer";

const rootReducer = combineReducers({
  SearchOptionReducer,
  SearchWordReducer,
  LoginStatusReducer,
  DropDownValueReducer,
  OpenModal,
  BookInformationReducer,
  BookratingReducer,
  CancelStatusReducer,
  PagingReducer,
  TotalPaginReducer,
  ViewStatusReducer  ,
  AdmitStatusReducer
});

export default rootReducer;

// useSelector로 스토어에 접근할 때 필요하다!
export type RootState = ReturnType<typeof rootReducer>;