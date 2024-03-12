import { createStore } from "redux";
import dataReducer from "./state/reducers/dataReducer";

export const store = createStore(dataReducer,{});
