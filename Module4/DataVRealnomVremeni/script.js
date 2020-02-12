setInterval(function() {
var d = new Date();
var x = d.getDate();
var month = d.getMonth();
var months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", " октября", "ноября", "декабря"];
var y = d.getYear();
var n = d.getDay();
var day = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
var h = d.getHours();
var hours = [2,3,4,22,23]
var hours1 = [1,21]
if (hours.indexOf(h) != -1){
	h = h + ' часа';
}
else if (hours1.indexOf(h) != -1){
	h = h + ' час';
}
else {
	h = h + ' часов';
}
var specialNumbers = [2,3,4,22,23,24,32,33,34,42,43,44,52,53,54]
var specialNumbers1 = [1,21,31,41,51]

var mi = d.getMinutes();
if (specialNumbers.indexOf(mi) != -1){
	mi = mi + ' минуты';
}
else if (specialNumbers1.indexOf(mi) != -1){
	mi = mi + ' минута';
}
else {
	mi = mi + ' минут';
}

var s = d.getSeconds();
if (specialNumbers.indexOf(s) != -1){
	s = s + ' секунды';
}
else if (specialNumbers1.indexOf(s) != -1){
	s = s + ' секунда';
}
else {
	s = s + ' секунд';
}

var t = ("Сегодня" + " " + x + " " + months[month] + " " + (y + 1900) + " " + "года" + ", " + day[n] + ", " + h + " " + mi + " " + s);

document.body.children[0].innerText = t;
},
1000);

//сегодня 15 января 2019 года, вторник, 20 часов 20 минут 30 секунд