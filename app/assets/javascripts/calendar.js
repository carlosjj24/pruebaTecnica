// Client ID and API key from the Developer Console
var CLIENT_ID = '43319380158-vibkkbl5daqkdt7989rgqf4thl0bhu29.apps.googleusercontent.com';
var API_KEY = 'AIzaSyDSx45J8ogi_UiGMFJ7DTdK9WAiGVWD8cs';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/calendar";

/**
*  On load, called to load the auth2 library and API client library.
*/
function handleClientLoad() {
gapi.load('client:auth2', initClient);
}

/**
*  Initializes the API client library and sets up sign-in state
*  listeners.
*/
function initClient() {
gapi.client.init({
  apiKey: API_KEY,
  clientId: CLIENT_ID,
  discoveryDocs: DISCOVERY_DOCS,
  scope: SCOPES
}).then(function () {
  // Listen for sign-in state changes.
  gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

  // Handle the initial sign-in state.
  updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
}, function(error) {
  appendPre(JSON.stringify(error, null, 2));
});
}

/**
*  Called when the signed in status changes, to update the UI
*  appropriately. After a sign-in, the API is called.
*/
function updateSigninStatus(isSignedIn) {
if (isSignedIn) {
  $(".login").css('display','');
  $(".logout").css('display','none');
  getEvents();
} else {
  $(".login").css('display','none');
  $(".logout").css('display','');
}
}

/**
*  Sign in the user upon button click.
*/
function handleAuthClick(event) {
gapi.auth2.getAuthInstance().signIn();
}

/**
*  Sign out the user upon button click.
*/
function handleSignoutClick(event) {
gapi.auth2.getAuthInstance().signOut();
}

function sendInsert (title, description, start, end) {
	gapi.client.load('calendar', 'v3', function() {					// load the calendar api (version 3)
		var resource = {
		  "summary": title,
		  "description": description,
		  "start": {
		    "dateTime": start
		  },
		  "end": {
		    "dateTime": end
		  }
		};
		var request = gapi.client.calendar.events.insert({
		  'calendarId': 'primary',
		  'resource': resource
		});
		request.execute(function(resp) {
		  console.log(resp);
		});
	});
}

function sendInsertAllDay (title, description, start, end) {
	gapi.client.load('calendar', 'v3', function() {					// load the calendar api (version 3)
		var resource = {
		  "summary": title,
		  "description": description,
		  "start": {
		    "date": start
		  },
		  "end": {
		    "date": end
		  }
		};
		var request = gapi.client.calendar.events.insert({
		  'calendarId': 'primary',
		  'resource': resource
		});
		request.execute(function(resp) {
		  console.log(resp);
		});
	});
}

function getEvents() {
	gapi.client.load('calendar', 'v3', function() {		
		gapi.client.calendar.events.list({
          	'calendarId': 'primary',
          	'timeMin': startWeek.toISOString(),
          	'timeMax': endWeek.toISOString(),
          	'showDeleted': false,
          	'singleEvents': true,
          	'orderBy': 'startTime'
        }).then(function(response) {
          	var events = response.result.items;
          	if (events.length > 0) {
			    for (i = 0; i < events.length; i++) {
			      	var event = events[i];
			      	var start = event.start.dateTime;
			      	var end = event.end.dateTime;
			      	var allDay = false;
			      	var title = event.summary;
			      	var description = event.description;
			      	if (!start) {
			        	start = event.start.date;
			        	end = event.end.date;
			        	allDay = true;
			      	}
			      	saveEvent (new Date(start), new Date(end), title, description, allDay); 
			    }
			} else {
			    alert('Usted no posee eventos en la semana actual.');
			}
        });
	});
}