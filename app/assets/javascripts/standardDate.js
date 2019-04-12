function getDayName(index) {
	result = "";
	if (index==0) {
		result = "Sun";
	}else if (index==1) {
		result = "Mon";
	}else if (index==2) {
		result = "Tue";
	}else if (index==3) {
		result = "Wed";
	}else if (index==4) {
		result = "Thu";
	}else if (index==5) {
		result = "Fri";
	}else if (index==6) {
		result = "Sat";
	}
	return result;
}

// new used
function getMonth(date) {
	month = date.substring(5,8)
	result = 0;
	if (month == 'Ene') {
		result = 0;
	}else if (month == 'Feb') {
		result = 1;
	}else if (month == 'Mar') {
		result = 2;
	}else if (month == 'Abr') {
		result = 3;
	}else if (month == 'May') {
		result = 4;
	}else if (month == 'Jun') {
		result = 5;
	}else if (month == 'Jul') {
		result = 6;
	}else if (month == 'Ago') {
		result = 7;
	}else if (month == 'Sep') {
		result = 8;
	}else if (month == 'Oct') {
		result = 9;
	}else if (month == 'Nov') {
		result = 10;
	}else if (month == 'Dic') {
		result = 11;
	}
	return result;
}

function getDay(date) {
	return date.substring(9,11);
}

function getYear(date) {
	return date.substring(13,17);
}