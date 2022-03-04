export type FoodType =
  | "animal"
  | "bakery"
  | "drink"
  | "meat"
  | "milk"
  | "other"
  | "plant"
  | "inedible"
  | "fastfood"
  | "vegan"
  | "sweet";

export type ElementType = typeof elementsList[number];

export type ElementEntriesType = [ElementType, FoodType];

type RecipesType = [[ElementType, ElementType], ElementType | ElementType[]][];

export type RecipesByElementType = {
  [key in ElementType]?: {
    [key in ElementType]?: ElementType | ElementType[];
  };
};

const getKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>;

export const startElements: ElementType[] = [
  "animal",
  "earth",
  "furnace",
  "ice",
  "tool",
];

export const allElements = {
  "burned something": "inedible", //--------
  reed: "plant", //-------------------------
  "fish soup": "animal", //-----------------
  koumiss: "milk", //-----------------------
  surströmming: "animal", //----------------
  bush: "plant", //-------------------------
  "cotton candy": "sweet", //---------------
  eggnog: "sweet", //-----------------------
  "ice tea": "drink", //--------------------
  kvass: "drink", //------------------------
  sushi: "animal", //-----------------------
  baklava: "sweet", //----------------------
  pilaf: "meat", //-------------------------
  muesli: "vegan", //-----------------------
  gozinaki: "sweet", //---------------------
  mead: "drink", //-------------------------
  gingerbread: "bakery", //-----------------
  manure: "inedible", //--------------------
  tree: "plant", //-------------------------
  fondue: "milk", //------------------------
  "creme brulee": "sweet", //---------------
  croissant: "bakery", //-------------------
  "hot-dog": "fastfood", //-----------------
  hamburger: "fastfood", //-----------------
  popcorn: "fastfood", //-------------------
  communion: "other", //--------------------
  beer: "drink", //-------------------------
  vodka: "drink", //------------------------
  brandy: "drink", //-----------------------
  liqueur: "drink", //----------------------
  cider: "drink", //------------------------
  soda: "drink", //-------------------------
  cola: "drink", //-------------------------
  "mulled wine": "drink", //----------------
  "ground coffee": "other", //--------------
  "cocoa powder": "other", //---------------
  "cocoa bean": "plant", //-----------------
  "coffee bean": "plant", //----------------
  shawerma: "fastfood", //------------------
  animal: "animal",
  earth: "inedible",
  furnace: "inedible",
  ice: "other",
  tool: "inedible",
  bacteria: "animal",
  egg: "animal",
  meat: "meat",
  milk: "milk",
  water: "drink",
  "boiling water": "drink",
  omelette: "animal",
  kebab: "fastfood",
  forcemeat: "meat",
  kefir: "milk",
  cream: "milk",
  cheese: "milk",
  "blue cheese": "milk",
  "boiled egg": "animal",
  roast: "meat",
  "condensed milk": "milk",
  milkshake: "drink",
  fish: "animal",
  seed: "plant",
  grass: "plant",
  sugar: "other",
  sausage: "meat",
  tea: "drink",
  cutlet: "meat",
  toffee: "sweet",
  "ice cream": "sweet",
  "fried fish": "animal",
  cereal: "plant",
  mojito: "drink",
  spices: "other",
  flower: "plant",
  caramel: "sweet",
  syrup: "sweet",
  "butter dough": "bakery",
  flour: "other",
  porridge: "vegan",
  berry: "vegan",
  sauce: "other",
  nut: "vegan",
  honey: "animal",
  candy: "sweet",
  cookie: "bakery",
  pie: "bakery",
  cake: "bakery",
  dough: "bakery",
  juice: "drink",
  wine: "drink",
  jam: "sweet",
  yogurt: "milk",
  marshmallow: "sweet",
  mayonnaise: "other",
  fruit: "vegan",
  "nut butter": "other",
  mustard: "other",
  topping: "other",
  bread: "bakery",
  pita: "bakery",
  baozi: "bakery",
  spaghetti: "bakery",
  noodles: "bakery",
  alcohol: "drink",
  cocoa: "drink",
  chocolate: "sweet",
  coffee: "drink",
  latte: "drink",
  vegetable: "vegan",
  toast: "bakery",
  sandwich: "fastfood",
  "hot chocolate": "drink",
  eskimo: "sweet",
  "chocolate bar": "sweet",
  muffin: "bakery",
  "french fries": "fastfood",
  salad: "vegan",
  soup: "vegan",
  ketchup: "other",
} as const;

export const elementsList = getKeys(allElements);

// todo burned something for all
const recipes: RecipesType = [
  [["animal", "earth"], "bacteria"],
  [
    ["animal", "tool"],
    ["egg", "meat", "milk"],
  ],
  [["furnace", "ice"], "water"],
  [["furnace", "water"], "boiling water"],
  [["egg", "furnace"], "omelette"],
  [["furnace", "meat"], "kebab"],
  // [["furnace", "omelette"], "burned something"],
  // [["furnace", "kebab"], "burned something"],
  // [["furnace", "cream"], "burned something"],
  // [["furnace", "boiled egg"], "burned something"],
  // [["furnace", "blue cheese"], "burned something"],
  // [["furnace", "roast"], "burned something"],
  [["tool", "meat"], "forcemeat"],
  [["bacteria", "milk"], "kefir"],
  [["bacteria", "kefir"], "cream"],
  [["bacteria", "cream"], "cheese"],
  [["bacteria", "cheese"], "blue cheese"],
  [["boiling water", "egg"], "boiled egg"],
  [["boiling water", "meat"], "roast"],
  [["furnace", "milk"], "condensed milk"],
  [["milk", "tool"], "milkshake"],
  [["animal", "water"], "fish"],
  [["earth", "water"], "seed"],
  [["seed", "water"], "reed"],
  [["earth", "seed"], "grass"],
  [["boiling water", "forcemeat"], "sausage"],
  [["boiling water", "fish"], "fish soup"],
  [["boiling water", "grass"], "tea"],
  [["forcemeat", "furnace"], "cutlet"],
  [["kefir", "tool"], "koumiss"],
  [["cheese", "furnace"], "fondue"],
  [["furnace", "condensed milk"], "toffee"],
  [["ice", "milkshake"], "ice cream"],
  [["fish", "furnace"], "fried fish"],
  [["bacteria", "fish"], "surströmming"],
  [["grass", "seed"], "cereal"],
  [["reed", "tool"], "sugar"],
  [["cereal", "furnace"], "popcorn"],
  [["animal", "grass"], "manure"],
  [["grass", "ice"], "mojito"],
  [["grass", "tool"], "spices"],
  [["grass", "water"], "bush"],
  [["grass", "manure"], "flower"],
  [["furnace", "sugar"], "caramel"],
  [["tool", "sugar"], "cotton candy"],
  [["egg", "sugar"], "eggnog"],
  [["sugar", "water"], "syrup"],
  [["dough", "sugar"], "butter dough"],
  [["ice", "tea"], "ice tea"],
  [["cereal", "tool"], "flour"],
  [
    ["bacteria", "cereal"],
    ["kvass", "alcohol"],
  ],
  [["boiling water", "cereal"], "porridge"],
  [["cereal", "fish"], "sushi"],
  [["bush", "manure"], "berry"],
  [["spices", "water"], "sauce"],
  [["bush", "water"], "tree"],
  [["bush", "seed"], "nut"],
  [["animal", "flower"], "honey"],
  [["caramel", "ice"], "candy"],
  [["caramel", "condensed milk"], "creme brulee"],
  [
    ["butter dough", "furnace"],
    ["croissant", "cookie"],
  ],
  [["butter dough", "honey"], "baklava"],
  [["butter dough", "berry"], "cake"],
  [["butter dough", "fruit"], "cake"],
  [["butter dough", "fruit"], "pie"],
  [["furnace", "ice tea"], "tea"],
  [["egg", "flour"], "dough"],
  [["alcohol", "kvass"], "beer"],
  [["meat", "porridge"], "pilaf"],
  [["berry", "tool"], "juice"],
  [["fruit", "tool"], "juice"],
  [["alcohol", "berry"], "wine"],
  [["berry", "boiling water"], "jam"],
  [["fruit", "boiling water"], "jam"],
  [["berry", "kefir"], "yogurt"],
  [["fruit", "kefir"], "yogurt"],
  [["berry", "egg"], "marshmallow"],
  [["fruit", "egg"], "marshmallow"],
  [["egg", "sauce"], "mayonnaise"],
  [
    ["seed", "tree"],
    ["cocoa bean", "coffee bean"],
  ],
  [["manure", "tree"], "fruit"],
  [["nut", "tool"], "nut butter"],
  [["nut", "porridge"], "muesli"],
  [["honey", "nut"], "gozinaki"],
  [["alcohol", "honey"], "mead"],
  [["cookie", "honey"], "gingerbread"],
  [["sauce", "seed"], "mustard"],
  [["sauce", "sugar"], "topping"],
  [["dough", "furnace"], "bread"],
  [["dough", "tool"], "pita"],
  [["dough", "forcemeat"], "baozi"],
  [["dough", "boiling water"], "spaghetti"],
  [["dough", "sausage"], "hot-dog"],
  [["dough", "cutlet"], "hamburger"],
  [["bread", "wine"], "communion"],
  [["spaghetti", "boiling water"], "noodles"],
  [["alcohol", "water"], "vodka"],
  [["alcohol", "wine"], "brandy"],
  [["alcohol", "syrup"], "liqueur"],
  [["alcohol", "fruit"], "cider"],
  [["bacteria", "water"], "soda"],
  [["soda", "syrup"], "cola"],
  [["furnace", "wine"], "mulled wine"],
  [["boiling water", "wine"], "mulled wine"],
  [["coffee bean", "tool"], "ground coffee"],
  [["cocoa bean", "tool"], "cocoa powder"],
  [["cocoa powder", "furnace"], "chocolate"],
  [["cocoa powder", "boiling water"], "cocoa"],
  [["ground coffee", "boiling water"], "coffee"],
  [["coffee", "milk"], "latte"],
  [["earth", "fruit"], "vegetable"],
  [["bread", "furnace"], "toast"],
  [["bread", "meat"], "sandwich"],
  [["bread", "cheese"], "sandwich"],
  [["bread", "blue cheese"], "sandwich"],
  [["bread", "sausage"], "sandwich"],
  [["bread", "cutlet"], "sandwich"],
  [["bread", "jam"], "sandwich"],
  [["bread", "nut butter"], "sandwich"],
  [["bread", "fried fish"], "sandwich"],
  [["toast", "meat"], "sandwich"],
  [["toast", "cheese"], "sandwich"],
  [["toast", "blue cheese"], "sandwich"],
  [["toast", "sausage"], "sandwich"],
  [["toast", "cutlet"], "sandwich"],
  [["toast", "jam"], "sandwich"],
  [["toast", "nut butter"], "sandwich"],
  [["toast", "fried fish"], "sandwich"],
  [["pita", "kebab"], "shawerma"],
  [["chocolate", "furnace"], "hot chocolate"],
  [["chocolate", "ice cream"], "eskimo"],
  [["chocolate", "nut"], "chocolate bar"],
  [["chocolate", "cake"], "muffin"],
  [["vegetable", "furnace"], "french fries"],
  [["vegetable", "tool"], "salad"],
  [["vegetable", "boiling water"], "soup"],
  [["vegetable", "sauce"], "ketchup"],
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

for (let reagent in recipesByElement) {
  const strictReagent = reagent as ElementType;
  const reagentDict = recipesByElement[strictReagent];
  if (reagentDict && !reagentDict?.furnace) {
    reagentDict.furnace = "burned something";
  }
}

for (let element in allElements) {
  const strictElement = element as ElementType;
  const furnaceDict = recipesByElement.furnace;
  if (furnaceDict && !(strictElement in furnaceDict)) {
    furnaceDict[strictElement] = "burned something";
  }
}
