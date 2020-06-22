document.addEventListener("DOMContentLoaded", function(){
  let button = document.querySelector("button");

  button.onclick = function(event) {
    const NAME_AND_TIMESTAMP = /^.+ : /;
    let input = document.querySelector('[data-role="input"]');
    let output = document.querySelector('[data-role="output"]');
    let inputLines = input.value.split("\n");
    let outputLines = inputLines.map((line) => line.replace(NAME_AND_TIMESTAMP, ""));

    output.value = outputLines.join("\n");
  }
});

