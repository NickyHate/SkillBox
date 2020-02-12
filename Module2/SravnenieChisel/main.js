var firstNumber = +prompt('Введите первое число');
var secondNumber = +prompt('Введите второе число');
if (firstNumber == '' ){
  alert('Вы не ввели число');
}
else if(secondNumber == '')
  alert('Вы не ввели число')
else if (firstNumber > secondNumber){
  alert('Первое число больше второго');
}
else if(secondNumber > firstNumber){
  alert('Второе число больше первого');
}
else if (secondNumber == firstNumber){
  alert('Числа равны');
}
else {
  alert('Вы хитрец!Введите число!')
}
