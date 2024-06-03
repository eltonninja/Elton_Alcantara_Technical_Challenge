import { combineReducers } from "redux";
import { settlementReducer } from "../features/settlement-slice";

export const RootReducer = combineReducers({
  settlement: settlementReducer,
});
