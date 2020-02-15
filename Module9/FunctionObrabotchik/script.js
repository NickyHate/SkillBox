const work = document.querySelector("input");
const btn = document.querySelector("button");
const ol = document.querySelector("ol");
const li = document.querySelector("li");

btn.addEventListener("click", function() {
  debugger;
  let a = work.value;
  let arr = document.querySelectorAll("li");
  if (a == "") {
    alert("Не заполнено поле!");
  } else {
    let b = document.createElement("li");
    b.innerHTML = a;
    ol.append(b);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].textContent == a) {
      let agree = confirm(
        "Вы уверены, что хотите добавить дублирующую задачу?"
      );
      if (agree === true) {
        break;
      } else {
        ol.removeChild(ol.lastChild);
        break;
      }
    }
  }
});

ol.addEventListener("click", function(ev) {
  if (ev.target.tagName === "LI") {
    ev.target.classList.toggle("done");
  }
});
