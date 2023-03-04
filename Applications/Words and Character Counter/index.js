let inputTextArea = document.getElementById("input-textarea");
let characCount = document.getElementById("charac-count");
let wordCount = document.getElementById("word-count");

inputTextArea.addEventListener("input", () => {
  //counts number of characters
  characCount.textContent = inputTextArea.value.length;
  //Removes whitespaces from both the sides of the string
  let txt = inputTextArea.value.trim();
  //split text at spaces into array of substrings
  //Filter empty string
  //Count length of this array
  wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;
});
