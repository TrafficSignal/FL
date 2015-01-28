//Written by Emmanuel Posadas - October 2015

// Base map Initialization
function clearbasemap() {
	var myOptions = {
      zoom: 7,
      center: new google.maps.LatLng(28.535241,-81.382843),
      mapTypeControl: true,
      mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DEFAULT
      },
      zoomControl: true,
      zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE
      },
      mapTypeId: google.maps.MapTypeId.ROADMAP
    } 
map = new google.maps.Map(document.getElementById("map_canvas1"), myOptions);    
google.maps.event.addDomListener(window, 'load', clearbasemap);
}

// Base map Initialization for District 1
function clearD1basemap() {
	var myOptions = {
      zoom: 9,
      center: new google.maps.LatLng(27.2133642,-81.4246771),
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DEFAULT
      },
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE
      },
      mapTypeId: google.maps.MapTypeId.ROADMAP
    } 
	map = new google.maps.Map(document.getElementById("map_canvas1"), myOptions);    
google.maps.event.addDomListener(window, 'load', clearD1basemap)
}

// Base map Initialization for District 2
function clearD2basemap() {
	var myOptions = {
      zoom: 9,
      center: new google.maps.LatLng(29.8751447,-82.3013591),
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DEFAULT
      },
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE
      },
      mapTypeId: google.maps.MapTypeId.ROADMAP
    } 
	map = new google.maps.Map(document.getElementById("map_canvas1"), myOptions);    
google.maps.event.addDomListener(window, 'load', clearD2basemap)
}

// Base map Initialization for District 3
function clearD3basemap() {
	var myOptions = {
      zoom: 9,
      center: new google.maps.LatLng(30.2897242,-85.6383867),
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DEFAULT
      },
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE
      },
      mapTypeId: google.maps.MapTypeId.ROADMAP
    } 
	map = new google.maps.Map(document.getElementById("map_canvas1"), myOptions);    
google.maps.event.addDomListener(window, 'load', clearD3basemap)
}

// Base map Initialization for District 4
function clearD4basemap() {
	var myOptions = {
      zoom: 9,
      center: new google.maps.LatLng(26.821865,-80.294128),
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DEFAULT
      },
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE
      },
      mapTypeId: google.maps.MapTypeId.ROADMAP
    } 
	map = new google.maps.Map(document.getElementById("map_canvas1"), myOptions);    
google.maps.event.addDomListener(window, 'load', clearD4basemap)
}

function clearD5basemap() {
	var myOptions = {
      zoom: 9,
      center: new google.maps.LatLng(28.5265758,-81.1428436),
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DEFAULT
      },
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE
      },
      mapTypeId: google.maps.MapTypeId.ROADMAP
    } 
	map = new google.maps.Map(document.getElementById("map_canvas1"), myOptions);    
google.maps.event.addDomListener(window, 'load', clearD4basemap)
}

// Base map Initialization for District 6
function clearD6basemap() {
	var myOptions = {
      zoom: 9,
      center: new google.maps.LatLng(25.3371077,-80.7449086),
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DEFAULT
      },
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE
      },
      mapTypeId: google.maps.MapTypeId.ROADMAP
    } 
	map = new google.maps.Map(document.getElementById("map_canvas1"), myOptions);    
google.maps.event.addDomListener(window, 'load', clearD6basemap)
}

// Base map Initialization for District 7
function clearD7basemap() {
	var myOptions = {
      zoom: 9,
      center: new google.maps.LatLng(28.2081936,-82.0603545),
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DEFAULT
      },
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE
      },
      mapTypeId: google.maps.MapTypeId.ROADMAP
    } 
	map = new google.maps.Map(document.getElementById("map_canvas1"), myOptions);    
google.maps.event.addDomListener(window, 'load', clearD7basemap)
}
