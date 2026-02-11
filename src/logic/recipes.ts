import { foodTypesMap } from "./foodTypes";
import { Element, RecipesType, RecipesByElementType } from "./types";

const recipes: RecipesType = [
  [[Element.Animal, Element.Earth], Element.Bacteria],
  [
    [Element.Animal, Element.Tool],
    [Element.Egg, Element.Meat, Element.Milk],
  ],
  [[Element.Furnace, Element.Ice], Element.Water],
  [[Element.Furnace, Element.Water], Element.BoilingWater],
  [[Element.Egg, Element.Furnace], Element.Omelette],
  [[Element.Furnace, Element.Meat], Element.Kebab],
  [[Element.Tool, Element.Meat], Element.Forcemeat],
  [[Element.Bacteria, Element.Milk], Element.Kefir],
  [[Element.Bacteria, Element.Kefir], Element.Cream],
  [[Element.Bacteria, Element.Cream], Element.Cheese],
  [[Element.Bacteria, Element.Cheese], Element.BlueCheese],
  [[Element.BoilingWater, Element.Egg], Element.BoiledEgg],
  [[Element.BoilingWater, Element.Meat], Element.Roast],
  [[Element.Furnace, Element.Milk], Element.CondensedMilk],
  [[Element.Milk, Element.Tool], Element.Milkshake],
  [[Element.Animal, Element.Water], Element.Fish],
  [[Element.Earth, Element.Water], Element.Seed],
  [[Element.Seed, Element.Water], Element.Reed],
  [[Element.Earth, Element.Seed], Element.Grass],
  [[Element.BoilingWater, Element.Forcemeat], Element.Sausage],
  [[Element.BoilingWater, Element.Fish], Element.FishSoup],
  [[Element.BoilingWater, Element.Grass], Element.Tea],
  [[Element.Forcemeat, Element.Furnace], Element.Cutlet],
  [[Element.Kefir, Element.Tool], Element.Koumiss],
  [[Element.Cheese, Element.Furnace], Element.Fondue],
  [[Element.Furnace, Element.CondensedMilk], Element.Toffee],
  [[Element.Ice, Element.Milkshake], Element.IceCream],
  [[Element.Fish, Element.Furnace], Element.FriedFish],
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
  [[Element.Tool, Element.Sugar], Element.CottonCandy],
  [[Element.Egg, Element.Sugar], Element.Eggnog],
  [[Element.Sugar, Element.Water], Element.Syrup],
  [[Element.Dough, Element.Sugar], Element.ButterDough],
  [[Element.Ice, Element.Tea], Element.IceTea],
  [[Element.Cereal, Element.Tool], Element.Flour],
  [
    [Element.Bacteria, Element.Cereal],
    [Element.Kvass, Element.Alcohol],
  ],
  [[Element.BoilingWater, Element.Cereal], Element.Porridge],
  [[Element.Cereal, Element.Fish], Element.Sushi],
  [[Element.Bush, Element.Manure], Element.Berry],
  [[Element.Spices, Element.Water], Element.Sauce],
  [[Element.Bush, Element.Water], Element.Tree],
  [[Element.Bush, Element.Seed], Element.Nut],
  [[Element.Animal, Element.Flower], Element.Honey],
  [[Element.Caramel, Element.Ice], Element.Candy],
  [[Element.Caramel, Element.CondensedMilk], Element.CremeBrulee],
  [
    [Element.ButterDough, Element.Furnace],
    [Element.Croissant, Element.Cookie],
  ],
  [[Element.ButterDough, Element.Honey], Element.Baklava],
  [[Element.ButterDough, Element.Berry], Element.Cake],
  [[Element.ButterDough, Element.Fruit], Element.Cake],
  [[Element.ButterDough, Element.Fruit], Element.Pie],
  [[Element.Furnace, Element.IceTea], Element.Tea],
  [[Element.Egg, Element.Flour], Element.Dough],
  [[Element.Alcohol, Element.Kvass], Element.Beer],
  [[Element.Meat, Element.Porridge], Element.Pilaf],
  [[Element.Berry, Element.Tool], Element.Juice],
  [[Element.Fruit, Element.Tool], Element.Juice],
  [[Element.Alcohol, Element.Berry], Element.Wine],
  [[Element.Berry, Element.BoilingWater], Element.Jam],
  [[Element.Fruit, Element.BoilingWater], Element.Jam],
  [[Element.Berry, Element.Kefir], Element.Yogurt],
  [[Element.Fruit, Element.Kefir], Element.Yogurt],
  [[Element.Berry, Element.Egg], Element.Marshmallow],
  [[Element.Fruit, Element.Egg], Element.Marshmallow],
  [[Element.Egg, Element.Sauce], Element.Mayonnaise],
  [
    [Element.Seed, Element.Tree],
    [Element.CocoaBean, Element.CoffeeBean],
  ],
  [[Element.Manure, Element.Tree], Element.Fruit],
  [[Element.Nut, Element.Tool], Element.NutButter],
  [[Element.Nut, Element.Porridge], Element.Muesli],
  [[Element.Honey, Element.Nut], Element.Gozinaki],
  [[Element.Alcohol, Element.Honey], Element.Mead],
  [[Element.Cookie, Element.Honey], Element.Gingerbread],
  [[Element.Sauce, Element.Seed], Element.Mustard],
  [[Element.Sauce, Element.Sugar], Element.Topping],
  [[Element.Dough, Element.Furnace], Element.Bread],
  [[Element.Dough, Element.Tool], Element.Pita],
  [[Element.Dough, Element.Forcemeat], Element.Baozi],
  [[Element.Dough, Element.BoilingWater], Element.Spaghetti],
  [[Element.Dough, Element.Sausage], Element.HotDog],
  [[Element.Dough, Element.Cutlet], Element.Hamburger],
  [[Element.Bread, Element.Wine], Element.Communion],
  [[Element.Spaghetti, Element.BoilingWater], Element.Noodles],
  [[Element.Alcohol, Element.Water], Element.Vodka],
  [[Element.Alcohol, Element.Wine], Element.Brandy],
  [[Element.Alcohol, Element.Syrup], Element.Liqueur],
  [[Element.Alcohol, Element.Fruit], Element.Cider],
  [[Element.Bacteria, Element.Water], Element.Soda],
  [[Element.Soda, Element.Syrup], Element.Cola],
  [[Element.Furnace, Element.Wine], Element.MulledWine],
  [[Element.BoilingWater, Element.Wine], Element.MulledWine],
  [[Element.CoffeeBean, Element.Tool], Element.GroundCoffee],
  [[Element.CocoaBean, Element.Tool], Element.CocoaPowder],
  [[Element.CocoaPowder, Element.Furnace], Element.Chocolate],
  [[Element.CocoaPowder, Element.BoilingWater], Element.Cocoa],
  [[Element.GroundCoffee, Element.BoilingWater], Element.Coffee],
  [[Element.Coffee, Element.Milk], Element.Latte],
  [[Element.Earth, Element.Fruit], Element.Vegetable],
  [[Element.Bread, Element.Furnace], Element.Toast],
  [[Element.Bread, Element.Meat], Element.Sandwich],
  [[Element.Bread, Element.Cheese], Element.Sandwich],
  [[Element.Bread, Element.BlueCheese], Element.Sandwich],
  [[Element.Bread, Element.Sausage], Element.Sandwich],
  [[Element.Bread, Element.Cutlet], Element.Sandwich],
  [[Element.Bread, Element.Jam], Element.Sandwich],
  [[Element.Bread, Element.NutButter], Element.Sandwich],
  [[Element.Bread, Element.FriedFish], Element.Sandwich],
  [[Element.Toast, Element.Meat], Element.Sandwich],
  [[Element.Toast, Element.Cheese], Element.Sandwich],
  [[Element.Toast, Element.BlueCheese], Element.Sandwich],
  [[Element.Toast, Element.Sausage], Element.Sandwich],
  [[Element.Toast, Element.Cutlet], Element.Sandwich],
  [[Element.Toast, Element.Jam], Element.Sandwich],
  [[Element.Toast, Element.NutButter], Element.Sandwich],
  [[Element.Toast, Element.FriedFish], Element.Sandwich],
  [[Element.Pita, Element.Kebab], Element.Shawerma],
  [[Element.Chocolate, Element.Furnace], Element.HotChocolate],
  [[Element.Chocolate, Element.IceCream], Element.Eskimo],
  [[Element.Chocolate, Element.Nut], Element.ChocolateBar],
  [[Element.Chocolate, Element.Cake], Element.Muffin],
  [[Element.Vegetable, Element.Furnace], Element.FrenchFries],
  [[Element.Vegetable, Element.Tool], Element.Salad],
  [[Element.Vegetable, Element.BoilingWater], Element.Soup],
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
    reagentDict.furnace = Element.BurnedSomething;
  }
}

for (let element in foodTypesMap) {
  const strictElement = element as Element;
  const furnaceDict = recipesByElement.furnace;
  if (furnaceDict && !(strictElement in furnaceDict)) {
    furnaceDict[strictElement] = Element.BurnedSomething;
  }
}
