import { StateType } from "./types";
import { ElementType } from "recipes";
import { recipesByElement, RecipesByElementType } from "recipes";

export const getAvailableRecipes = ({ openedElements }: StateType) => {
  const entries = Object.entries(recipesByElement) as [
    ElementType,
    { [key in ElementType]?: ElementType | ElementType[] }[]
  ][];
  return Object.fromEntries(
    entries.filter(([key]) => openedElements.includes(key))
  ) as RecipesByElementType;
};
