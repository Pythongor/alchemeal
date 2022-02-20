export type FoodType =
  | "animal"
  | "creature"
  | "drink"
  | "meat"
  | "milk"
  | "other"
  | "plant"
  | "semifinished"
  | "snack";

export type ElementType = typeof elementsList[number];

export type ElementEntriesType = [ElementType, FoodType];

type ElementsType = { [key in ElementType]: FoodType };

type RecipesType = [[ElementType, ElementType], ElementType | ElementType[]][];

export type RecipesByElementType = {
  [key in ElementType]?: {
    [key in ElementType]?: ElementType | ElementType[];
  };
};

export const startElements: ElementType[] = [
  "animal",
  "earth",
  "furnace",
  "ice",
  "tool",
];

export const elementsList = [
  "animal",
  "earth",
  "furnace",
  "ice",
  "tool",
  "bacteria",
  "egg",
  "meat",
  "milk",
  "arable",
  "water",
  "boiling water",
  "omelette",
  "kebab",
  "burned something",
  "forcemeat",
  "kefir",
  "sour cream",
  "cheese",
  "boiled egg",
  "boiled meat",
  "condensed milk",
  "fish",
  "seed",
  "popcorn",
] as const;

export const allElements: ElementsType = {
  animal: "creature",
  earth: "other",
  furnace: "other",
  ice: "other",
  tool: "other",
  bacteria: "creature",
  egg: "animal",
  meat: "meat",
  milk: "milk",
  arable: "other",
  water: "drink",
  "boiling water": "drink",
  omelette: "animal",
  kebab: "meat",
  "burned something": "other",
  forcemeat: "semifinished",
  kefir: "milk",
  "sour cream": "milk",
  cheese: "milk",
  "boiled egg": "animal",
  "boiled meat": "meat",
  "condensed milk": "milk",
  fish: "creature",
  seed: "plant",
  popcorn: "snack",
};

const recipes: RecipesType = [
  [["animal", "earth"], "bacteria"],
  [
    ["animal", "tool"],
    ["egg", "meat", "milk"],
  ],
  [["earth", "tool"], "arable"],
  [["furnace", "ice"], "water"],
  [["furnace", "water"], "boiling water"],
  [["egg", "furnace"], "omelette"],
  [["furnace", "meat"], "kebab"],
  [["furnace", "omelette"], "burned something"],
  [["furnace", "kebab"], "burned something"],
  [["tool", "meat"], "forcemeat"],
  [["bacteria", "milk"], "kefir"],
  [["bacteria", "kefir"], "sour cream"],
  [["bacteria", "sour cream"], "cheese"],
  [["boiling water", "egg"], "boiled egg"],
  [["boiling water", "meat"], "boiled meat"],
  [["furnace", "milk"], "condensed milk"],
  [["animal", "water"], "fish"],
  [["earth", "water"], "seed"],
  [["furnace", "seed"], "popcorn"],
];

export const recipesByElement: RecipesByElementType = {};
recipes.forEach(([reagents, result]) => {
  if (!(reagents[0] in recipesByElement)) {
    recipesByElement[reagents[0]] = {};
  }
  const firstReagentDict = recipesByElement[reagents[0]] as {
    [key in ElementType]?: ElementType | ElementType[];
  };
  firstReagentDict[reagents[1]] = result;
  if (!(reagents[1] in recipesByElement)) {
    recipesByElement[reagents[1]] = {};
  }
  const secondReagentDict = recipesByElement[reagents[1]] as {
    [key in ElementType]?: ElementType | ElementType[];
  };
  secondReagentDict[reagents[0]] = result;
});
