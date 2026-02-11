import { SortOrder, DeadEndsVisibility } from "./types";

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
