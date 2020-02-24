var edit = document.querySelector(".edit");
var save = document.querySelector(".save");
var cancel = document.querySelector(".cancel");
var clearStorage = document.querySelector(".clear-storage");
var color = document.querySelector(".color");
var colorBar = document.querySelector(".color-container");
var text = document.querySelector(".text");
var colors = document.querySelectorAll(".color-set");
var arr = [];

color.addEventListener("click", function() {
  colorBar.classList.add("active");
});

for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener("click", getColor);
}

function getColor(event) {
  var target = event.currentTarget;
  var att = target.getAttribute("id");
  arr.push(att);
}

text.addEventListener("mouseup", styleText);

function styleText() {
  if (document.getSelection() == "") {
    return false;
  }
  let range = document.getSelection().getRangeAt(0);
  let selectionContents = range.extractContents();
  let span = document.createElement("span");
  span.appendChild(selectionContents);
  span.style.color = arr[arr.length - 1];
  range.insertNode(span);
}

edit.addEventListener("click", function() {
  edit.setAttribute("disabled", "disabled");
  color.removeAttribute("disabled");
  save.removeAttribute("disabled");
  cancel.removeAttribute("disabled");
  text.setAttribute("contenteditable", "true");
});

save.addEventListener("click", function() {
  localStorage.setItem("1", text.innerHTML);
  edit.removeAttribute("disabled");
  save.setAttribute("disabled", "disabled");
  cancel.setAttribute("disabled", "disabled");
  colorBar.classList.remove("active");
  text.removeAttribute("contenteditable");
});

cancel.addEventListener("click", function() {
  edit.removeAttribute("disabled");
  save.setAttribute("disabled", "disabled");
  cancel.setAttribute("disabled", "disabled");
  text.removeAttribute("contenteditable");
  colorBar.classList.remove("active");
  let b = localStorage.getItem(0);
  text.textContent = b;
});

clearStorage.addEventListener("click", function() {
  localStorage.clear();
});

window.onload = function() {
  let c = localStorage.getItem(1);
  if (c !== null) {
    text.innerHTML = c;
  }
};
