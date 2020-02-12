const code = document.getElementById("code");

const button = document.getElementById("button");

const error = document.querySelector(".error");

button.onclick = function() {
  "use strict";
  try {
    eval(code.value);
  } catch (err) {
    error.style.color = "red";
    error.textContent = "Ошибка: " + err;
  }
  return false;
};
