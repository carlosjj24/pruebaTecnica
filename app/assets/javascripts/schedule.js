//new used
function saveEvent (start, end, title, description, allDay) {

	if (title == undefined) {
		title = "Sin Título";
	}

	if (description == undefined) {
		description = "";
	}

	//date in spanish
	var allDays = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
	var allMonths = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

	//all start date data
  	var startDay = start.getDate();
  	var startMonth = allMonths[start.getMonth()]; 
  	var startDayN = allDays[start.getMonth()]; 
  	var startYear = start.getFullYear();
  	var startHour = moment(start).format('h:mm a');

  	//all end date data
  	var endDay = end.getDate();
  	var endMonth = allMonths[end.getMonth()]; 
  	var endDayN = allDays[end.getMonth()]; 
  	var endYear = end.getFullYear();
  	var endHour = moment(end).format('h:mm a');
  	//create tag
  	if ((new Date(startYear,end.getMonth(),startDay)).getTime() == (new Date(endYear,end.getMonth(),endDay)).getTime()) {
  		string = '<p> '+ startDay +' '+ startMonth +' del '+ startYear +'</p>\
				  <p> '+ startHour +' - '+ endHour +' </p>';
  	}else if (allDay) {
  		string = '<p> '+ startDay +' '+ startMonth +' del '+ startYear +'</p>\
				  <p> Todo el Día </p>';
		startHour = "12:00 am"
  	}else{
  		string = '<p> '+ startDay +' '+ startMonth +' del '+ startYear +' a las '+ startHour +' - '+ endDay +' '+ endMonth +' del '+ endYear +' a las '+ endHour +'</p>';
  	}
	var element =  '<li>\
						<div class="collapsible-header"><h5><b>'+ startDay +'</b> '+ startMonth +', '+ startDayN +'. '+ startHour + ': <b>'+ title +'</b></h5></div>\
						<div class="collapsible-body">\
							<table>\
								<tr>\
					          		<td style="width: auto!important;">\
					            		<h4>'+ title +'</h4>'
					            		+ string +
					            		'<p class="description"> '+ description +'</p>\
					          		</td>\
				        		</tr>\
				      		</table>\
					    </div>\
				    </li>';
	$(".collapsible").append(element);
}

function add(startDate, startHour, endDate, endHour, title, description, allDay) {
	option = 0;

	if (allDay) {
		//incompleto
		startStandard = new Date(getYear(startDate), getMonth(startDate), getDay(startDate));
		endStandard = new Date(getYear(endDate), getMonth(endDate), getDay(endDate));
		sendInsertAllDay (title, description, moment(startStandard).format("YYYY-MM-DD"), moment(endStandard).format("YYYY-MM-DD"));
		saveEvent (startStandard, endStandard, title, description, allDay);
	}else{
		var sPosition = startHour.indexOf('-');
		var ePosition = endHour.indexOf('-');
		var sHour = startHour.substring(0, sPosition);
		var eHour = endHour.substring(0, ePosition);
		var sMinute = startHour.substring(sPosition + 1, sPosition + 3);
		var eMinute = endHour.substring(ePosition + 1, ePosition + 3);

		startStandard = new Date(getYear(startDate), getMonth(startDate), getDay(startDate), sHour, sMinute);
		endStandard = new Date(getYear(endDate), getMonth(endDate), getDay(endDate), eHour, eMinute);
		sendInsert (title, description, startStandard.toISOString(), endStandard.toISOString());
		saveEvent (startStandard, endStandard, title, description, allDay);
	}
}