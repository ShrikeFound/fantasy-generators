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

function Choose(array) {
  var idx = Math.floor(Math.random() * array.length);
  var result = "";
  if (idx == array.length - 1) {
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
