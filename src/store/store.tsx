import { createStore, applyMiddleware, Middleware } from "redux";
import { StateType } from "./types";
import reducer from "./rootReducer";

const customMiddleWare: Middleware<{}, StateType> =
  (store) => (dispath) => (action) => {
    dispath(action);

    const currentState = store.getState();
    const fieldsToSave = ["deadEndsStatus", "openedElements", "sortBy"];
    let stateKey: keyof StateType;

    for (stateKey in currentState) {
      if (fieldsToSave.includes(stateKey) && currentState[stateKey])
        localStorage.setItem(stateKey, JSON.stringify(currentState[stateKey]));
    }
  };

export const store = createStore(reducer, applyMiddleware(customMiddleWare));
