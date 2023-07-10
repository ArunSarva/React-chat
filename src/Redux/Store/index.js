import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import Reducer from "../Reducer";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const persistConfig = {
  key: "sarva-chat",
  storage,
};

//@ts-ignore
const persistedReducer = persistReducer(persistConfig, Reducer);
let store = createStore(persistedReducer, composeWithDevTools());
let persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export { store, persistor };
