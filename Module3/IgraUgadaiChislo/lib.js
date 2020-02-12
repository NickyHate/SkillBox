var Module = (function() {
  var myModule = {};
  var x = (function getRandom(max, min) {
    return Math.floor(Math.random() * (1000 - 1 + 1) + 1);
  })();
  var counter = (function() {
    var a = 11;
    return function() {
      return --a;
    };
  })();
  myModule.game = function findAnswer() {
    var count = parseInt(counter(), 10);
    while (count > 0) {
      var y = +prompt(
        "Угадайте число. " +
          " " +
          "Количество оставшихся попыток :" +
          " " +
          count
      );

      if (y === 0) {
        alert("Спасибо за игру");
        break;
      } else if (!y) {
        count = count + 1;
        alert("Введите число!");
        return findAnswer();
      } else if (y > x) {
        alert("Загаданное число меньше");
        return findAnswer(count - 1);
      } else if (y < x) {
        alert("Загаданное число больше");
        return findAnswer(count - 1);
      } else if ((y = x)) {
        alert("Поздравляю,вы угадали число!");
        alert("Спасибо за игру!");
        break;
      }
    }
  };
  return myModule;
})();

