//Written by Emmanuel Posadas - November 2014

// Read the data from XML using Jquery for Brevard County Traffic Signals
function loadBrevardCountySignals(){ 
	$.get("xml/BrevardCountySignal.xml", {}, function(data) {
		$(data).find("marker").each(function() {
			var marker = $(this);
			var intname = $(this).attr('intname');
			var intnum = $(this).attr('intnum');
			var latlng = new google.maps.LatLng(parseFloat(marker.attr("lat")),parseFloat(marker.attr("lng")));
		//Icon Sytyle
			var image = 'images/BrevardCountySignal.png' ;
			var marker = new google.maps.Marker({
				position: latlng, 
				map: map,
				icon: image
				});
		//Contents of Info Window
				var contentString = '<div id="signalinfowindow"><img src="images/BrevardCountySmallSeal.gif">' + 
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

// Read the data from XML using Jquery for City of Kissimmee Traffic Signals
function loadKissimmeeSignals(){ 
	$.get("xml/KissimmeeSignal.xml", {}, function(data) {
		$(data).find("marker").each(function() {
			var marker = $(this);
			var intname = $(this).attr('intname');
			var intnum = $(this).attr('intnum');
			var latlng = new google.maps.LatLng(parseFloat(marker.attr("lat")),parseFloat(marker.attr("lng")));
		//Icon Style
			var image = 'images/KissimmeeSignal.png' ;
			var marker = new google.maps.Marker({
				position: latlng, 
				map: map,
				icon: image
				});
		//Contents of Info Window
				var contentString = '<div id="signalinfowindow"><img src="images/KissimmeeSmallSeal.gif">' + 
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

// Read the data from XML using Jquery for Orange County Traffic Signals
function loadOrangeCountySignals(){ 
	$.get("xml/OrangeCountySignal.xml", {}, function(data) {
		$(data).find("marker").each(function() {
			var marker = $(this);
			var intname = $(this).attr('intname');
			var intnum = $(this).attr('intnum');
			var latlng = new google.maps.LatLng(parseFloat(marker.attr("lat")),parseFloat(marker.attr("lng")));
		//Icon Sytyle
			var image = 'images/OrangeCountySignal.png' ;
			var marker = new google.maps.Marker({
				position: latlng, 
				map: map,
				icon: image
				});
		//Contents of Info Window
				var contentString = '<div id="signalinfowindow"><img src="images/OrangeCountySmallSeal.gif">' + 
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

// Read the data from XML using Jquery for City of Orlando Traffic Signals
function loadOrlandoSignals(){ 
	$.get("xml/OrlandoSignal.xml", {}, function(data) {
		$(data).find("marker").each(function() {
			var marker = $(this);
			var intname = $(this).attr('intname');
			var intnum = $(this).attr('intnum');
			var latlng = new google.maps.LatLng(parseFloat(marker.attr("lat")),parseFloat(marker.attr("lng")));
		//Icon Style
			var image = 'images/OrlandoSignal.png' ;
			var marker = new google.maps.Marker({
				position: latlng, 
				map: map,
				icon: image
				});
		//Contents of Info Window
				var contentString = '<div id="signalinfowindow"><img src="images/OrlandoSmallSeal.gif">' + 
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

// Read the data from XML using Jquery for Volusia County Traffic Signals
function loadVolusiaCountySignals(){ 
	$.get("xml/VolusiaCountySignal.xml", {}, function(data) {
		$(data).find("marker").each(function() {
			var marker = $(this);
			var intname = $(this).attr('intname');
			var intnum = $(this).attr('intnum');
			var latlng = new google.maps.LatLng(parseFloat(marker.attr("lat")),parseFloat(marker.attr("lng")));
		//Icon Sytyle
			var image = 'images/VolusiaCountySignal.png' ;
			var marker = new google.maps.Marker({
				position: latlng, 
				map: map,
				icon: image
				});
		//Contents of Info Window
				var contentString = '<div id="signalinfowindow"><img src="images/VolusiaCountySmallSeal.gif">' + 
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

// Read the data from XML using Jquery for Seminole County Traffic Signals
function loadSeminoleCountySignals(){ 
	$.get("xml/SeminoleCountySignal.xml", {}, function(data) {
		$(data).find("marker").each(function() {
			var marker = $(this);
			var intname = $(this).attr('intname');
			var intnum = $(this).attr('intnum');
			var latlng = new google.maps.LatLng(parseFloat(marker.attr("lat")),parseFloat(marker.attr("lng")));
		//Icon Sytyle
			var image = 'images/SeminoleCountySignal.png' ;
			var marker = new google.maps.Marker({
				position: latlng, 
				map: map,
				icon: image
				});
		//Contents of Info Window
				var contentString = '<div id="signalinfowindow"><img src="images/SeminoleCountySmallSeal.gif">' + 
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
