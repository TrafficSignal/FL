//Writen by Emmanuel Posadas
//For City of Boca Raton

function loadGTraffic() {
  var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
  google.maps.event.addDomListener(window, 'load', loadGTraffic);
}

function loadGTransit() {
  var transitLayer = new google.maps.TransitLayer();
  transitLayer.setMap(map);
  google.maps.event.addDomListener(window, 'load', loadGTransit);
}

function loadGBike() {
  var bikeLayer = new google.maps.BicyclingLayer()
  bikeLayer.setMap(map);
  google.maps.event.addDomListener(window, 'load', loadGBike);
}


