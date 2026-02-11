import { ActionType as ActType } from "typesafe-actions";
import { Element, ElementEntriesType } from "logic/types";
import * as actions from "./actions";
import React from "react";

export enum CompoundStatus {
  FirstToSecond,
  RemoveSecond,
  RemoveFirst,
  NoChange,
  FirstSelected,
  NeedRearrange,
  EmptyResult,
}

export enum SortOrder {
  Alphabet = "alphabet",
  Type = "type",
  Time = "time",
}

export enum DeadEndsVisibility {
  Hide = "hide",
  Ignore = "ignore",
  Show = "show",
}

export type ModalType = {
  text: string;
  acceptFunc?: () => void | null;
  isDialog?: boolean;
  body?: React.ElementType;
} | null;

export type StateType = {
  openedElements: Element[];
  newOpenedElements: Element[] | null;
  firstSelectedElement: ElementEntriesType | null;
  secondSelectedElement: ElementEntriesType | null;
  result: ElementEntriesType | ElementEntriesType[] | null;
  newResult: Element | Element[] | null;
  compoundStatus: CompoundStatus;
  sortBy: SortOrder;
  deadEndsStatus: DeadEndsVisibility;
  modal: ModalType;
};

export enum Actions {
  ProcessSelectedCard = "PROCESS_SELECTED_CARD",
  UpdateCards = "UPDATE_CARDS",
  UpdateCompoundSection = "UPDATE_COMPOUND_SECTION",
  ResetSelections = "RESET_SELECTIONS",
  SetSortOrder = "SET_SORT_ORDER",
  SetDeadEndsVisibility = "SET_DEAD_ENDS_VISIBILITY",
  UpdateOnLoad = "UPDATE_ON_LOAD",
  ResetProgress = "RESET_PROGRESS",
  SetModal = "SET_MODAL",
}

export type ActionType = ActType<typeof actions>;
