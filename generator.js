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
  summary1 = `Followers of this faith worship <b>${faith.name}</b>, deity of <b>${faith.portfolio}</b>, who is believed to <b>${faith.origin}</b>. <b>${faith.structure}</b>. The religion's clergy is made up of <b>${faith.clergy}</b>.`;
  summary2 = `${faith.name} urges their followers to <b>${faith.stricture}</b>, and in return <b>${faith.function}</b>. The faith is important to the surrounding area because <b>${faith.importance}</b>. Followers of ${faith.name} want to <b>${faith.want}</b>.`;
  faith.summary = `<p>${summary1}</p> <p>${summary2}</p>`;
  return faith;
}

function SetDisplay(item) {
  content = item.summary;
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
