import { ElementType } from "recipes";
import earth from "assets/images/icons/earth.png";
import furnace from "assets/images/icons/furnace.png";
import ice from "assets/images/icons/ice.png";
import tool from "assets/images/icons/tool.png";
import animal from "assets/images/icons/animal.png";
import bacteria from "assets/images/icons/bacteria.png";
import egg from "assets/images/icons/egg.png";
import meat from "assets/images/icons/meat.png";
import milk from "assets/images/icons/milk.png";
import kefir from "assets/images/icons/kefir.png";
import sourCream from "assets/images/icons/sour cream.png";
import cheese from "assets/images/icons/cheese.png";
import water from "assets/images/icons/water.png";
import boilingWater from "assets/images/icons/boiling water.png";
import seed from "assets/images/icons/seed.png";
import popcorn from "assets/images/icons/popcorn.png";
import forcemeat from "assets/images/icons/forcemeat.png";
import kebab from "assets/images/icons/kebab.png";
import omelette from "assets/images/icons/omelette.png";
import fish from "assets/images/icons/fish.png";
import arable from "assets/images/icons/arable.png";
import boiledEgg from "assets/images/icons/boiled egg.png";
import boiledMeat from "assets/images/icons/boiled meat.png";
import condensedMilk from "assets/images/icons/condensed milk.png";
import burnedSomething from "assets/images/icons/burned something.png";

const images: { [key in ElementType]?: string } = {
  earth,
  furnace,
  ice,
  tool,
  animal,
  bacteria,
  egg,
  meat,
  milk,
  kefir,
  "sour cream": sourCream,
  cheese,
  water,
  "boiling water": boilingWater,
  seed,
  popcorn,
  forcemeat,
  kebab,
  omelette,
  fish,
  arable,
  "boiled egg": boiledEgg,
  "boiled meat": boiledMeat,
  "condensed milk": condensedMilk,
  "burned something": burnedSomething,
};

export default images;
