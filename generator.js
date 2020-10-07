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
  faith.stricture = Choose(faith_stricture);
  faith.clergy = Choose(faith_clergy);
  faith.importance = Choose(faith_importance);
  faith.want = Choose(faith_want);
  summary1 = `Followers of this faith worship ${faith.name}, deity of ${faith.portfolio}, who is believed to ${faith.origin}. ${faith.structure}. The religion's clergy is made up of ${faith.clergy}.`;
  summary2 = `${faith.name} urges their followers to ${faith.stricture}, and in return ${faith.function}. The faith is important to the surrounding area because ${faith.importance}. Followers of ${faith.name} want to ${faith.want}.`;
  faith.content = `<p>${summary1}</p> <p>${summary2}</p>`;
  return faith;
}

function SetDisplay(item) {
  content = item.content;
  display.innerHTML = content;
}

display = document.getElementById("display");

new_faith = GenerateFaith();
SetDisplay(new_faith);

function Regenerate() {
  new_faith = GenerateFaith();
  SetDisplay(new_faith);
  console.log("regenerated.");
}
