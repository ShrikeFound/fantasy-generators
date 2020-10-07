//Who leads the faith?

var faith_structure = [
  `Each holy man or woman is the autonomous
  leader of their own branch of the sect, with
  however many followers they can gather.`,
  `There are multiple pontiffs, friendly or otherwise,
  with subordinate clergy obedient to their own
  pontiff and perhaps cooperative with others.`,
  `There is a single pontiff with a layer of upper
  clergy and temple heads beneath them, who
  have a layer of minor clergy serving them.`,
  `Individual congregations are independent, with
  their clergy subject to the consensus will of their
  parishoners.`,
  `Powerful lay believers fund temples that are
  subject to their family’s wishes, staffed by clergy
  supported by their funding.`,
  `There is no official clergy; some believers may
  take up special roles or provide teaching, but
  they are not qualitatively different from others.`,
  `The church is entirely part of the secular structure
  of the land, its clergy no more than officials
  appointed by the government to their roles.
  `,
  2,
];

var faith_god_origin = [
  "It’s a deified ancestor - king or progenitor",
  "It’s a legendary historical hero or teacher",
  "It’s an abstract principle reified as an entity",
  "It simply always existed since creation",
  "It was an apotheosized sorcerer",
  "It’s the genius of a particular land or location",
  "It was an Outsider or alien from beyond",
  "It was a personified natural phenomenon",
  "It was another faith’s saint turned into a god",
  "It was a tamed or placated supernatural entity",
  "It was an artificial construct built by humans",
  2,
];

var faith_importance = [
  "It’s the main purveyor of healing blessings",
  "It provides magical favors to the faithful",
  "It’s locked in conflict with a major local power",
  "It supports something the PCs love or hate",
  "It’s the state faith or otherwise legally important",
  "It regularly hires people to do work for it",
  "It’s trying to expand and needs help",
  "It’s a huge economic player in the area",
  "It plots secret sinister evils against the land",
  "It has influence over important locals",
];

var faith_want = [
  "Crush its religious rivals in the area",
  "Destroy a heretical but powerful sub-sect",
  "Expand the faith to a foreign land or people",
  "Recover holy land or a sacred site",
  "Obtain vast material wealth for the faith",
  "Depose a hostile royal house or government",
  "Smash a specific enemy faith or group",
  "Embody their god with a mighty ritual",
  "Erect a huge and imposing temple complex",
  "Perform a tremendously expensive rite",
  "Strengthen or protect its devout believers",
  "Stop a rival from crushing its other religions in the area",
  "Stop a rival from destroying a heretical but powerful sub-sect",
  "Stop a rival from expanding the faith to a foreign land or people",
  "Stop a rival from recovering holy land or a sacred site",
  "Stop a rival from obtaining vast material wealth for the faith",
  "Stop a rival from deposing a hostile royal house or government",
  "Stop a rival from smashing a specific enemy faith or group",
  "Stop a rival from embodying their god with a mighty ritual",
  "Stop a rival from erecting a huge and imposing temple complex",
  "Stop a rival from performing a tremendously expensive rite",
  "Stop a rival from strengthening or protecting its devout believers",
];

var faith_clergy = [
  `Just ritual technicians trained in complex rites,
with no special moral qualities.`,

  `Chosen from specific bloodlines or groups and
trained to serve the faithful.`,

  `Experts in some sphere related to the god’s
portfolio or nature, though trained in ritual.`,

  `Sorcerers who serve the god as part of their
magical studies or efforts.`,

  `Common believers chosen by their peers for
their technical skill and good moral qualities.`,

  `Isolated ascetics or ritually-separated persons
expected to keep a distance from the world.`,

  `Individuals who step forward and are accepted
for their qualities or technical skills as priests.`,

  `The wealthier believers who can afford to keep
up the expensive or demanding ritual practice.`,
];

var faith_god_function = [
  "It’s the war god or patron of those who fight",
  "It’s the favorite god of the ruling class",
  "It’s the patron of an important profession",
  "It’s a devil-figure that must be placated",
  "It provides healing or protection from danger",
  "It’s a patron of an illegal but inevitable trade",
  "It hallows the law and consecrates oaths",
  "It’s flatly illegal and hated by most",
  "It’s the protector of an ethnic minority",
  "It provides good harvests or human fertility",
  "It’s the patron of the former rulers of the land",
  "It guards particular places within the land",
  "It provides wisdom and insight at need",
  "It gives good luck to its petitioners",
  "It’s a protector of the weak and humble",
  "It empowers those seeking revenge for wrongs",
  "It bestows material wealth upon petitioners",
  "It protects the soul in the afterlife",
  "It explains the creation and order of the world",
  "It prevents some type of common disaster",
];

var faith_god_portfolio = [
  "A Human Vice",
  "A Local Terrain Type",
  "A Kind of Demihuman",
  "Beasts",
  "Agriculture",
  "Beauty or Sex",
  "Cities",
  "Cosmic Law",
  "Commerce",
  "Creation",
  "Crafting",
  "Death",
  "Deception",
  "Fertility",
  "Healing",
  "Forests",
  "Justice",
  "Magic",
  "Luck",
  "Mountains",
  "Marriage or Family",
  "Night",
  "Music",
  "One or More Seasons",
  "Prophecy",
  "Pain",
  "Protection",
  "Sea or Rivers",
  "Revenge",
  "Sky",
  "Ruling",
  "Storms or Rain",
  "Theft or Crime",
  "Sun, Moon, or Stars",
  "Travel or Roads",
  "The Underworld",
  "War",
  "Time",
  "Wisdom",
  "Untamed Nature",
];

var faith_stricture = [
  "Never/always associate with certain types",
  "Never eat a particular common food type",
  "Give a significant tithe regularly",
  "Make particular sacrifices at certain times",
  "Revere/hate a class or group of people",
  "Forbid a certain common profession or role",
  "Forbid an activity common to society",
  "Give secular obedience to the clergy",
  "Pray at certain fixed places or times",
  "Never/always trade with certain sorts",
  "Never/always live in certain places",
  "Marry exclusively within the faith",
  "Do something society finds repugnant",
  "Hold certain places to be taboo",
  "Hide the inner faith’s teachings from outsiders",
  "Make sacrifices that society finds hateful",
  "Never/always make war on certain types",
  "Honor/degrade a particular profession",
  "Make certain pilgrimages to holy places",
  "Never/always cooperate with a certain faith",
];

function Choose(array, topic) {
  var idx = Math.floor(Math.random() * array.length);
  var result = topic + ": ";
  if (idx == array.length - 1 && typeof array[idx] == "number") {
    var indices = [];
    for (let i = 0; i < array[idx]; i++) {
      temp = array.length - 1;
      while (temp == array.length - 1 && !indices.includes(temp)) {
        temp = Math.floor(Math.random() * array.length);
      }
      indices.push(temp);
      result = result.concat("\n", array[temp]);
    }
  } else {
    result = result.concat(array[idx]);
  }
  return result;
}

// for (let i = 0; i < 20; i++) {
//   console.log("\n test " + i);
//   console.log(Choose(faith_structure, "structure"));
//   console.log(Choose(faith_god_origin, "origin"));
//   console.log(Choose(faith_importance, "importance"));
//   console.log(Choose(faith_want, "want"));
//   console.log(Choose(faith_clergy, "clergy"));
//   console.log(Choose(faith_god_function, "function"));
//   console.log(Choose(faith_god_portfolio, "portfolio"));
//   console.log(Choose(faith_stricture, "stricture"));
// }
