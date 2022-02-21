import { createReducer } from "typesafe-actions";
import { ActionType, StateType, SortType, DeadEndsType } from "./types";
import { startElements, ElementEntriesType, ElementType } from "../recipes";
import {
  processSelectedCard,
  updateCards,
  updateCompoundInfo,
  resetSelections,
  setSortType,
  setDeadEndsType,
  updateOnLoad,
  resetProgress,
  setModal,
} from "./actions";
import { computeResult, getSelectedRearrangeType } from "./selectors";

const initialState: Readonly<StateType> = {
  openedElements: startElements,
  newOpenedElements: null,
  firstSelectedElement: null,
  secondSelectedElement: null,
  result: null,
  newResult: null,
  compoundStatus: "0",
  sortBy: "time",
  deadEndsStatus: "ignore",
  modal: null,
};

export default createReducer<StateType, ActionType>(initialState)
  .handleAction(resetProgress, (state) => {
    const { openedElements, sortBy, deadEndsStatus } = state;
    return {
      ...initialState,
      openedElements,
      newOpenedElements: initialState.openedElements,
      sortBy,
      deadEndsStatus,
    };
  })
  .handleAction(resetSelections, (state) => ({
    ...state,
    compoundStatus: "-1",
  }))
  .handleAction(setModal, (state, { payload }) => ({
    ...state,
    modal: payload,
  }))
  .handleAction(setDeadEndsType, (state) => {
    let { deadEndsStatus } = state;
    const nextDeadEndsTypes: { [key in DeadEndsType]: DeadEndsType } = {
      hide: "ignore",
      ignore: "show",
      show: "hide",
    };
    return {
      ...state,
      deadEndsStatus: nextDeadEndsTypes[deadEndsStatus],
    };
  })
  .handleAction(setSortType, (state) => {
    let { sortBy } = state;
    const nexSortTypes: { [key in SortType]: SortType } = {
      alphabet: "type",
      type: "time",
      time: "alphabet",
    };
    return {
      ...state,
      sortBy: nexSortTypes[sortBy],
    };
  })
  .handleAction(updateCards, (state) => {
    if (state.newOpenedElements) {
      return {
        ...state,
        openedElements: [...state.newOpenedElements],
        newOpenedElements: null,
      };
    } else return state;
  })
  .handleAction(updateOnLoad, (state, { payload }) => {
    const { deadEndsStatus: des, openedElements: oe, sortBy: sb } = payload;
    let { deadEndsStatus, openedElements, sortBy } = state;
    if (Object.keys(payload).length === 0) {
      return initialState;
    }
    const parsedOpenedElements = JSON.parse(oe);
    const parsedDeadEndsStatus = JSON.parse(des);
    const parsedSortBy = JSON.parse(sb);
    console.log(des, oe, sb);
    if (
      parsedDeadEndsStatus === "hide" ||
      parsedDeadEndsStatus === "show" ||
      parsedDeadEndsStatus === "exclude"
    ) {
      deadEndsStatus = parsedDeadEndsStatus;
    }
    if (
      parsedSortBy === "alphabet" ||
      parsedSortBy === "type" ||
      parsedSortBy === "time"
    ) {
      sortBy = parsedSortBy;
    }
    openedElements = [];
    parsedOpenedElements.forEach((el: ElementType) => {
      openedElements.push(el);
    });
    return {
      ...state,
      deadEndsStatus,
      sortBy,
      openedElements,
    };
  })
  .handleAction(processSelectedCard, (state, { payload }) => {
    let {
      secondSelectedElement,
      firstSelectedElement,
      result,
      openedElements,
      newResult,
      compoundStatus,
    } = state;
    newResult = null;
    compoundStatus = getSelectedRearrangeType(state, payload);
    if (compoundStatus === "0") {
      return state;
    } else if (compoundStatus === "!") {
      secondSelectedElement = payload;
      const resulted = computeResult({ ...state, secondSelectedElement });
      if (resulted) {
        openedElements = [...openedElements] as ElementType[];
        result = resulted;
        if (typeof resulted[0] === "string") {
          if (!openedElements.includes(resulted[0])) {
            openedElements.push(resulted[0]);
            newResult = resulted[0];
          }
        } else {
          result = resulted as ElementEntriesType[];
          const newResults: ElementType[] = [];
          result.forEach((el) => {
            if (openedElements?.length && !openedElements.includes(el[0])) {
              openedElements.push(el[0]);
              newResults.push(el[0]);
            }
          });
          if (newResults.length) {
            newResult = newResults;
          }
        }
      } else compoundStatus = "-";
    } else if (compoundStatus === "1") {
      firstSelectedElement = payload;
    }
    return {
      ...state,
      secondSelectedElement,
      firstSelectedElement,
      result,
      openedElements,
      newResult,
      compoundStatus,
    };
  })
  .handleAction(updateCompoundInfo, (state) => {
    let {
      firstSelectedElement,
      secondSelectedElement,
      result,
      compoundStatus,
      newResult,
    } = state;
    if (compoundStatus === "-1") newResult = null;
    if (compoundStatus === "-") result = null;
    if (compoundStatus === "1=2 -2") {
      firstSelectedElement = secondSelectedElement;
      secondSelectedElement = null;
      result = null;
    } else if (["-2", "1=2 -2", "1"].includes(compoundStatus)) {
      secondSelectedElement = null;
      result = null;
    } else if (compoundStatus === "-1") {
      firstSelectedElement = null;
      secondSelectedElement = null;
      result = null;
    }
    return {
      ...state,
      firstSelectedElement,
      secondSelectedElement,
      result,
      newResult,
      compoundStatus: "0",
    };
  });
