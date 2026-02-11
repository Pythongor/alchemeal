import { createAction } from "typesafe-actions";
import { Actions, ModalType } from "./types";
import { ElementEntriesType } from "logic/types";

export const processSelectedCard = createAction(
  Actions.ProcessSelectedCard,
)<ElementEntriesType>();

export const updateCards = createAction(Actions.UpdateCards)();

export const updateCompoundSection = createAction(
  Actions.UpdateCompoundSection,
)();

export const resetSelections = createAction(Actions.ResetSelections)();

export const setSortOrder = createAction(Actions.SetSortOrder)();

export const setDeadEndsVisibility = createAction(
  Actions.SetDeadEndsVisibility,
)();

export const updateOnLoad = createAction(Actions.UpdateOnLoad)<{
  [key: string]: string;
}>();

export const resetProgress = createAction(Actions.ResetProgress)();

export const setModal = createAction(Actions.SetModal)<ModalType>();
