import { createReducer } from "typesafe-actions";
import {
  ActionType,
  StateType,
  SortOrder,
  DeadEndsVisibility,
  CompoundStatus,
} from "./types";
import { startElements } from "../logic/foodTypes";
import { ElementEntriesType, Element } from "../logic/types";
import {
  processSelectedCard,
  updateCards,
  updateCompoundSection,
  resetSelections,
  setSortOrder,
  setDeadEndsVisibility,
  updateOnLoad,
  resetProgress,
  setModal,
} from "./actions";
import { computeResult, getSelectedRearrangeType } from "./selectors";
import { nexSortTypes, nextDeadEndsTypes, parseJSONToState } from "./helpers";

const initialState: Readonly<StateType> = {
  openedElements: startElements,
  newOpenedElements: null,
  firstSelectedElement: null,
  secondSelectedElement: null,
  result: null,
  newResult: null,
  compoundStatus: CompoundStatus.NoChange,
  sortBy: SortOrder.Time,
  deadEndsStatus: DeadEndsVisibility.Show,
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
    compoundStatus: CompoundStatus.RemoveFirst,
  }))

  .handleAction(setModal, (state, { payload }) => ({
    ...state,
    modal: payload,
  }))

  .handleAction(setDeadEndsVisibility, (state) => {
    let { deadEndsStatus } = state;

    return {
      ...state,
      deadEndsStatus: nextDeadEndsTypes[deadEndsStatus],
    };
  })

  .handleAction(setSortOrder, (state) => {
    let { sortBy } = state;

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
    return { ...state, ...parseJSONToState(state, payload) };
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

    if (compoundStatus === CompoundStatus.NoChange) {
      return state;
    } else if (compoundStatus === CompoundStatus.NeedRearrange) {
      secondSelectedElement = payload;
      const resulted = computeResult({ ...state, secondSelectedElement });

      if (resulted) {
        openedElements = [...openedElements] as Element[];
        result = resulted;
        if (typeof resulted[0] === "string") {
          if (!openedElements.includes(resulted[0])) {
            openedElements.push(resulted[0]);
            newResult = resulted[0];
          }
        } else {
          result = resulted as ElementEntriesType[];
          const newResults: Element[] = [];
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
      } else compoundStatus = CompoundStatus.EmptyResult;
    } else if (compoundStatus === CompoundStatus.FirstSelected) {
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

  .handleAction(updateCompoundSection, (state) => {
    let {
      firstSelectedElement,
      secondSelectedElement,
      result,
      compoundStatus,
      newResult,
    } = state;

    if (compoundStatus === CompoundStatus.RemoveFirst) newResult = null;

    if (compoundStatus === CompoundStatus.EmptyResult) result = null;

    if (compoundStatus === CompoundStatus.FirstToSecond) {
      firstSelectedElement = secondSelectedElement;
      secondSelectedElement = null;
      result = null;
    } else if (
      [CompoundStatus.RemoveSecond, CompoundStatus.FirstSelected].includes(
        compoundStatus,
      )
    ) {
      secondSelectedElement = null;
      result = null;
    } else if (compoundStatus === CompoundStatus.RemoveFirst) {
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
      compoundStatus: CompoundStatus.NoChange,
    };
  });
