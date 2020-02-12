const edit = document.querySelector(".edit");
const save = document.querySelector(".save");
const cancel = document.querySelector(".cancel");
const text = document.querySelector(".text");

edit.addEventListener("click", function() {
  localStorage.setItem("0", text.textContent);
  edit.setAttribute("disabled", "disabled");
  save.removeAttribute("disabled");
  cancel.removeAttribute("disabled");
  text.setAttribute("contenteditable", "true");
});

save.addEventListener("click", function() {
  localStorage.setItem("1", text.textContent);
  edit.removeAttribute("disabled");
  save.setAttribute("disabled", "disabled");
  cancel.setAttribute("disabled", "disabled");
});

cancel.addEventListener("click", function() {
  edit.removeAttribute("disabled");
  save.setAttribute("disabled", "disabled");
  cancel.setAttribute("disabled", "disabled");
  let b = localStorage.getItem(0);
  text.textContent = b;
});

window.onload = function() {
  let c = this.localStorage.getItem(1);
  if (c !== null) {
    text.textContent = c;
  }
};
