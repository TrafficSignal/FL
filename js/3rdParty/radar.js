  //Wrutten by Emmanuel Posadas
  // for City of Boca Raton
  //GOES and NEXRAD Data provided by Open Geo spatial Consortium  and IOWA state Mesonet http://mesonet.agron.iastate.edu/ogc/
  
  function loadRadar() {
		 		 
		 tileNEX = new google.maps.ImageMapType({
            getTileUrl: function(tile, zoom) {
                return "http://mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913/" + zoom + "/" + tile.x + "/" + tile.y +".png?"+ (new Date()).getTime(); 
            },
            tileSize: new google.maps.Size(256, 256),
            opacity:0.60,
            name : 'NEXRAD',
            isPng: true
        });

		goes = new google.maps.ImageMapType({
            getTileUrl: function(tile, zoom) {
                return "http://mesonet.agron.iastate.edu/cache/tile.py/1.0.0/goes-east-vis-1km-900913/" + zoom + "/" + tile.x + "/" + tile.y +".png?"+ (new Date()).getTime(); 
            },
            tileSize: new google.maps.Size(256, 256),
            opacity:0.60,
            name : 'GOES East Vis',
            isPng: true
        });

        map.overlayMapTypes.push(null); // create empty overlay entry
        map.overlayMapTypes.setAt("0",goes);
        map.overlayMapTypes.push(null); // create empty overlay entry
        map.overlayMapTypes.setAt("1",tileNEX);

	google.maps.event.addDomListener(window, 'load', loadRadar);
	
      }

	  