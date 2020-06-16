
let rollBtnId = 0;



function textToMonster(src){
  // Split src by lines
   const lines = src.split(/\r\n|\r|\n/);

   let out = "";

   lines.forEach((line) => { out += parseLine(line) } )

   return `<hr><div class="monster"> ${out} </div><hr>`;
}

function parseLine(l) {
  if (l == "") { l = " "; }

  if (l.startsWith("#")) { l = `<h3> ${l} </h3>` }

  l = l.replace(/(.*?):/, "<b>$1</b>:")

  l = l.replace(/\[...\]/g, "<input type='text'>")
  l = l.replace(/\[\]/g, "<input type='checkbox'>")
  l = l.replace(/\[#\]/g, "<input type='number'>")


  l = l.replace(/(\d+d\d+)(\s*[+-]\s*\d+)|(\d+d\d+)|(\s*[+-]\s*\d+)/g,
  (m, p1, p2, p3, p4) => {
    let dice = (p1 ?? p3 ?? "1d20").split("d");
    let nDice = parseInt(dice[0]);
    let dType = parseInt(dice[1])
    let mod = parseInt((p2 ?? p4 ?? "+0").replace(/\s/g, ""));

    // gets an id for the span.
    let id = "rb"+rollBtnId;
    rollBtnId++;

    Math.floor((Math.random() * 100) + 1)

    return `<button onClick="document.getElementById('${id}').innerHTML = roll(${nDice}, ${dType},${mod});"> ${m} </button>
     <b><span id="${id}"></span></b>`
  })

  return `<p> ${l} </p>`
}

function roll(n, d, m) {
  out = 0;

  while (n > 0) {
    out += Math.floor((Math.random() * d) + 1)
    n--;
  }

  return out + m;
}


const monstersDiv = document.getElementById('monsters-div');
const addMonsterButton = document.getElementById('add-monster-b');
const monsterTextarea = document.getElementById('monster-textarea');


addMonsterButton.onclick = () => {
  monstersDiv.innerHTML += textToMonster( monsterTextarea.value )
}






//.
