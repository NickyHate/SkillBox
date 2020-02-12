const work = document.querySelector("input");
const btn = document.querySelector("button");
const ol = document.querySelector("ol");
const li = document.querySelector("li");

btn.addEventListener("click", function() {
  let a = work.value;
  if (a == "") {
    alert("Не заполнено поле!");
  } else {
    let b = document.createElement("li");
    b.innerHTML = a;
    ol.append(b);
  }
});

ol.addEventListener("click", function(ev) {
  if (ev.target.tagName === "LI") {
    ev.target.classList.toggle("done");
  }
});
