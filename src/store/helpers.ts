import { StateType, SortOrder, DeadEndsVisibility } from "./types";
import { startElements } from "../logic/foodTypes";
import { Element } from "../logic/types";

const initialState = {
  openedElements: startElements,
  sortBy: SortOrder.Time,
  deadEndsStatus: DeadEndsVisibility.Show,
};

export const parseJSONToState = (
  { deadEndsStatus, openedElements, sortBy }: StateType,
  json: { [key: string]: string },
) => {
  const { deadEndsStatus: des, openedElements: oe, sortBy: sb } = json;

  if (Object.keys(json).length === 0) {
    return initialState;
  }

  const parsedOpenedElements = JSON.parse(oe);
  const parsedDeadEndsStatus = JSON.parse(des);
  const parsedSortBy = JSON.parse(sb);

  if (
    parsedDeadEndsStatus === DeadEndsVisibility.Hide ||
    parsedDeadEndsStatus === DeadEndsVisibility.Show ||
    parsedDeadEndsStatus === DeadEndsVisibility.Ignore
  ) {
    deadEndsStatus = parsedDeadEndsStatus;
  }

  if (
    parsedSortBy === SortOrder.Alphabet ||
    parsedSortBy === SortOrder.Type ||
    parsedSortBy === SortOrder.Time
  ) {
    sortBy = parsedSortBy;
  }

  openedElements = [];
  parsedOpenedElements.forEach((el: Element) => {
    openedElements.push(el);
  });

  return {
    deadEndsStatus,
    sortBy,
    openedElements,
  };
};

export const nextDeadEndsTypes: {
  [key in DeadEndsVisibility]: DeadEndsVisibility;
} = {
  [DeadEndsVisibility.Hide]: DeadEndsVisibility.Ignore,
  [DeadEndsVisibility.Ignore]: DeadEndsVisibility.Show,
  [DeadEndsVisibility.Show]: DeadEndsVisibility.Hide,
};

export const nexSortTypes: { [key in SortOrder]: SortOrder } = {
  [SortOrder.Alphabet]: SortOrder.Type,
  [SortOrder.Type]: SortOrder.Time,
  [SortOrder.Time]: SortOrder.Alphabet,
};
