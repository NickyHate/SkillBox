var code = document.getElementById("code");

var button = document.getElementById("button");

button.onclick = function() {
  "use strict";
  try {
    eval(code.value);
  } catch (err) {
    alert("Ошибка " + err.name + ": " + err.message);
  }
  return false;
};
