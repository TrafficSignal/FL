//Contents of Info Window for Broward County
		var BrowardContentString = '<div class="D4districtinfowindow">' + 
		' <strong>Broward County</strong> <br>' +
		' Address <br>' +
		' City, Zip <br>' +
		' Phone:  <br>' +
		'[ <a href="http://www.broward.org/publicworks/Pages/Default.aspx" target="new"> Public Works </a> |' +
		'<a href="http://www.broward.org/Traffic/Pages/Default.aspx" target="new"> Traffic Engineering </a> ]' +
		'</div>' ;
		var Browardcp = new google.maps.LatLng(26.1871883,-80.1730834);
		var BrowardInfowindow = new google.maps.InfoWindow({ 
		content:BrowardContentString,
		maxWidth:500
		});
		BrowardInfowindow.setPosition (Browardcp);	

//Contents of Info Window for Palm Beach County