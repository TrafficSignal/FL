//Written by Emmanuel Posadas - January 2014

// Read the data from XML using Jquery for Florida Traffic Signals
function loadFloridaStateSignals(){ 
	$.get("xml/FloridaStateSignals.xml", {}, function(data) {
		$(data).find("marker").each(function() {
			var marker = $(this);
			var intname = $(this).attr('intname');
			var intnum = $(this).attr('intnum');
			var latlng = new google.maps.LatLng(parseFloat(marker.attr('lat')),parseFloat(marker.attr('lng')));
		//Icon Sytyle
			var image = 'images/FLSignalALL.png' ;
			var marker = new google.maps.Marker({
				position: latlng, 
				map: map,
				icon: image
				});
		//Contents of Info Window
				var contentString = '<div id="signalinfowindow"><img src="images/FloridaStateSmallSeal.png">' + 
				'Intersection number: <b>' +intnum+ '</b><br>' +
				'Intersection name:<b>' +intname+ '</b><br>' +
				'<font size="1" color="purple">'+
				'[ Data Sets here: For example Timing Sheets, Cabinet Picture, Plans, Count, Crash Data, Simulation Files, Data last retimed or whatever data set can be linked or displayed ]'
				'</div>' ;
 		//Info Window 
			var infowindow = new google.maps.InfoWindow({ 
			content:contentString,
			maxWidth:500
			});  
		//Event Listener, Opens Info Window on click
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map,marker); 
			});
		}); 
    });
}

function loadFLStateSignals(){ 
	$.get("xml/FLSignalFullColorSHS.xml", {}, function(data) {
		$(data).find("marker").each(function() {
			var marker = $(this);
			var mainstreet = $(this).attr('main');
			var sidestreet = $(this).attr('side');
			var signalid = $(this).attr('sigid');
			var roadwayid = $(this).attr('roadid');
			var agency = $(this).attr('agency');
			var latlng = new google.maps.LatLng(parseFloat(marker.attr('lat')),parseFloat(marker.attr('lng')));
		//Icon Sytyle
			var image = 'images/FLSignal.png' ;
			var marker = new google.maps.Marker({
				position: latlng, 
				map: map,
				icon: image
				});
		//Contents of Info Window
				var contentString = '<div id="signalinfowindow"><img src="images/FloridaStateSmallSeal.png">' + 
				'Intersection number: <b>' +signalid+ '</b><br>' +
				'Main Street:<b>' +roadwayid+ ' or ' +mainstreet+'</b><br>' +
				'Side Street:<b>' +sidestreet+'</b><br>' +
				'Maintaining Agency:<b>' +agency+'</b><br>' +
				'<font size="1" color="purple">'+
				'</div>' ;
 		//Info Window 
			var infowindow = new google.maps.InfoWindow({ 
			content:contentString,
			maxWidth:500
			});  
		//Event Listener, Opens Info Window on click
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map,marker); 
			});
		}); 
    });
}

function loadFLStateMidblocks(){ 
	$.get("xml/FLSignalMidblockSHS.xml", {}, function(data) {
		$(data).find("marker").each(function() {
			var marker = $(this);
			var mainstreet = $(this).attr('main');
			var sidestreet = $(this).attr('side');
			var signalid = $(this).attr('sigid');
			var roadwayid = $(this).attr('roadid');
			var agency = $(this).attr('agency');
			var latlng = new google.maps.LatLng(parseFloat(marker.attr('lat')),parseFloat(marker.attr('lng')));
		//Icon Sytyle
			var image = 'images/FLMidblock.png' ;
			var marker = new google.maps.Marker({
				position: latlng, 
				map: map,
				icon: image
				});
		//Contents of Info Window
				var contentString = '<div id="signalinfowindow"><img src="images/FloridaStateSmallSeal.png">' + 
				'Intersection number: <b>' +signalid+ '</b><br>' +
				'Main Street:<b>' +roadwayid+ ' or ' +mainstreet+'</b><br>' +
				'Side Street:<b>' +sidestreet+'</b><br>' +
				'Maintaining Agency:<b>' +agency+'</b><br>' +
				'<font size="1" color="purple">'+
				'</div>' ;
 		//Info Window 
			var infowindow = new google.maps.InfoWindow({ 
			content:contentString,
			maxWidth:500
			});  
		//Event Listener, Opens Info Window on click
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map,marker); 
			});
		}); 
    });
}

function loadFLStateBeacons(){ 
	$.get("xml/FLSignalBeaconsSHS.xml", {}, function(data) {
		$(data).find("marker").each(function() {
			var marker = $(this);
			var mainstreet = $(this).attr('main');
			var sidestreet = $(this).attr('side');
			var signalid = $(this).attr('sigid');
			var roadwayid = $(this).attr('roadid');
			var agency = $(this).attr('agency');
			var latlng = new google.maps.LatLng(parseFloat(marker.attr('lat')),parseFloat(marker.attr('lng')));
		//Icon Sytyle
			var image = 'images/FLBeacon.png' ;
			var marker = new google.maps.Marker({
				position: latlng, 
				map: map,
				icon: image
				});
		//Contents of Info Window
				var contentString = '<div id="signalinfowindow"><img src="images/FloridaStateSmallSeal.png">' + 
				'Intersection number: <b>' +signalid+ '</b><br>' +
				'Main Street:<b>' +roadwayid+ ' or ' +mainstreet+'</b><br>' +
				'Side Street:<b>' +sidestreet+'</b><br>' +
				'Maintaining Agency:<b>' +agency+'</b><br>' +
				'<font size="1" color="purple">'+
				'</div>' ;
 		//Info Window 
			var infowindow = new google.maps.InfoWindow({ 
			content:contentString,
			maxWidth:500
			});  
		//Event Listener, Opens Info Window on click
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map,marker); 
			});
		}); 
    });
}

function loadFLStateSchools(){ 
	$.get("xml/FLSignalSchoolSHS.xml", {}, function(data) {
		$(data).find("marker").each(function() {
			var marker = $(this);
			var mainstreet = $(this).attr('main');
			var sidestreet = $(this).attr('side');
			var signalid = $(this).attr('sigid');
			var roadwayid = $(this).attr('roadid');
			var agency = $(this).attr('agency');
			var latlng = new google.maps.LatLng(parseFloat(marker.attr('lat')),parseFloat(marker.attr('lng')));
		//Icon Sytyle
			var image = 'images/FLSchoolSignal.png' ;
			var marker = new google.maps.Marker({
				position: latlng, 
				map: map,
				icon: image
				});
		//Contents of Info Window
				var contentString = '<div id="signalinfowindow"><img src="images/FloridaStateSmallSeal.png">' + 
				'Intersection number: <b>' +signalid+ '</b><br>' +
				'Main Street:<b>' +roadwayid+ ' or ' +mainstreet+'</b><br>' +
				'Side Street:<b>' +sidestreet+'</b><br>' +
				'Maintaining Agency:<b>' +agency+'</b><br>' +
				'<font size="1" color="purple">'+
				'</div>' ;
 		//Info Window 
			var infowindow = new google.maps.InfoWindow({ 
			content:contentString,
			maxWidth:500
			});  
		//Event Listener, Opens Info Window on click
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map,marker); 
			});
		}); 
    });
}

function loadFLStateEmergency(){ 
	$.get("xml/FLSignalEmergencySHS.xml", {}, function(data) {
		$(data).find("marker").each(function() {
			var marker = $(this);
			var mainstreet = $(this).attr('main');
			var sidestreet = $(this).attr('side');
			var signalid = $(this).attr('sigid');
			var roadwayid = $(this).attr('roadid');
			var agency = $(this).attr('agency');
			var latlng = new google.maps.LatLng(parseFloat(marker.attr('lat')),parseFloat(marker.attr('lng')));
		//Icon Sytyle
			var image = 'images/FLEmergencySignal.png' ;
			var marker = new google.maps.Marker({
				position: latlng, 
				map: map,
				icon: image
				});
		//Contents of Info Window
				var contentString = '<div id="signalinfowindow"><img src="images/FloridaStateSmallSeal.png">' + 
				'Intersection number: <b>' +signalid+ '</b><br>' +
				'Main Street:<b>' +roadwayid+ ' or ' +mainstreet+'</b><br>' +
				'Side Street:<b>' +sidestreet+'</b><br>' +
				'Maintaining Agency:<b>' +agency+'</b><br>' +
				'<font size="1" color="purple">'+
				'</div>' ;
 		//Info Window 
			var infowindow = new google.maps.InfoWindow({ 
			content:contentString,
			maxWidth:500
			});  
		//Event Listener, Opens Info Window on click
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map,marker); 
			});
		}); 
    });
}