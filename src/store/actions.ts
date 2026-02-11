import { createAction } from "typesafe-actions";
import { Actions, ModalType } from "./types";
import { ElementEntriesType } from "logic/types";

export const processSelectedCard = createAction(
  Actions.processSelectedCard,
)<ElementEntriesType>();

export const updateCards = createAction(Actions.updateCards)();

export const updateCompoundInfo = createAction(Actions.updateCompoundInfo)();

export const resetSelections = createAction(Actions.resetSelections)();

export const setSortType = createAction(Actions.setSortType)();

export const setDeadEndsType = createAction(Actions.setDeadEndsType)();

export const updateOnLoad = createAction(Actions.updateOnLoad)<{
  [key: string]: string;
}>();

export const resetProgress = createAction(Actions.resetProgress)();

export const setModal = createAction(Actions.setModal)<ModalType>();
