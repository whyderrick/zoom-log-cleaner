document.addEventListener("DOMContentLoaded", function(){
  let cleanUpButtons = document.querySelectorAll("[name='clean']");
  cleanUpButtons.forEach((button) => button.onclick = updateText)

  let filterButtons = document.querySelectorAll("[name='filter']");
  filterButtons.forEach((button) => button.onclick = filterLogs)
});


const NAME_AND_TIMESTAMP = /^.+ : /;
const TIMESTAMP = /^\S+\s+From / ;
const URL = /\w\.\w{2,}/;
const PUBLIC_MESSAGE = / to Everyone :/;


function updateText() {
  const input = document.querySelector('[data-role="input"]');
  const output = document.querySelector('[data-role="output"]');

  const removalPattern = !!this.dataset.removeNames ? NAME_AND_TIMESTAMP : TIMESTAMP
  let inputLines = input.value.split("\n");
  let outputLines = inputLines.map((line) => line.replace(removalPattern, "").replace(PUBLIC_MESSAGE, ":"));

  output.value = outputLines.join("\n");
}

function filterLogs(matchingPattern = URL) {
  const input = document.querySelector('[data-role="input"]');
  const output = document.querySelector('[data-role="output"]');

  let inputLines = input.value.split("\n");
  let outputLines = inputLines
      .filter((line) => line.match(URL))
      .map((line) => line.replace(TIMESTAMP, "").replace(PUBLIC_MESSAGE, ":"));

  output.value = outputLines.join("\n");
}
