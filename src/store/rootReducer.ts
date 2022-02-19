import { createReducer } from "typesafe-actions";
import { ActionType, StateType, CompoundStatusType } from "./types";
import {
  startElements,
  allElements,
  ElementEntriesType,
  ElementType,
} from "../recipes";
import { processSelectedCard, updateCards } from "./actions";
import { getAvailableRecipes } from "./selectors";

const initialState: Readonly<StateType> = {
  openedElements: startElements,
  newOpenedElements: null,
  firstSelectedElement: null,
  secondSelectedElement: null,
  result: null,
  newResult: null,
  compoundStatus: null,
};

const getSelectedRearrangeType = (
  { secondSelectedElement, firstSelectedElement, newOpenedElements }: StateType,
  payload: ElementEntriesType
): CompoundStatusType => {
  if (newOpenedElements) return "0";
  if (secondSelectedElement && secondSelectedElement[0] === payload[0]) {
    return "-2";
  } else if (
    firstSelectedElement &&
    firstSelectedElement[0] === payload[0] &&
    secondSelectedElement
  ) {
    return "1=2 -2";
  } else if (
    (firstSelectedElement &&
      secondSelectedElement &&
      secondSelectedElement[0] !== payload[0]) ||
    (firstSelectedElement &&
      firstSelectedElement[0] !== payload[0] &&
      !secondSelectedElement)
  ) {
    return "!";
  } else if (firstSelectedElement && firstSelectedElement[0] === payload[0]) {
    return "-1";
  } else return "1";
};

const computeResult = (state: StateType) => {
  let { secondSelectedElement, firstSelectedElement } = state;
  if (firstSelectedElement && secondSelectedElement) {
    const availableRecipes = getAvailableRecipes(state);
    const availableForFirst = availableRecipes[firstSelectedElement[0]];
    if (availableForFirst && secondSelectedElement[0] in availableForFirst) {
      const resulted = availableForFirst[secondSelectedElement[0]];
      if (typeof resulted === "string") {
        return [resulted, allElements[resulted]] as ElementEntriesType;
      } else if (resulted) {
        return resulted.map((el) => [
          el,
          allElements[el],
        ]) as ElementEntriesType[];
      } else return null;
    } else return null;
  } else return null;
};

export default createReducer<StateType, ActionType>(initialState)
  .handleAction(processSelectedCard, (state, { payload }) => {
    let {
      secondSelectedElement,
      firstSelectedElement,
      result,
      openedElements,
      newOpenedElements,
      newResult,
    } = state;
    newResult = null;
    const status = getSelectedRearrangeType(state, payload);
    if (status === "0") {
      return state;
    }
    if (status === "-2") {
      secondSelectedElement = null;
      result = null;
    } else if (status === "1=2 -2") {
      firstSelectedElement = secondSelectedElement;
      secondSelectedElement = null;
      result = null;
    } else if (status === "!") {
      secondSelectedElement = payload;
      result = computeResult({ ...state, secondSelectedElement });
      if (result) {
        newOpenedElements = [...openedElements] as ElementType[];
        if (typeof result[0] === "string") {
          if (!newOpenedElements.includes(result[0])) {
            newOpenedElements.push(result[0]);
            newResult = result[0];
          }
        } else {
          result = result as ElementEntriesType[];
          const newResults: ElementType[] = [];
          result.forEach((el) => {
            if (
              newOpenedElements?.length &&
              !newOpenedElements.includes(el[0])
            ) {
              newOpenedElements.push(el[0]);
              newResults.push(el[0]);
            }
          });
          if (newResults.length) {
            newResult = newResults;
          }
        }
      }
    } else if (status === "-1") {
      firstSelectedElement = null;
      result = null;
    } else {
      firstSelectedElement = payload;
      result = null;
    }
    return {
      ...state,
      secondSelectedElement,
      firstSelectedElement,
      result,
      newOpenedElements,
      newResult,
    };
  })
  .handleAction(updateCards, (state) => {
    console.log(state.newOpenedElements);
    if (state.newOpenedElements) {
      return {
        ...state,
        openedElements: [...state.newOpenedElements],
        newOpenedElements: null,
        // firstSelectedElement: null,
        // secondSelectedElement: null,
        // result: null,
      };
    } else return state;
  });
