/* Всплытие меню с выбором языка */
const arrow = document.querySelectorAll(".arrow");
for (let i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", function() {
    this.classList.toggle("rotate");
    this.parentElement.nextElementSibling.classList.toggle("active");
  });
}
/* Переключение языков */
const lang = document.querySelectorAll(".language");

for (let i = 0; i < lang.length; i++) {
  lang[i].addEventListener("click", changeLanguage);
}

function changeLanguage() {
  var value = this.textContent;
  var parent = this.parentElement.previousElementSibling.firstElementChild;
  parent.innerHTML = value;
  this.parentElement.classList.remove("active");
}

const button = document.querySelector(".button");

button.addEventListener("click", getTranslate);

var API_KEY =
  "trnsl.1.1.20200215T225608Z.add5acd109a5b4f2.210ab5185caf6fa4075d38061fc58ca1cbe3c525";
var url = "https://translate.yandex.net/api/v1.5/tr.json/translate";
function getTranslate() {
  var translate = document.querySelector(".translate");

  var getWord = document.querySelector(".get__word");
  var word = "&text=" + getWord.value;

  var text = document.querySelectorAll(".text");
  if (text[0].textContent == "Русский") {
    var firstLang = "ru";
  } else if (text[0].textContent == "English") {
    firstLang = "en";
  } else {
    alert("Выберите язык перевода");
    return;
  }

  if (text[1].textContent == "Русский") {
    var secondLang = "ru";
  } else if (text[1].textContent == "English") {
    secondLang = "en";
  } else {
    alert("Выберите язык перевода");
    return;
  }

  url += "?key=" + API_KEY;
  url += word;
  url += "&lang=" + firstLang + "-" + secondLang;

  async function getResponse() {
    var response = await fetch(url);
    var content = await response.json();
    content = content.text;
    translate.innerHTML = content[content.length - 1];
  }
  getResponse();
}
