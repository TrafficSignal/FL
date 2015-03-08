
function loadBrowardCountySignals(){ 
	jQuery.get("xml/BrowardCountySignal.xml", {}, function(data) {
		jQuery(data).find("marker").each(function() {
			var marker = jQuery(this);
			var intname = $(this).attr('intname');
			var intnum = $(this).attr('intnum');
			var latlng = new google.maps.LatLng(parseFloat(marker.attr("lat")),parseFloat(marker.attr("lng")));
		//Icon Sytyle
			var image = 'images/BrowardCountySignal.png' ;
			var marker = new google.maps.Marker({
				position: latlng, 
				map: map,
				icon: image
				});
		//Contents of Info Window
				var contentString = '<div id="signalinfowindow"><img src="images/BrowardCountySmallSeal.gif">' + 
				'Intersection number: <b>' +intnum+ '</b><br>' +
				'Intersection name:<b>' +intname+ '</b><br>' +
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

function loadBocaRatonSignals(){ 
	jQuery.get("xml/BocaRatonSignal.xml", {}, function(data) {
		jQuery(data).find("marker").each(function() {
			var marker = jQuery(this);
			var intname = $(this).attr('intname');
			var intnum = $(this).attr('intnum');
			var url1 = $(this).attr('url1');
			var latlng = new google.maps.LatLng(parseFloat(marker.attr("lat")),parseFloat(marker.attr("lng")));
		//Icon Sytyle
			var image = 'images/BocaRatonSignal.png' ;
			var marker = new google.maps.Marker({
				position: latlng, 
				map: map,
				icon: image
				});
		//Contents of Info Window
			var contentString = '<div id="signalinfowindow"><img src="images/BocaRatonSmallSeal.gif">' + 
				'Intersection number: <b>' +intnum+ '</b><br>' +
				'Intersection name:<b>' +intname+ '</b><br>' +
				'<font size="1" color="green">'+	
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

function loadPalmBeachCountySignals(){ 
	jQuery.get("xml/PalmBeachCountySignal.xml", {}, function(data) {
		jQuery(data).find("marker").each(function() {
			var marker = jQuery(this);
			var intname = $(this).attr('intname');
			var intnum = $(this).attr('intnum');
			var latlng = new google.maps.LatLng(parseFloat(marker.attr("lat")),parseFloat(marker.attr("lng")));
		//Icon Sytyle
			var image = 'images/PalmBeachCountySignal.png' ;
			var marker = new google.maps.Marker({
				position: latlng, 
				map: map,
				icon: image
				});
		//Contents of Info Window
				var contentString = '<div id="signalinfowindow"><img src="images/PalmBeachCountySmallSeal.gif">' + 
				'Intersection/system number: <b>' +intnum+ '</b><br>' +
				'Intersection name:<b>' +intname+ '</b><br>' +
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

function loadTownofPalmBeachSignals(){ 
	jQuery.get("xml/TownofPalmBeachSignal.xml", {}, function(data) {
		jQuery(data).find("marker").each(function() {
			var marker = jQuery(this);
			var intname = $(this).attr('intname');
			var intnum = $(this).attr('intnum');
			var latlng = new google.maps.LatLng(parseFloat(marker.attr("lat")),parseFloat(marker.attr("lng")));
		//Icon Sytyle
			var image = 'images/TownofPalmBeachSignal.png' ;
			var marker = new google.maps.Marker({
				position: latlng, 
				map: map,
				icon: image
				});
		//Contents of Info Window
				var contentString = '<div id="signalinfowindow"><img src="images/TownofPalmBeachSmallSeal.gif">' + 
				'Intersection/system number: <b>' +intnum+ '</b><br>' +
				'Intersection name:<b>' +intname+ '</b><br>' +
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

function loadMartinCountySignals(){ 
	jQuery.get("xml/MartinCountySignal.xml", {}, function(data) {
		jQuery(data).find("marker").each(function() {
			var marker = jQuery(this);
			var intname = $(this).attr('intname');
			var intnum = $(this).attr('intnum');
			var latlng = new google.maps.LatLng(parseFloat(marker.attr("lat")),parseFloat(marker.attr("lng")));
		//Icon Style
			var image = 'images/MartinCountySignal.png' ;
			var marker = new google.maps.Marker({
				position: latlng, 
				map: map,
				icon: image
				});
		//Contents of Info Window
				var contentString = '<div id="signalinfowindow"><img src="images/MartinCountySmallSeal.gif">' + 
				'Intersection number: <b>' +intnum+ '</b><br>' +
				'Intersection name:<b>' +intname+ '</b><br>' +
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

function loadFortPierceSignals(){ 
	jQuery.get("xml/FortPierceSignal.xml", {}, function(data) {
		jQuery(data).find("marker").each(function() {
			var marker = jQuery(this);
			var intname = $(this).attr('intname');
			var intnum = $(this).attr('intnum');
			var url1 = $(this).attr('url1');
			var latlng = new google.maps.LatLng(parseFloat(marker.attr("lat")),parseFloat(marker.attr("lng")));
		//Icon Sytyle
			var image = 'images/FortPierceSignal.png' ;
			var marker = new google.maps.Marker({
				position: latlng, 
				map: map,
				icon: image
				});
		//Contents of Info Window
			var contentString = '<div id="signalinfowindow"><img src="images/FortPierceSmallSeal.gif">' + 
				'Intersection number: <b>' +intnum+ '</b><br>' +
				'Intersection name:<b>' +intname+ '</b><br>' +
				'<font size="1" color="green">'+			
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

function loadPortStLucieSignals(){ 
	jQuery.get("xml/PortStLucieSignal.xml", {}, function(data) {
		jQuery(data).find("marker").each(function() {
			var marker = jQuery(this);
			var intname = $(this).attr('intname');
			var intnum = $(this).attr('intnum');
			var url1 = $(this).attr('url1');
			var latlng = new google.maps.LatLng(parseFloat(marker.attr("lat")),parseFloat(marker.attr("lng")));
		//Icon Sytyle
			var image = 'images/PortStLucieSignal.png' ;
			var marker = new google.maps.Marker({
				position: latlng, 
				map: map,
				icon: image
				});
		//Contents of Info Window
			var contentString = '<div id="signalinfowindow"><img src="images/PortStLucieSmallSeal.gif">' + 
				'Intersection number: <b>' +intnum+ '</b><br>' +
				'Intersection name:<b>' +intname+ '</b><br>' +
				'<font size="1" color="green">'+				
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

function loadStLucieCountySignals(){ 
	jQuery.get("xml/StLucieCountySignal.xml", {}, function(data) {
		jQuery(data).find("marker").each(function() {
			var marker = jQuery(this);
			var intname = $(this).attr('intname');
			var intnum = $(this).attr('intnum');
			var url1 = $(this).attr('url1');
			var latlng = new google.maps.LatLng(parseFloat(marker.attr("lat")),parseFloat(marker.attr("lng")));
		//Icon Sytyle
			var image = 'images/StLucieCountySignal.png' ;
			var marker = new google.maps.Marker({
				position: latlng, 
				map: map,
				icon: image
				});
		//Contents of Info Window
			var contentString = '<div id="signalinfowindow"><img src="images/StLucieCountySmallSeal.gif">' + 
				'Intersection number: <b>' +intnum+ '</b><br>' +
				'Intersection name:<b>' +intname+ '</b><br>' +
				'<font size="1" color="green">'+				
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

function loadIndianRiverCountySignals(){ 
	jQuery.get("xml/IndianRiverCountySignal.xml", {}, function(data) {
		jQuery(data).find("marker").each(function() {
			var marker = jQuery(this);
			var intname = $(this).attr('intname');
			var intnum = $(this).attr('intnum');
			var latlng = new google.maps.LatLng(parseFloat(marker.attr("lat")),parseFloat(marker.attr("lng")));
		//Icon Style
			var image = 'images/IndianRiverCountySignal.png' ;
			var marker = new google.maps.Marker({
				position: latlng, 
				map: map,
				icon: image
				});
		//Contents of Info Window
				var contentString = '<div id="signalinfowindow"><img src="images/IndianRiverCountySmallSeal.gif">' + 
				'Intersection number: <b>' +intnum+ '</b><br>' +
				'Intersection name:<b>' +intname+ '</b><br>' +
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
