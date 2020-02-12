var myName = prompt('Как вас зовут?');
var mySurname = prompt('Какая у вас фамилия?')
var myBirthYear = prompt('Введите год рождения');
var date = new Date();
var currentYear = date.getFullYear();
var age = currentYear - myBirthYear;

if (age < 20) {
   alert('Привет, ' + ' '  + myName + ' ' +  mySurname + '!');
}
 else if(age >= 20 && age < 40) {
   alert('Добрый день,' + ' ' + myName + ' ' + mySurname);
}
 else {
   alert('Здравствуйте, ' + ' ' + myName + ' ' + mySurname);
}
