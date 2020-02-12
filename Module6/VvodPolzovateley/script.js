function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.regDate = new Date();
  this.getFullData = function() {
    return (
      "Пользователь: " +
      this.firstName +
      " " +
      this.lastName +
      "." +
      " Дата регистрации: " +
      this.regDate
    );
  };
}

function UserList() {
  this.users = [];
  this.add = function() {
    return this.users.push(user.getFullData());
  };
  this.getAllUsers = function() {
    console.log(this.users);
  };
}

var userList = new UserList();

var userNames = true;

startHere: while (userNames) {
  userNames = prompt("Введите имя и фамилию через пробел");

  if (!userNames) {
    console.log(userList.getAllUsers());
    break;
  }

  var noSpc = userNames.trim().includes(" ");

  if (noSpc !== true) {
    alert("Не поставлен пробел или не корректно введены значения");
    continue;
  }

  var noDoubleSpc = new RegExp(/\s+/g);

  if (userNames.match(noDoubleSpc).length >= 2) {
    alert("Должно быть введено 2 значения!");
    continue;
  }

  var noDublicates = new RegExp("..." + userNames + "...", "i");

  for (var i = 0; i < userList.users.length; i++) {
    if (noDublicates.test(userList.users[i]) == true) {
      alert("Такое Значение уже есть!");
      continue startHere;
    }
  }
  var noNum = new RegExp(/\d/g);

  if (noNum.test(userNames) == true) {
    alert("В значении есть цифры!");
    continue;
  }

  var userNamesArr = userNames.trim().split(" ");

  var user = new User(userNamesArr[0], userNamesArr[1]);

  userList.add();
}
