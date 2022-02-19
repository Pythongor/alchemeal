import { ActionType as ActType } from "typesafe-actions";
import { ElementType, ElementEntriesType } from "recipes";
import * as actions from "./actions";

export type CompoundStatusType =
  | "1=2 -2"
  | "-2"
  | "-1"
  | "0"
  | "1"
  | "!"
  | null;

export type StateType = {
  openedElements: ElementType[];
  newOpenedElements: ElementType[] | null;
  firstSelectedElement: ElementEntriesType | null;
  secondSelectedElement: ElementEntriesType | null;
  result: ElementEntriesType | ElementEntriesType[] | null;
  newResult: ElementType | ElementType[] | null;
  compoundStatus: CompoundStatusType;
};

export enum Actions {
  processSelectedCard = "PROCESS_SELECTED_CARD",
  updateCards = "UPDATE_CARDS",
}

export type ActionType = ActType<typeof actions>;
