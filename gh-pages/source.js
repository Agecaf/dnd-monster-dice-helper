
let rollBtnId = 0;
let monsterId = 0;
let healthId = 0;


function textToMonster(src){
  // Split src by lines
   const lines = src.split(/\r\n|\r|\n/);

   let out = "";

   lines.forEach((line) => { out += parseLine(line) } )

   return `<div><div>
${out} </div></div>`;

}


function parseLine(l) {
  let surroundByParagraph = true;
  if (l == "") {
    l = "<br>";
    surroundByParagraph = false;
  }

  // Sub Title
  if (l.startsWith("##")) {

    let parts = l.substring(2).split("#");

    l = `<h4><span class="cool-font"> ${parts[0]}</span> ${parts[1] ?? ""} </h4>`;
    surroundByParagraph = false;

  // Title, break monsters
  } else if (l.startsWith("#")) {

    // Id for the block
    let id = `mon${monsterId}`;
    monsterId++;

    // Finds the parts of the title.
    let parts = l.substring(1).split('#')

    l = `</div></div>
<div class="uk-card uk-card-default uk-card-body">
<h3><span class="uk-sortable-handle" uk-icon="table"></span>
<span class="cool-font">${parts[0]} </span> ${parts[1] ?? ""} </h3>
${parts[2]? "<p>" + parts[2] + "</p>" : ""}
<div class="uk-card-badge" uk-icon="more" uk-toggle="#${id}-body"></div>
<div id="${id}-body">
`;

    surroundByParagraph = false;
  }

  // Matches beginning of line being the feature name.
  if (surroundByParagraph) {
    l = l.replace(/(.*?):/, `<span class="feature">$1</span>:`)
  }

  // Matches [...] to add an input, for note taking.
  l = l.replace(/\[\.\.\.\]/g,
    "<input type='text' class='uk-input uk-form-small'>")

  // Matches [..] to add a medium input for note taking.
  l = l.replace(/\[\.\.\]/g,
    "<input type='text' class='uk-input uk-form-width-medium uk-form-small'>")


  // Matches [.] to add a very small input for note taking.
  l = l.replace(/\[\.\]/g,
    "<input type='text' class='uk-input uk-form-width-xsmall uk-form-small'>")

  // Matches [] to add a checkbox, to keep track of expendable / rechargable resources.
  l = l.replace(/\[\]/g, "<input type='checkbox' class='uk-checkbox'>")

  // Matches [H] to add a box to keep track of HP
  l = l.replace(/\[H\]/g, () => {
    // HP id
    let id = `hp${healthId}`;
    healthId++;

    return `
<input id="health-text-${id}"
class='uk-form-small uk-input uk-form-width-xsmall'
onchange="updateHP('health-text-${id}');"
placeholder="0">`
  })


  // Matches Stat tables, makes them look nice!!!
  if( /^([A-Z][A-Z]+.*?\(.*?\)\s?)+/.test(l) ) {
    l = l.replace(/([A-Z][A-Z]+.*?)\((.*?)\)/g, (m, p1, p2) => {

      return `<div><div class="small-font uk-text-center">${p1}</div>
<div class="uk-text-center">${p2}</div></div>`;
    })

    l = `<div class="uk-child-width-1-6@s uk-child-width-1-3 uk-grid-collapse" uk-grid>${l}</div>`

  }


  // Parse Roll buttons
  // Types NdM (p3), +X (p4), NdM + X  (p1, p2)
  l = l.replace(/(\d+d\d+)(\s*[+-]\s*\d+)|(\d+d\d+)|(?<!\w)([+-]\s*\d+)/g,
  (m, p1, p2, p3, p4) => {
    // Default dice is 1d20, eg "+3" is interpreted as "1d20 + 3"
    let dice = (p1 ?? p3 ?? "1d20").split("d");
    let nDice = parseInt(dice[0]);
    let dType = parseInt(dice[1]);

    // Default modifier is 0, eg "2d6" is interpreted as "2d6 + 0"
    let mod = parseInt((p2 ?? p4 ?? "+0").replace(/\s/g, ""));

    // gets an id for the button.
    let id = "rb"+rollBtnId;
    rollBtnId++;

    // Returns a new button.
    // Inside is the text we are matching (eg "2d6 + 2" or "+4")
    // When pressed it rolls a result: roll
    // And then updates the toolip: rollNotify
    return `
<button
id="${id}"
onClick="
let result = roll(${nDice}, ${dType},${mod});
rollNotify(result, '${m}', '${id}');
"
class="uk-button uk-label numeric"
uk-tooltip="title: ; animation: uk-animation-shake;"
> ${m} </button>`
  })

  // Surround each line by <p>'s.
  if(surroundByParagraph){
    l = `<p> ${l} </p>`;
  }
  return l;
}

function roll(n, d, m) {
  let out = 0;
  let idx = n;

  while (idx > 0) {
    out += Math.floor((Math.random() * d) + 1)
    idx--;
  }

  let crit = "";
  if (out === n*d || out === n) {crit = "!!!"}

  return `${out + m}${crit}`;
}

function rollNotify(r, m, id) {
  let out = `${r} (${m})`

  // Open Notification
  // UIkit.notification(out, {pos: 'bottom-right'});

  // Update Tooltip
  UIkit.tooltip(`#${id}`).hide()
  UIkit.tooltip(`#${id}`).title = `${r}`
  UIkit.tooltip(`#${id}`).animation = ["uk-animation-shake"];
  setTimeout(() => {
    UIkit.tooltip(`#${id}`).show();
  }, 10);
  setTimeout(() => {
    UIkit.tooltip(`#${id}`).animation = ["uk-animation-scale-up"];
  }, 50);




}

function updateHP( id ) {
  let input = document.getElementById(id);
  let x = parseInt(input.placeholder);
  if (/^\s*[+-]/.test(input.value)) {
    x += eval(input.value);

  } else {
    x = eval(input.value);
  }
  input.placeholder = x;
  input.value = x;
}

const monstersDiv = document.getElementById('monsters-div');
const addMonsterButton = document.getElementById('add-monster-b');
const monsterTextarea = document.getElementById('monster-textarea');


addMonsterButton.onclick = () => {
  monstersDiv.innerHTML += textToMonster( monsterTextarea.value )
}






//.
