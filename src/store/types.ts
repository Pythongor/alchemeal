import { ActionType as ActType } from "typesafe-actions";
import { ElementType, ElementEntriesType } from "recipes";
import * as actions from "./actions";
import React from "react";

export type CompoundStatusType = "1=2 -2" | "-2" | "-1" | "0" | "1" | "!" | "-";

export type SortType = "alphabet" | "type" | "time";

export type DeadEndsType = "hide" | "show" | "ignore";

export type ModalType = {
  text: string;
  acceptFunc?: () => void | null;
  isDialog?: boolean;
  body?: React.ElementType;
} | null;

export type StateType = {
  openedElements: ElementType[];
  newOpenedElements: ElementType[] | null;
  firstSelectedElement: ElementEntriesType | null;
  secondSelectedElement: ElementEntriesType | null;
  result: ElementEntriesType | ElementEntriesType[] | null;
  newResult: ElementType | ElementType[] | null;
  compoundStatus: CompoundStatusType;
  sortBy: SortType;
  deadEndsStatus: DeadEndsType;
  modal: ModalType;
};

export enum Actions {
  processSelectedCard = "PROCESS_SELECTED_CARD",
  updateCards = "UPDATE_CARDS",
  updateCompoundInfo = "UPDATE_COMPOUND_INFO",
  resetSelections = "RESET_SELECTIONS",
  setSortType = "SET_SORT_TYPE",
  setDeadEndsType = "SET_DEAD_ENDS_TYPE",
  updateOnLoad = "UPDATE_ON_LOAD",
  resetProgress = "RESET_PROGRESS",
  setModal = "SET_MODAL",
}

export type ActionType = ActType<typeof actions>;
