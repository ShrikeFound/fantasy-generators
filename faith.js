//Who leads the faith?

var faith_structure = [
  "Each holy man or woman is the autonomous leader of their own branch of the sect, with however many followers they can gather",
  "There are multiple pontiffs, friendly or otherwise, with subordinate clergy obedient to their own pontiff and perhaps cooperative with others",
  "There is a single pontiff with a layer of upper clergy and temple heads beneath them, who have a layer of minor clergy serving them",
  "Individual congregations are independent, with their clergy subject to the consensus will of their parishoners",
  "Powerful lay believers fund temples that are subject to their family’s wishes, staffed by clergy supported by their funding",
  "There is no official clergy; some believers may take up special roles or provide teaching, but they are not qualitatively different from others",
  "The church is entirely part of the secular structure of the land, its clergy no more than officials appointed by the government to their roles",
  2,
];

var faith_god_origin = [
  "be a deified ancestor - king or progenitor",
  "be a legendary historical hero or teacher",
  "be an abstract principle reified as an entity",
  "have simply always existed since creation",
  "have been an apotheosized sorcerer",
  "be the genius of a particular land or location",
  "have been an Outsider or alien from beyond",
  "have been a personified natural phenomenon",
  "have been another faith’s saint turned into a god",
  "have been a tamed or placated supernatural entity",
  "have been an artificial construct built by humans",
  2,
];

var faith_importance = [
  "it’s the main purveyor of healing blessings",
  "it provides magical favors to the faithful",
  "it’s locked in conflict with a major local power",
  "it supports something the PCs love or hate",
  "it’s the state faith or otherwise legally important",
  "it regularly hires people to do work for it",
  "it’s trying to expand and needs help",
  "it’s a huge economic player in the area",
  "it plots secret sinister evils against the land",
  "it has influence over important locals",
];

var faith_want = [
  "crush its religious rivals in the area",
  "destroy a heretical but powerful sub-sect",
  "expand the faith to a foreign land or people",
  "recover holy land or a sacred site",
  "obtain vast material wealth for the faith",
  "depose a hostile royal house or government",
  "smash a specific enemy faith or group",
  "embody their god with a mighty ritual",
  "erect a huge and imposing temple complex",
  "perform a tremendously expensive rite",
  "strengthen or protect its devout believers",
  "stop a rival from crushing its other religions in the area",
  "stop a rival from destroying a heretical but powerful sub-sect",
  "stop a rival from expanding the faith to a foreign land or people",
  "stop a rival from recovering holy land or a sacred site",
  "stop a rival from obtaining vast material wealth for the faith",
  "stop a rival from deposing a hostile royal house or government",
  "stop a rival from smashing a specific enemy faith or group",
  "stop a rival from embodying their god with a mighty ritual",
  "stop a rival from erecting a huge and imposing temple complex",
  "stop a rival from performing a tremendously expensive rite",
  "stop a rival from strengthening or protecting its devout believers",
];

var faith_clergy = [
  `just ritual technicians trained in complex rites,
with no special moral qualities`,

  `chosen from specific bloodlines or groups and
trained to serve the faithful`,

  `experts in some sphere related to the god’s
portfolio or nature, though trained in ritual`,

  `sorcerers who serve the god as part of their
magical studies or efforts`,

  `common believers chosen by their peers for
their technical skill and good moral qualities`,

  `isolated ascetics or ritually-separated persons
expected to keep a distance from the world`,

  `individuals who step forward and are accepted
for their qualities or technical skills as priests`,

  `the wealthier believers who can afford to keep
up the expensive or demanding ritual practice`,
];

var faith_god_function = [
  "they are the war god or patron of those who fight",
  "they are the favorite god of the ruling class",
  "they are the patron of an important profession",
  "they are a monstrous figure that must be placated",
  "they provide healing or protection from danger",
  "they are a patron of an illegal but inevitable trade",
  "they hallow the law and consecrates oaths",
  "they are flatly illegal and hated by most",
  "they are the protector of an ethnic minority",
  "they provide good harvests or human fertility",
  "they are the patron of the former rulers of the land",
  "they guard particular places within the land",
  "they provide wisdom and insight at need",
  "they give good luck to their petitioners",
  "they are a protector of the weak and humble",
  "they empower those seeking revenge for wrongs",
  "they bestow material wealth upon petitioners",
  "they protect the soul in the afterlife",
  "they explain the creation and order of the world",
  "they prevent some type of common disaster",
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
  "never/always associate with certain types",
  "never eat a particular common food type",
  "give a significant tithe regularly",
  "make particular sacrifices at certain times",
  "revere/hate a class or group of people",
  "forbid a certain common profession or role",
  "forbid an activity common to society",
  "give secular obedience to the clergy",
  "pray at certain fixed places or times",
  "never/always trade with certain sorts",
  "never/always live in certain places",
  "marry exclusively within the faith",
  "do something society finds repugnant",
  "hold certain places to be taboo",
  "hide the inner faith’s teachings from outsiders",
  "make sacrifices that society finds hateful",
  "never/always make war on certain types",
  "honor/degrade a particular profession",
  "make certain pilgrimages to holy places",
  "never/always cooperate with a certain faith",
];

function Choose(array, topic) {
  var idx = Math.floor(Math.random() * array.length);
  if (topic) {
    var result = topic + ": ";
  } else {
    result = "";
  }

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

console.log("faith online!");
