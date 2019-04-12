// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery.min
//= require materialize.min
//= require moment
//= require calendar
//= require standardDate
//= require schedule
//= require form

var startWeek = moment().startOf('week').toDate();
var endWeek = moment().endOf('week').toDate();

$(document).ready(function(){
	inter_en = {
        cancel: 'Cancel',
        clear: 'Clear',
        done:    'Ok',
        previousMonth:    '‹',
        nextMonth:    '›',
        months:    [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ],
        monthsShort:    [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],

        weekdays:    [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ],

        weekdaysShort:    [
            'Sun',
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat'
        ],

        weekdaysAbbrev:    ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    };


    inter_es = {
        cancel: 'Cancelar',
        clear: 'Limpiar',
        done:    'Ok',
        previousMonth:    '‹',
        nextMonth:    '›',
        months:    [
            'Enero',
            'Febrero',
            'Marzo',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Septiembre',
            'Octubre',
            'Noviembre',
            'Diciembre'
        ],
        monthsShort:    [
            'Ene',
            'Feb',
            'Mar',
            'Abr',
            'May',
            'Jun',
            'Jul',
            'Ago',
            'Sep',
            'Oct',
            'Nov',
            'Dic'
        ],

        weekdays:    [
            'Domingo',
            'Lunes',
            'Martes',
            'Miércoles',
            'Jueves',
            'Viernes',
            'Sábado'
        ],

        weekdaysShort:    [
            'Dom',
            'Lun',
            'Mar',
            'Mié',
            'Jue',
            'Vie',
            'Sáb'
        ],

        weekdaysAbbrev:    ['D', 'L', 'M', 'M', 'J', 'V', 'S']

    };

    var options = {
        i18n: inter_es,
        autoClose: true,
        format: 'ddd. mmm dd, yyyy',
    };



	$('.modal').modal();
	$('.datepicker').datepicker(options);
	$('select').formSelect();
	$('.collapsible').collapsible();
});