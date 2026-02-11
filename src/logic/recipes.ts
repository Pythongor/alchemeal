import { foodTypesMap } from "./foodTypes";
import { Element, RecipesType, RecipesByElementType } from "./types";

const recipes: RecipesType = [
  [[Element.Animal, Element.Earth], Element.Bacteria],
  [
    [Element.Animal, Element.Tool],
    [Element.Egg, Element.Meat, Element.Milk],
  ],
  [[Element.Furnace, Element.Ice], Element.Water],
  [[Element.Furnace, Element.Water], Element.Boiling_Water],
  [[Element.Egg, Element.Furnace], Element.Omelette],
  [[Element.Furnace, Element.Meat], Element.Kebab],
  [[Element.Tool, Element.Meat], Element.Forcemeat],
  [[Element.Bacteria, Element.Milk], Element.Kefir],
  [[Element.Bacteria, Element.Kefir], Element.Cream],
  [[Element.Bacteria, Element.Cream], Element.Cheese],
  [[Element.Bacteria, Element.Cheese], Element.Blue_Cheese],
  [[Element.Boiling_Water, Element.Egg], Element.Boiled_Egg],
  [[Element.Boiling_Water, Element.Meat], Element.Roast],
  [[Element.Furnace, Element.Milk], Element.Condensed_Milk],
  [[Element.Milk, Element.Tool], Element.Milkshake],
  [[Element.Animal, Element.Water], Element.Fish],
  [[Element.Earth, Element.Water], Element.Seed],
  [[Element.Seed, Element.Water], Element.Reed],
  [[Element.Earth, Element.Seed], Element.Grass],
  [[Element.Boiling_Water, Element.Forcemeat], Element.Sausage],
  [[Element.Boiling_Water, Element.Fish], Element.Fish_Soup],
  [[Element.Boiling_Water, Element.Grass], Element.Tea],
  [[Element.Forcemeat, Element.Furnace], Element.Cutlet],
  [[Element.Kefir, Element.Tool], Element.Koumiss],
  [[Element.Cheese, Element.Furnace], Element.Fondue],
  [[Element.Furnace, Element.Condensed_Milk], Element.Toffee],
  [[Element.Ice, Element.Milkshake], Element.Ice_Cream],
  [[Element.Fish, Element.Furnace], Element.Fried_Fish],
  [[Element.Bacteria, Element.Fish], Element.Surstromming],
  [[Element.Grass, Element.Seed], Element.Cereal],
  [[Element.Reed, Element.Tool], Element.Sugar],
  [[Element.Cereal, Element.Furnace], Element.Popcorn],
  [[Element.Animal, Element.Grass], Element.Manure],
  [[Element.Grass, Element.Ice], Element.Mojito],
  [[Element.Grass, Element.Tool], Element.Spices],
  [[Element.Grass, Element.Water], Element.Bush],
  [[Element.Grass, Element.Manure], Element.Flower],
  [[Element.Furnace, Element.Sugar], Element.Caramel],
  [[Element.Tool, Element.Sugar], Element.Cotton_Candy],
  [[Element.Egg, Element.Sugar], Element.Eggnog],
  [[Element.Sugar, Element.Water], Element.Syrup],
  [[Element.Dough, Element.Sugar], Element.Butter_Dough],
  [[Element.Ice, Element.Tea], Element.Ice_Tea],
  [[Element.Cereal, Element.Tool], Element.Flour],
  [
    [Element.Bacteria, Element.Cereal],
    [Element.Kvass, Element.Alcohol],
  ],
  [[Element.Boiling_Water, Element.Cereal], Element.Porridge],
  [[Element.Cereal, Element.Fish], Element.Sushi],
  [[Element.Bush, Element.Manure], Element.Berry],
  [[Element.Spices, Element.Water], Element.Sauce],
  [[Element.Bush, Element.Water], Element.Tree],
  [[Element.Bush, Element.Seed], Element.Nut],
  [[Element.Animal, Element.Flower], Element.Honey],
  [[Element.Caramel, Element.Ice], Element.Candy],
  [[Element.Caramel, Element.Condensed_Milk], Element.Creme_Brulee],
  [
    [Element.Butter_Dough, Element.Furnace],
    [Element.Croissant, Element.Cookie],
  ],
  [[Element.Butter_Dough, Element.Honey], Element.Baklava],
  [[Element.Butter_Dough, Element.Berry], Element.Cake],
  [[Element.Butter_Dough, Element.Fruit], Element.Cake],
  [[Element.Butter_Dough, Element.Fruit], Element.Pie],
  [[Element.Furnace, Element.Ice_Tea], Element.Tea],
  [[Element.Egg, Element.Flour], Element.Dough],
  [[Element.Alcohol, Element.Kvass], Element.Beer],
  [[Element.Meat, Element.Porridge], Element.Pilaf],
  [[Element.Berry, Element.Tool], Element.Juice],
  [[Element.Fruit, Element.Tool], Element.Juice],
  [[Element.Alcohol, Element.Berry], Element.Wine],
  [[Element.Berry, Element.Boiling_Water], Element.Jam],
  [[Element.Fruit, Element.Boiling_Water], Element.Jam],
  [[Element.Berry, Element.Kefir], Element.Yogurt],
  [[Element.Fruit, Element.Kefir], Element.Yogurt],
  [[Element.Berry, Element.Egg], Element.Marshmallow],
  [[Element.Fruit, Element.Egg], Element.Marshmallow],
  [[Element.Egg, Element.Sauce], Element.Mayonnaise],
  [
    [Element.Seed, Element.Tree],
    [Element.Cocoa_Bean, Element.Coffee_Bean],
  ],
  [[Element.Manure, Element.Tree], Element.Fruit],
  [[Element.Nut, Element.Tool], Element.Nut_Butter],
  [[Element.Nut, Element.Porridge], Element.Muesli],
  [[Element.Honey, Element.Nut], Element.Gozinaki],
  [[Element.Alcohol, Element.Honey], Element.Mead],
  [[Element.Cookie, Element.Honey], Element.Gingerbread],
  [[Element.Sauce, Element.Seed], Element.Mustard],
  [[Element.Sauce, Element.Sugar], Element.Topping],
  [[Element.Dough, Element.Furnace], Element.Bread],
  [[Element.Dough, Element.Tool], Element.Pita],
  [[Element.Dough, Element.Forcemeat], Element.Baozi],
  [[Element.Dough, Element.Boiling_Water], Element.Spaghetti],
  [[Element.Dough, Element.Sausage], Element.Hot_Dog],
  [[Element.Dough, Element.Cutlet], Element.Hamburger],
  [[Element.Bread, Element.Wine], Element.Communion],
  [[Element.Spaghetti, Element.Boiling_Water], Element.Noodles],
  [[Element.Alcohol, Element.Water], Element.Vodka],
  [[Element.Alcohol, Element.Wine], Element.Brandy],
  [[Element.Alcohol, Element.Syrup], Element.Liqueur],
  [[Element.Alcohol, Element.Fruit], Element.Cider],
  [[Element.Bacteria, Element.Water], Element.Soda],
  [[Element.Soda, Element.Syrup], Element.Cola],
  [[Element.Furnace, Element.Wine], Element.Mulled_Wine],
  [[Element.Boiling_Water, Element.Wine], Element.Mulled_Wine],
  [[Element.Coffee_Bean, Element.Tool], Element.Ground_Coffee],
  [[Element.Cocoa_Bean, Element.Tool], Element.Cocoa_Powder],
  [[Element.Cocoa_Powder, Element.Furnace], Element.Chocolate],
  [[Element.Cocoa_Powder, Element.Boiling_Water], Element.Cocoa],
  [[Element.Ground_Coffee, Element.Boiling_Water], Element.Coffee],
  [[Element.Coffee, Element.Milk], Element.Latte],
  [[Element.Earth, Element.Fruit], Element.Vegetable],
  [[Element.Bread, Element.Furnace], Element.Toast],
  [[Element.Bread, Element.Meat], Element.Sandwich],
  [[Element.Bread, Element.Cheese], Element.Sandwich],
  [[Element.Bread, Element.Blue_Cheese], Element.Sandwich],
  [[Element.Bread, Element.Sausage], Element.Sandwich],
  [[Element.Bread, Element.Cutlet], Element.Sandwich],
  [[Element.Bread, Element.Jam], Element.Sandwich],
  [[Element.Bread, Element.Nut_Butter], Element.Sandwich],
  [[Element.Bread, Element.Fried_Fish], Element.Sandwich],
  [[Element.Toast, Element.Meat], Element.Sandwich],
  [[Element.Toast, Element.Cheese], Element.Sandwich],
  [[Element.Toast, Element.Blue_Cheese], Element.Sandwich],
  [[Element.Toast, Element.Sausage], Element.Sandwich],
  [[Element.Toast, Element.Cutlet], Element.Sandwich],
  [[Element.Toast, Element.Jam], Element.Sandwich],
  [[Element.Toast, Element.Nut_Butter], Element.Sandwich],
  [[Element.Toast, Element.Fried_Fish], Element.Sandwich],
  [[Element.Pita, Element.Kebab], Element.Shawerma],
  [[Element.Chocolate, Element.Furnace], Element.Hot_Chocolate],
  [[Element.Chocolate, Element.Ice_Cream], Element.Eskimo],
  [[Element.Chocolate, Element.Nut], Element.Chocolate_Bar],
  [[Element.Chocolate, Element.Cake], Element.Muffin],
  [[Element.Vegetable, Element.Furnace], Element.French_Fries],
  [[Element.Vegetable, Element.Tool], Element.Salad],
  [[Element.Vegetable, Element.Boiling_Water], Element.Soup],
  [[Element.Vegetable, Element.Sauce], Element.Ketchup],
];

export const recipesByElement: RecipesByElementType = {};

recipes.forEach(([reagents, result]) => {
  if (!(reagents[0] in recipesByElement)) {
    recipesByElement[reagents[0]] = {};
  }
  const firstReagentDict = recipesByElement[reagents[0]] as {
    [key in Element]?: Element | Element[];
  };
  firstReagentDict[reagents[1]] = result;
  if (!(reagents[1] in recipesByElement)) {
    recipesByElement[reagents[1]] = {};
  }
  const secondReagentDict = recipesByElement[reagents[1]] as {
    [key in Element]?: Element | Element[];
  };
  secondReagentDict[reagents[0]] = result;
});

for (let reagent in recipesByElement) {
  const strictReagent = reagent as Element;
  const reagentDict = recipesByElement[strictReagent];
  if (reagentDict && !reagentDict?.furnace) {
    reagentDict.furnace = Element.Burned_Something;
  }
}

for (let element in foodTypesMap) {
  const strictElement = element as Element;
  const furnaceDict = recipesByElement.furnace;
  if (furnaceDict && !(strictElement in furnaceDict)) {
    furnaceDict[strictElement] = Element.Burned_Something;
  }
}
