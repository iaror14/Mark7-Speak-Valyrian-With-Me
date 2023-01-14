var txtAreaInput = document.querySelector("#txt-area");
console.log(txtAreaInput);

var btnTranslateID = document.querySelector("#btn-id");
console.log(btnTranslateID);

var outputText = document.querySelector("#output-area");
console.log(outputText);

var serverURL = "https://api.funtranslations.com/translate/pig-latin.json";
function finalServer(text) {
  return serverURL + "?" + "text=" + text;
}

function clickHandler() {
  console.log("clicked");
  var inputText = txtAreaInput.value;

  fetch(getTranslation(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translateText = json.contents.translated;
      outputText.innerText = translateText;
    });
}
btnTranslateID.addEventListener("click", clickHandler);
