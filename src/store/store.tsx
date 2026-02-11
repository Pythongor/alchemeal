import { createStore, applyMiddleware, Middleware } from "redux";
import { StateType } from "./types";
import reducer, { initialState } from "./rootReducer";

const fieldsToSave = ["deadEndsStatus", "openedElements", "sortBy"];

const customMiddleWare: Middleware<{}, StateType> =
  (store) => (dispatch) => (action) => {
    dispatch(action);

    const currentState = store.getState();
    let stateKey: keyof StateType;

    for (stateKey in currentState) {
      if (fieldsToSave.includes(stateKey) && currentState[stateKey])
        localStorage.setItem(stateKey, JSON.stringify(currentState[stateKey]));
    }
  };

const loadInitialState = (): StateType => {
  try {
    return fieldsToSave.reduce((acc, key) => {
      const item = localStorage.getItem(key);
      return item ? { ...acc, [key]: JSON.parse(item) } : acc;
    }, initialState);
  } catch (e) {
    return initialState;
  }
};

export const store = createStore(
  reducer,
  loadInitialState(),
  applyMiddleware(customMiddleWare),
);
