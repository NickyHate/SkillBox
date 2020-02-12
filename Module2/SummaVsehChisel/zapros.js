var sum = 0;
while (true) {
	var x = +prompt('Введите число');
	if(x===0) break;
	if(!x){
		alert('Вы ввели недопустимое значение!'); continue;
	}
	sum += x;
	}
alert('Сумма:' + sum );




