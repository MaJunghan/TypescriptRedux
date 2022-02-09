import { combineReducers } from "redux";
import post from "./post";

const rootReducer = combineReducers({
  post,
});

// 루트 리듀서를 내보내주세요.
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
