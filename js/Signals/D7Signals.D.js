//Written by Emmanuel Posadas - November 2014


function loadHillsboroughCountySignals(){ 
	$.get("xml/HillsboroughCountySignal.xml", {}, function(data) {
		$(data).find("marker").each(function() {
			var marker = $(this);
			var intname = $(this).attr('intname');
			var intnum = $(this).attr('intnum');
			var latlng = new google.maps.LatLng(parseFloat(marker.attr("lat")),parseFloat(marker.attr("lng")));
		//Icon Sytyle
			var image = 'images/HillsboroughCountySignal.png' ;
			var marker = new google.maps.Marker({
				position: latlng, 
				map: map,
				icon: image
				});
		//Contents of Info Window
				var contentString = '<div id="signalinfowindow"><img src="images/HillsboroughCountySmallSeal.gif">' + 
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

function loadPascoCountySignals(){ 
	$.get("xml/PascoCountySignal.xml", {}, function(data) {
		$(data).find("marker").each(function() {
			var marker = $(this);
			var intname = $(this).attr('intname');
			var intnum = $(this).attr('intnum');
			var latlng = new google.maps.LatLng(parseFloat(marker.attr("lat")),parseFloat(marker.attr("lng")));
		//Icon Sytyle
			var image = 'images/PascoCountySignal.png' ;
			var marker = new google.maps.Marker({
				position: latlng, 
				map: map,
				icon: image
				});
		//Contents of Info Window
				var contentString = '<div id="signalinfowindow"><img src="images/PascoCountySmallSeal.gif">' + 
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

function loadCityofTampaSignals(){ 
	$.get("xml/CityofTampaSignal.xml", {}, function(data) {
		$(data).find("marker").each(function() {
			var marker = $(this);
			var intname = $(this).attr('intname');
			var intnum = $(this).attr('intnum');
			var latlng = new google.maps.LatLng(parseFloat(marker.attr("lat")),parseFloat(marker.attr("lng")));
		//Icon Sytyle
			var image = 'images/CityofTampaSignal.png' ;
			var marker = new google.maps.Marker({
				position: latlng, 
				map: map,
				icon: image
				});
		//Contents of Info Window
				var contentString = '<div id="signalinfowindow"><img src="images/CityofTampaSmallSeal.gif">' + 
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

