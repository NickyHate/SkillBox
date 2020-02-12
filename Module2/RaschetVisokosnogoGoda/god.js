var startYear = +prompt('Начальный год');
var endYear = +prompt('Конечный год');
while ( startYear <= endYear ){
		if ((startYear%400 == 0 || startYear%100 != 0) && (startYear%4 == 0))
			alert(startYear);
		else {};
		startYear++;
	};
while ( endYear <= startYear ){
		if ((startYear%400 == 0 || startYear%100 != 0) && (startYear%4 == 0))
			alert(startYear);
		else {};
		startYear--;
	};

