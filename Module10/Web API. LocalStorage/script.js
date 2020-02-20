const edit = document.querySelector(".edit");
const color = document.querySelector(".color");
const colorBar = document.querySelector(".color-container");
const save = document.querySelector(".save");
const cancel = document.querySelector(".cancel");
const text = document.querySelector(".text");
const colors = document.querySelectorAll(".color-set");

(function() {
  var selectedText = "";
  document.onmouseup = function() {
    setTimeout(function() {
      if (window.getSelection) {
        var selection = window.getSelection();

        selectedText = selection.toString();
      } else if (document.selection) {
        var range = document.selection.createRange();

        selectedText = range.htmlText;
      }
    }, 10);
  };
  window.getLastSelection = function() {
    return selectedText;
  };
})();

edit.addEventListener("click", function() {
  localStorage.setItem("0", text.textContent);
  edit.setAttribute("disabled", "disabled");
  color.removeAttribute("disabled");
  save.removeAttribute("disabled");
  cancel.removeAttribute("disabled");
  text.setAttribute("contenteditable", "true");
});

color.addEventListener("click", function() {
  colorBar.classList.add("active");
});

for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener("click", makeСolor);
}

function makeСolor(event) {
  var target = event.currentTarget;
  var select = window.getLastSelection().toString();
  var span = document.createElement("span");
  var att = target.getAttribute("id");
  span.style.color = att;
  span.innerHTML = select;
  text.append(span);
}

save.addEventListener("click", function() {
  localStorage.setItem("1", text.textContent);
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
  let c = this.localStorage.getItem(1);
  if (c !== null) {
    text.textContent = c;
  }
};
