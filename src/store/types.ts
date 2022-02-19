import { ActionType as ActType } from "typesafe-actions";
import { ElementType, ElementEntriesType } from "recipes";
import * as actions from "./actions";

export type CompoundStatusType = "1=2 -2" | "-2" | "-1" | "0" | "1" | "!" | "-";

export type SortType = "alphabet" | "type" | "time";

export type StateType = {
  openedElements: ElementType[];
  newOpenedElements: ElementType[] | null;
  firstSelectedElement: ElementEntriesType | null;
  secondSelectedElement: ElementEntriesType | null;
  result: ElementEntriesType | ElementEntriesType[] | null;
  newResult: ElementType | ElementType[] | null;
  compoundStatus: CompoundStatusType;
  sortBy: SortType;
};

export enum Actions {
  processSelectedCard = "PROCESS_SELECTED_CARD",
  updateCards = "UPDATE_CARDS",
  updateCompoundInfo = "UPDATE_COMPOUND_INFO",
  resetSelections = "RESET_SELECTIONS",
  setSortType = "SET_SORT_TYPE",
}

export type ActionType = ActType<typeof actions>;
