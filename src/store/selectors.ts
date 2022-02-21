import { ElementType } from "recipes";
import { recipesByElement, RecipesByElementType } from "recipes";
import { StateType, CompoundStatusType } from "./types";
import { allElements, ElementEntriesType } from "../recipes";

export const getAvailableRecipes = ({ openedElements }: StateType) => {
  const entries = Object.entries(recipesByElement) as [
    ElementType,
    { [key in ElementType]?: ElementType | ElementType[] }[]
  ][];
  return Object.fromEntries(
    entries.filter(([key]) => openedElements.includes(key))
  ) as RecipesByElementType;
};

export const getSelectedRearrangeType = (
  { secondSelectedElement, firstSelectedElement, newOpenedElements }: StateType,
  payload: ElementEntriesType
): CompoundStatusType => {
  if (newOpenedElements) return "0";
  if (secondSelectedElement && secondSelectedElement[0] === payload[0]) {
    return "-2";
  } else if (
    firstSelectedElement &&
    firstSelectedElement[0] === payload[0] &&
    secondSelectedElement
  ) {
    return "1=2 -2";
  } else if (
    (firstSelectedElement &&
      secondSelectedElement &&
      secondSelectedElement[0] !== payload[0]) ||
    (firstSelectedElement &&
      firstSelectedElement[0] !== payload[0] &&
      !secondSelectedElement)
  ) {
    return "!";
  } else if (firstSelectedElement && firstSelectedElement[0] === payload[0]) {
    return "-1";
  } else return "1";
};

export const computeResult = (state: StateType) => {
  let { secondSelectedElement, firstSelectedElement } = state;
  if (firstSelectedElement && secondSelectedElement) {
    const availableRecipes = getAvailableRecipes(state);
    const availableForFirst = availableRecipes[firstSelectedElement[0]];
    if (availableForFirst && secondSelectedElement[0] in availableForFirst) {
      const resulted = availableForFirst[secondSelectedElement[0]];
      if (typeof resulted === "string") {
        return [resulted, allElements[resulted]] as ElementEntriesType;
      } else if (resulted) {
        return resulted.map((el) => [
          el,
          allElements[el],
        ]) as ElementEntriesType[];
      } else return null;
    } else return null;
  } else return null;
};
