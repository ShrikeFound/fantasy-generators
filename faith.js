//Who leads the faith?

faith_structure = [
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

faith_god_origin = [
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

faith_importance = [
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

function Choose(array) {
  var idx = Math.floor(Math.random() * array.length);
  var result = "";
  if (idx == array.length - 1 && typeof (array[idx] == "number")) {
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
    result = array[idx];
  }
  return result;
}

console.log(Choose(faith_structure));
console.log(Choose(faith_god_origin));
console.log(Choose(faith_importance));
