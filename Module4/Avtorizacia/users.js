var users = [];
users[0] = {
	name : 'Никита',
	login : 'Nikita',
	password : 'nikita'
}
users[1] = {
	name : 'Антон',
	login : 'Anton',
	password : 'anton'
}
users[2] = {
	name : 'Максим',
	login : 'Maxim',
	password : 'maxim'
}
users[3] = {
	name : 'Александр',
	login : 'Aleksandr',
	password : 'aleksandr'
}
users[4] = {
	name : 'Надежда',
	login : 'Nadejda',
	password : 'nadejda'
}
users[5] = {
	name : 'Светлана',
	login : 'Svetlana',
	password : 'svetlana'
}

var x = prompt('Введите логин');
var y = prompt('Введите пароль');
var z = 0;
var s;
while (z < users.length ) {
 	if (x == users[z].login && y == users[z].password){
	 	s = 1;
	 	break;
	}
	else {
		s = 0;
	}
	z++;
};
if (s > 0){
	alert('Привет, ' + users[z].name);
}
else {
	alert('ошибка авторизации');
}
