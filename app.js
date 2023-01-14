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
