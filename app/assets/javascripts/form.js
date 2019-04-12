function allDaySelected() {
    if($("#allDay").is(":checked")) {
        $(".endHour").css("display", "none");
        $(".startHour").css("display", "none");
        $("#endDate").width('48%');
        $("#startDate").width('48%');
    }else{
    	$(".endHour").css("display", "");
        $(".startHour").css("display", "");
        $("#endDate").width('28%');
        $("#startDate").width('28%');
    }
}

function clicked(){
	if (validate()) {
	    add($("#startDate").val(), $("#startHour").val(), $("#endDate").val(), $("#endHour").val(), $("#title").val(), $("#description").val(), $("#allDay").is(":checked"));
    }
    $(".endHour").css("display", "");
    $(".startHour").css("display", "");
    $("#endDate").width('28%');
    $("#startDate").width('28%');
};

function validate () {
	var startDate = $("#startDate").val();
	var endDate = $("#endDate").val();
	var startHour = $("#startHour").val();
	var endHour = $("#endHour").val();

	if (!startDate || !endDate) {
		$(".alert").css("display", "");
        return false;
	}

	if($("#allDay").is(":checked")) {
		var startStandard = new Date(getYear(startDate), getMonth(startDate), getDay(startDate));
		var endStandard = new Date(getYear(endDate), getMonth(endDate), getDay(endDate));
	}else{
		if (!startHour || !endHour) {
			$(".alert").css("display", "");
	        return false;
		}
		var sPosition = startHour.indexOf('-');
		var ePosition = endHour.indexOf('-');
		var sHour = startHour.substring(0, sPosition);
		var eHour = endHour.substring(0, ePosition);
		var sMinute = startHour.substring(sPosition + 1, sPosition + 3);
		var eMinute = endHour.substring(ePosition + 1, ePosition + 3);
		startStandard = new Date(getYear(startDate), getMonth(startDate), getDay(startDate), sHour, sMinute);
		endStandard = new Date(getYear(endDate), getMonth(endDate), getDay(endDate), eHour, eMinute);
	}

	if (endStandard.getTime() < startStandard.getTime()) {
		$(".alert").css("display", "");
        return false;
	}

	$(".alert").css("display", "none");
	return true;
}