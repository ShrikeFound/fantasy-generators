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

console.log("generator online!");

function GenerateFaith() {
  faith = {};
  faith.name = "Theus";
  faith.portfolio = Choose(faith_god_portfolio);
  faith.origin = Choose(faith_god_origin);
  faith.function = Choose(faith_god_function);
  faith.structure = Choose(faith_structure);
  faith.clergy = Choose(faith_clergy);
  faith.importance = Choose(faith_importance);
  faith.want = Choose(faith_want);

  return faith;
}

display = document.getElementById("display");
new_faith = GenerateFaith();
summary = `Followers of this faith worship ${faith.name}, deity of ${faith.portfolio}. ${faith.name} is believed to ${faith.origin}, and now ${faith.function}. 
${faith.structure}, with ${faith.clergy}. The faith is important to the surrounding area because ${faith.importance}. Followers of ${faith.name} want ${faith.want}`;

display.textContent = summary;
