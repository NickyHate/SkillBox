const edit = document.querySelector(".edit");
const color = document.querySelector(".color");
const colorBar = document.querySelector(".color-container");
const save = document.querySelector(".save");
const cancel = document.querySelector(".cancel");
const text = document.querySelector(".text");
const colors = document.querySelectorAll(".color-set");
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
    console.log("ne");
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
  localStorage.setItem("0", text.innerHTML);
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
});

cancel.addEventListener("click", function() {
  edit.removeAttribute("disabled");
  save.setAttribute("disabled", "disabled");
  cancel.setAttribute("disabled", "disabled");
  colorBar.classList.remove("active");
  let b = localStorage.getItem(0);
  text.textContent = b;
});

window.onload = function() {
  debugger;
  var div = document.createElement("div");
  let c = localStorage.getItem(1);
  if (c !== null) {
    div.innerHTML = localStorage.getItem(1);
    text.replaceWith(div);
  }
};
