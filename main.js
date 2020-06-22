document.addEventListener("DOMContentLoaded", function(){
  let buttons = document.querySelectorAll("button");
  buttons.forEach((button) => button.onclick = updateText)
});

function updateText() {
  const NAME_AND_TIMESTAMP = /^.+ : /;
  const TIMESTAMP = /^\S+\s+From / ;

  const input = document.querySelector('[data-role="input"]');
  const output = document.querySelector('[data-role="output"]');

  const removalPattern = !!this.dataset.removeNames ? NAME_AND_TIMESTAMP : TIMESTAMP
  const inputLines = input.value.split("\n");
  const outputLines = inputLines.map((line) => line.replace(removalPattern, ""));

  output.value = outputLines.join("\n");
}


