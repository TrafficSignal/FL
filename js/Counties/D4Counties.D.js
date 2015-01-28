// Coded by Emmanuel Posadas using Geocoded US Census Data and Florida County Fusion Tables
// Source retrieved December 2010
//https://www.google.com/fusiontables/DataSource?docid=1VTihrUSyYjEDY5lsTXa3k_M5nfYa2SX9kGGPXQ#rows:id=1

var 	FLBrowardCoords = [],
		FLPalmBeachCoords = [],
		FLMartinCoords = [],
		FLStLucieCoords = [],
		FLIndianRiverCoords = [];

var 	FLBrowardPolygon,
		FLPalmBeachPolygon,
		FLMartinPolygon,
		FLStLuciePolygon,
		FLIndianRiverPolygon; 

function FLBroward() {
// Define the LatLng coordinates for the polygon's path.
FLBrowardCoords = [
new google.maps.LatLng(25.97357,-80.17441),
new google.maps.LatLng(25.97348,-80.18189),
new google.maps.LatLng(25.97323,-80.19039),
new google.maps.LatLng(25.97285,-80.20383),
new google.maps.LatLng(25.97231,-80.22696),
new google.maps.LatLng(25.97188,-80.24653),
new google.maps.LatLng(25.97131,-80.2622),
new google.maps.LatLng(25.97089,-80.28197),
new google.maps.LatLng(25.95691,-80.29497),
new google.maps.LatLng(25.95717,-80.31077),
new google.maps.LatLng(25.95716,-80.3135),
new google.maps.LatLng(25.95716,-80.34114),
new google.maps.LatLng(25.95705,-80.35898),
new google.maps.LatLng(25.95704,-80.39353),
new google.maps.LatLng(25.95685,-80.44119),
new google.maps.LatLng(25.95675,-80.4555),
new google.maps.LatLng(25.95697,-80.52843),
new google.maps.LatLng(25.95689,-80.65433),
new google.maps.LatLng(25.9791,-80.80925),
new google.maps.LatLng(25.97943,-80.87293),
new google.maps.LatLng(25.98157,-80.87294),
new google.maps.LatLng(25.99036,-80.87296),
new google.maps.LatLng(25.99294,-80.87297),
new google.maps.LatLng(25.99965,-80.87297),
new google.maps.LatLng(25.9999,-80.87289),
new google.maps.LatLng(26.00141,-80.87278),
new google.maps.LatLng(26.01022,-80.87309),
new google.maps.LatLng(26.03465,-80.87396),
new google.maps.LatLng(26.0582,-80.87479),
new google.maps.LatLng(26.05952,-80.8748),
new google.maps.LatLng(26.07046,-80.87512),
new google.maps.LatLng(26.10437,-80.8761),
new google.maps.LatLng(26.12536,-80.87665),
new google.maps.LatLng(26.14064,-80.87768),
new google.maps.LatLng(26.14115,-80.8777),
new google.maps.LatLng(26.16633,-80.87886),
new google.maps.LatLng(26.17272,-80.87915),
new google.maps.LatLng(26.1731,-80.87915),
new google.maps.LatLng(26.1732,-80.87915),
new google.maps.LatLng(26.17327,-80.87915),
new google.maps.LatLng(26.18633,-80.87926),
new google.maps.LatLng(26.19316,-80.87932),
new google.maps.LatLng(26.20742,-80.87944),
new google.maps.LatLng(26.22215,-80.87957),
new google.maps.LatLng(26.23256,-80.87962),
new google.maps.LatLng(26.25273,-80.87971),
new google.maps.LatLng(26.25945,-80.87981),
new google.maps.LatLng(26.26162,-80.87988),
new google.maps.LatLng(26.27102,-80.88021),
new google.maps.LatLng(26.27394,-80.88031),
new google.maps.LatLng(26.28824,-80.8808),
new google.maps.LatLng(26.29693,-80.88105),
new google.maps.LatLng(26.29924,-80.88111),
new google.maps.LatLng(26.31298,-80.88107),
new google.maps.LatLng(26.31471,-80.88115),
new google.maps.LatLng(26.31669,-80.88118),
new google.maps.LatLng(26.31723,-80.88118),
new google.maps.LatLng(26.31971,-80.88119),
new google.maps.LatLng(26.32911,-80.88121),
new google.maps.LatLng(26.32935,-80.88121),
new google.maps.LatLng(26.32956,-80.88121),
new google.maps.LatLng(26.32977,-80.88122),
new google.maps.LatLng(26.33,-80.88122),
new google.maps.LatLng(26.33034,-80.88123),
new google.maps.LatLng(26.33066,-80.88123),
new google.maps.LatLng(26.33094,-80.88121),
new google.maps.LatLng(26.33108,-80.88119),
new google.maps.LatLng(26.3312,-80.88119),
new google.maps.LatLng(26.33126,-80.88119),
new google.maps.LatLng(26.33146,-80.8812),
new google.maps.LatLng(26.33205,-80.88121),
new google.maps.LatLng(26.33221,-80.88121),
new google.maps.LatLng(26.33334,-80.88123),
new google.maps.LatLng(26.33381,-80.88123),
new google.maps.LatLng(26.33388,-80.87479),
new google.maps.LatLng(26.33422,-80.62478),
new google.maps.LatLng(26.33464,-80.54932),
new google.maps.LatLng(26.33459,-80.53618),
new google.maps.LatLng(26.33439,-80.27902),
new google.maps.LatLng(26.33457,-80.24094),
new google.maps.LatLng(26.33285,-80.22095),
new google.maps.LatLng(26.32783,-80.20285),
new google.maps.LatLng(26.32785,-80.19658),
new google.maps.LatLng(26.32779,-80.18569),
new google.maps.LatLng(26.32777,-80.17741),
new google.maps.LatLng(26.32781,-80.16972),
new google.maps.LatLng(26.32782,-80.14676),
new google.maps.LatLng(26.32785,-80.13168),
new google.maps.LatLng(26.3278,-80.1287),
new google.maps.LatLng(26.32779,-80.12509),
new google.maps.LatLng(26.32785,-80.11691),
new google.maps.LatLng(26.32782,-80.10336),
new google.maps.LatLng(26.32595,-80.09831),
new google.maps.LatLng(26.32286,-80.09895),
new google.maps.LatLng(26.32276,-80.09619),
new google.maps.LatLng(26.3257,-80.09366),
new google.maps.LatLng(26.32555,-80.09078),
new google.maps.LatLng(26.32186,-80.08865),
new google.maps.LatLng(26.32086,-80.08179),
new google.maps.LatLng(26.32096,-80.01528),
new google.maps.LatLng(26.30746,-80.01562),
new google.maps.LatLng(26.26697,-80.01667),
new google.maps.LatLng(26.25798,-80.0169),
new google.maps.LatLng(26.25352,-80.01755),
new google.maps.LatLng(26.2433,-80.01903),
new google.maps.LatLng(26.21263,-80.02348),
new google.maps.LatLng(26.20241,-80.02497),
new google.maps.LatLng(26.18043,-80.02816),
new google.maps.LatLng(26.1145,-80.03773),
new google.maps.LatLng(26.09252,-80.04092),
new google.maps.LatLng(26.09246,-80.04092),
new google.maps.LatLng(26.07137,-80.04296),
new google.maps.LatLng(26.0079,-80.04908),
new google.maps.LatLng(25.98674,-80.05112),
new google.maps.LatLng(25.98438,-80.05135),
new google.maps.LatLng(25.97731,-80.05203),
new google.maps.LatLng(25.97509,-80.12125),
new google.maps.LatLng(25.97487,-80.13405),
new google.maps.LatLng(25.97441,-80.14786),
new google.maps.LatLng(25.97426,-80.15232),
new google.maps.LatLng(25.9741,-80.15733),
new google.maps.LatLng(25.97382,-80.16559),
new google.maps.LatLng(25.97357,-80.17439),
new google.maps.LatLng(25.97357,-80.17439)
];
 // Construct the polygon.
FLBrowardPolygon = new google.maps.Polygon({
    paths: FLBrowardCoords,
    strokeColor: '#08088A',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#5882FA',
    fillOpacity: 0.35
  });
FLBrowardPolygon.setMap(map);
google.maps.event.addListener(FLBrowardPolygon, 'click', function() {
		BrowardInfowindow.open(map); 
	});
} 

function FLPalmBeach() {
// Define the LatLng coordinates for the polygon's path.
FLPalmBeachCoords = [
new google.maps.LatLng(26.95663,-80.14475),
new google.maps.LatLng(26.97094,-80.14167),
new google.maps.LatLng(26.97093,-80.13276),
new google.maps.LatLng(26.97091,-80.12417),
new google.maps.LatLng(26.97083,-80.10916),
new google.maps.LatLng(26.97069,-80.10453),
new google.maps.LatLng(26.97064,-80.0996),
new google.maps.LatLng(26.97059,-80.09531),
new google.maps.LatLng(26.97053,-80.08753),
new google.maps.LatLng(26.97039,-80.02275),
new google.maps.LatLng(26.94384,-80.01489),
new google.maps.LatLng(26.94314,-80.01468),
new google.maps.LatLng(26.94169,-80.01425),
new google.maps.LatLng(26.93829,-80.01324),
new google.maps.LatLng(26.91118,-80.0052),
new google.maps.LatLng(26.89282,-79.99976),
new google.maps.LatLng(26.88963,-79.99895),
new google.maps.LatLng(26.88223,-79.9966),
new google.maps.LatLng(26.88181,-79.99646),
new google.maps.LatLng(26.87534,-79.99391),
new google.maps.LatLng(26.87303,-79.99352),
new google.maps.LatLng(26.86637,-79.99192),
new google.maps.LatLng(26.86063,-79.99085),
new google.maps.LatLng(26.85884,-79.99083),
new google.maps.LatLng(26.85655,-79.9908),
new google.maps.LatLng(26.85301,-79.98973),
new google.maps.LatLng(26.83663,-79.98531),
new google.maps.LatLng(26.83583,-79.9851),
new google.maps.LatLng(26.82897,-79.98362),
new google.maps.LatLng(26.81422,-79.97933),
new google.maps.LatLng(26.80873,-79.97774),
new google.maps.LatLng(26.80025,-79.97542),
new google.maps.LatLng(26.79241,-79.97431),
new google.maps.LatLng(26.78603,-79.97486),
new google.maps.LatLng(26.78168,-79.97546),
new google.maps.LatLng(26.78081,-79.97546),
new google.maps.LatLng(26.77921,-79.97547),
new google.maps.LatLng(26.77481,-79.97488),
new google.maps.LatLng(26.77293,-79.97501),
new google.maps.LatLng(26.76499,-79.97556),
new google.maps.LatLng(26.75629,-79.97713),
new google.maps.LatLng(26.75034,-79.97965),
new google.maps.LatLng(26.74677,-79.97944),
new google.maps.LatLng(26.74023,-79.97902),
new google.maps.LatLng(26.73277,-79.97868),
new google.maps.LatLng(26.72671,-79.97915),
new google.maps.LatLng(26.72392,-79.97864),
new google.maps.LatLng(26.72192,-79.97837),
new google.maps.LatLng(26.71608,-79.97758),
new google.maps.LatLng(26.71345,-79.97695),
new google.maps.LatLng(26.70823,-79.97473),
new google.maps.LatLng(26.70753,-79.97473),
new google.maps.LatLng(26.7026,-79.97473),
new google.maps.LatLng(26.6975,-79.97489),
new google.maps.LatLng(26.69209,-79.97572),
new google.maps.LatLng(26.68748,-79.97654),
new google.maps.LatLng(26.68293,-79.97837),
new google.maps.LatLng(26.67746,-79.97974),
new google.maps.LatLng(26.67575,-79.9799),
new google.maps.LatLng(26.6721,-79.98026),
new google.maps.LatLng(26.66363,-79.98088),
new google.maps.LatLng(26.65027,-79.9813),
new google.maps.LatLng(26.64736,-79.98127),
new google.maps.LatLng(26.63831,-79.98118),
new google.maps.LatLng(26.62534,-79.9813),
new google.maps.LatLng(26.61837,-79.98107),
new google.maps.LatLng(26.61543,-79.98099),
new google.maps.LatLng(26.60484,-79.98068),
new google.maps.LatLng(26.59545,-79.98065),
new google.maps.LatLng(26.59462,-79.98072),
new google.maps.LatLng(26.58772,-79.98134),
new google.maps.LatLng(26.58721,-79.98139),
new google.maps.LatLng(26.58403,-79.98168),
new google.maps.LatLng(26.57961,-79.98209),
new google.maps.LatLng(26.56925,-79.98248),
new google.maps.LatLng(26.56093,-79.98412),
new google.maps.LatLng(26.55379,-79.98511),
new google.maps.LatLng(26.55089,-79.98587),
new google.maps.LatLng(26.54938,-79.98551),
new google.maps.LatLng(26.54497,-79.98527),
new google.maps.LatLng(26.54471,-79.98526),
new google.maps.LatLng(26.53703,-79.98631),
new google.maps.LatLng(26.52726,-79.98854),
new google.maps.LatLng(26.52303,-79.99127),
new google.maps.LatLng(26.51,-79.99294),
new google.maps.LatLng(26.50853,-79.99313),
new google.maps.LatLng(26.50489,-79.9936),
new google.maps.LatLng(26.50295,-79.99386),
new google.maps.LatLng(26.50035,-79.9942),
new google.maps.LatLng(26.49606,-79.99557),
new google.maps.LatLng(26.49295,-79.99652),
new google.maps.LatLng(26.48849,-79.99669),
new google.maps.LatLng(26.48371,-79.99693),
new google.maps.LatLng(26.47748,-79.998),
new google.maps.LatLng(26.47616,-79.99836),
new google.maps.LatLng(26.47114,-79.99976),
new google.maps.LatLng(26.45453,-80.00253),
new google.maps.LatLng(26.43281,-80.00615),
new google.maps.LatLng(26.42646,-80.00689),
new google.maps.LatLng(26.39113,-80.011),
new google.maps.LatLng(26.36224,-80.01436),
new google.maps.LatLng(26.35098,-80.01461),
new google.maps.LatLng(26.33646,-80.01493),
new google.maps.LatLng(26.33614,-80.01494),
new google.maps.LatLng(26.32096,-80.01528),
new google.maps.LatLng(26.32086,-80.08179),
new google.maps.LatLng(26.32186,-80.08865),
new google.maps.LatLng(26.32555,-80.09078),
new google.maps.LatLng(26.3257,-80.09366),
new google.maps.LatLng(26.32276,-80.09619),
new google.maps.LatLng(26.32286,-80.09895),
new google.maps.LatLng(26.32595,-80.09831),
new google.maps.LatLng(26.32782,-80.10336),
new google.maps.LatLng(26.32785,-80.11691),
new google.maps.LatLng(26.32779,-80.12509),
new google.maps.LatLng(26.3278,-80.1287),
new google.maps.LatLng(26.32785,-80.13168),
new google.maps.LatLng(26.32782,-80.14676),
new google.maps.LatLng(26.32781,-80.16972),
new google.maps.LatLng(26.32777,-80.17741),
new google.maps.LatLng(26.32779,-80.18569),
new google.maps.LatLng(26.32785,-80.19658),
new google.maps.LatLng(26.32783,-80.20285),
new google.maps.LatLng(26.33285,-80.22095),
new google.maps.LatLng(26.33457,-80.24094),
new google.maps.LatLng(26.33439,-80.27902),
new google.maps.LatLng(26.33388,-80.87479),
new google.maps.LatLng(26.33381,-80.88123),
new google.maps.LatLng(26.3338,-80.88135),
new google.maps.LatLng(26.34654,-80.88004),
new google.maps.LatLng(26.41836,-80.88228),
new google.maps.LatLng(26.47161,-80.88269),
new google.maps.LatLng(26.50103,-80.88349),
new google.maps.LatLng(26.52204,-80.8839),
new google.maps.LatLng(26.54307,-80.88432),
new google.maps.LatLng(26.5653,-80.88481),
new google.maps.LatLng(26.59653,-80.8853),
new google.maps.LatLng(26.61069,-80.88552),
new google.maps.LatLng(26.62948,-80.88583),
new google.maps.LatLng(26.63832,-80.8859),
new google.maps.LatLng(26.6527,-80.88601),
new google.maps.LatLng(26.66641,-80.88611),
new google.maps.LatLng(26.67904,-80.8861),
new google.maps.LatLng(26.69632,-80.8861),
new google.maps.LatLng(26.71105,-80.8861),
new google.maps.LatLng(26.73275,-80.8861),
new google.maps.LatLng(26.74325,-80.88607),
new google.maps.LatLng(26.74533,-80.88605),
new google.maps.LatLng(26.74622,-80.88607),
new google.maps.LatLng(26.75752,-80.88621),
new google.maps.LatLng(26.75858,-80.8862),
new google.maps.LatLng(26.76496,-80.88618),
new google.maps.LatLng(26.76894,-80.88617),
new google.maps.LatLng(26.94918,-80.88567),
new google.maps.LatLng(26.95892,-80.88564),
new google.maps.LatLng(26.95902,-80.87478),
new google.maps.LatLng(26.95778,-80.62966),
new google.maps.LatLng(26.95789,-80.59689),
new google.maps.LatLng(26.95787,-80.45012),
new google.maps.LatLng(26.95839,-80.375),
new google.maps.LatLng(26.95829,-80.36482),
new google.maps.LatLng(26.95824,-80.35555),
new google.maps.LatLng(26.95815,-80.3379),
new google.maps.LatLng(26.95804,-80.32097),
new google.maps.LatLng(26.95795,-80.3051),
new google.maps.LatLng(26.9578,-80.28489),
new google.maps.LatLng(26.95738,-80.26219),
new google.maps.LatLng(26.95713,-80.23813),
new google.maps.LatLng(26.95668,-80.19064),
new google.maps.LatLng(26.95663,-80.16667),
new google.maps.LatLng(26.95663,-80.15317)
];
 // Construct the polygon.
FLPalmBeachPolygon = new google.maps.Polygon({
    paths: FLPalmBeachCoords,
    strokeColor: '#08088A',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#5882FA',
    fillOpacity: 0.35
  });
    FLPalmBeachPolygon.setMap(map);
} 

function FLMartin() {
// Define the LatLng coordinates for the polygon's path.
FLMartinCoords = [
new google.maps.LatLng(27.24348,-80.2853),
new google.maps.LatLng(27.24362,-80.2853),
new google.maps.LatLng(27.25649,-80.28499),
new google.maps.LatLng(27.26373,-80.28394),
new google.maps.LatLng(27.26334,-80.25734),
new google.maps.LatLng(27.2632,-80.24002),
new google.maps.LatLng(27.26312,-80.23678),
new google.maps.LatLng(27.2631,-80.20985),
new google.maps.LatLng(27.26303,-80.1998),
new google.maps.LatLng(27.25032,-80.13222),
new google.maps.LatLng(27.24139,-80.1279),
new google.maps.LatLng(27.23937,-80.1271),
new google.maps.LatLng(27.23594,-80.12501),
new google.maps.LatLng(27.23593,-80.125),
new google.maps.LatLng(27.23574,-80.12488),
new google.maps.LatLng(27.23555,-80.12476),
new google.maps.LatLng(27.23258,-80.12328),
new google.maps.LatLng(27.22079,-80.11644),
new google.maps.LatLng(27.21156,-80.11069),
new google.maps.LatLng(27.20206,-80.10822),
new google.maps.LatLng(27.19216,-80.10076),
new google.maps.LatLng(27.18064,-80.09541),
new google.maps.LatLng(27.16458,-80.09415),
new google.maps.LatLng(27.16374,-80.09409),
new google.maps.LatLng(27.15556,-80.09048),
new google.maps.LatLng(27.12533,-80.08095),
new google.maps.LatLng(27.10982,-80.07333),
new google.maps.LatLng(27.10831,-80.07258),
new google.maps.LatLng(27.0916,-80.06338),
new google.maps.LatLng(27.08453,-80.06078),
new google.maps.LatLng(27.06446,-80.05338),
new google.maps.LatLng(27.02985,-80.0391),
new google.maps.LatLng(27.00863,-80.03327),
new google.maps.LatLng(27.00033,-80.03021),
new google.maps.LatLng(27.00033,-80.03025),
new google.maps.LatLng(26.97039,-80.02275),
new google.maps.LatLng(26.97053,-80.08753),
new google.maps.LatLng(26.97059,-80.09531),
new google.maps.LatLng(26.97064,-80.0996),
new google.maps.LatLng(26.97069,-80.10453),
new google.maps.LatLng(26.97083,-80.10916),
new google.maps.LatLng(26.97091,-80.12417),
new google.maps.LatLng(26.97093,-80.13276),
new google.maps.LatLng(26.97094,-80.14167),
new google.maps.LatLng(26.95663,-80.14475),
new google.maps.LatLng(26.95663,-80.15317),
new google.maps.LatLng(26.95663,-80.16667),
new google.maps.LatLng(26.95668,-80.19064),
new google.maps.LatLng(26.95713,-80.23813),
new google.maps.LatLng(26.95738,-80.26219),
new google.maps.LatLng(26.9578,-80.28489),
new google.maps.LatLng(26.95795,-80.3051),
new google.maps.LatLng(26.95804,-80.32097),
new google.maps.LatLng(26.95815,-80.3379),
new google.maps.LatLng(26.95824,-80.35555),
new google.maps.LatLng(26.95829,-80.36482),
new google.maps.LatLng(26.95839,-80.375),
new google.maps.LatLng(26.95787,-80.45012),
new google.maps.LatLng(26.95789,-80.59689),
new google.maps.LatLng(26.95778,-80.62966),
new google.maps.LatLng(26.95902,-80.87478),
new google.maps.LatLng(26.95892,-80.88564),
new google.maps.LatLng(26.96739,-80.87478),
new google.maps.LatLng(26.99079,-80.84499),
new google.maps.LatLng(27.00037,-80.83273),
new google.maps.LatLng(27.05714,-80.75791),
new google.maps.LatLng(27.06421,-80.74865),
new google.maps.LatLng(27.07406,-80.73626),
new google.maps.LatLng(27.11808,-80.68162),
new google.maps.LatLng(27.12101,-80.67815),
new google.maps.LatLng(27.12133,-80.67777),
new google.maps.LatLng(27.12168,-80.67743),
new google.maps.LatLng(27.12218,-80.67742),
new google.maps.LatLng(27.12488,-80.67742),
new google.maps.LatLng(27.12821,-80.67738),
new google.maps.LatLng(27.13805,-80.67741),
new google.maps.LatLng(27.1397,-80.67743),
new google.maps.LatLng(27.14825,-80.67755),
new google.maps.LatLng(27.15804,-80.67767),
new google.maps.LatLng(27.15847,-80.67768),
new google.maps.LatLng(27.16266,-80.67771),
new google.maps.LatLng(27.16586,-80.67772),
new google.maps.LatLng(27.1679,-80.67773),
new google.maps.LatLng(27.18412,-80.67782),
new google.maps.LatLng(27.19686,-80.67784),
new google.maps.LatLng(27.20295,-80.67785),
new google.maps.LatLng(27.20363,-80.67785),
new google.maps.LatLng(27.20481,-80.67786),
new google.maps.LatLng(27.20599,-80.67786),
new google.maps.LatLng(27.20623,-80.61966),
new google.maps.LatLng(27.20615,-80.57329),
new google.maps.LatLng(27.20625,-80.53781),
new google.maps.LatLng(27.20637,-80.52353),
new google.maps.LatLng(27.20639,-80.512),
new google.maps.LatLng(27.20634,-80.49995),
new google.maps.LatLng(27.20636,-80.48003),
new google.maps.LatLng(27.20608,-80.43899),
new google.maps.LatLng(27.2058,-80.40361),
new google.maps.LatLng(27.20577,-80.39966),
new google.maps.LatLng(27.20571,-80.39266),
new google.maps.LatLng(27.20565,-80.38431),
new google.maps.LatLng(27.2056,-80.37776),
new google.maps.LatLng(27.20579,-80.3449),
new google.maps.LatLng(27.20586,-80.30931),
new google.maps.LatLng(27.21061,-80.28545),
new google.maps.LatLng(27.23164,-80.28507)
];
 // Construct the polygon.
FLMartinPolygon = new google.maps.Polygon({
    paths: FLMartinCoords,
    strokeColor: '#08088A',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#5882FA',
    fillOpacity: 0.35
  });
    FLMartinPolygon.setMap(map);
} 
  
function FLStLucie() {
// Define the LatLng coordinates for the polygon's path.
FLStLucieCoords = [
new google.maps.LatLng(27.24348,-80.2853),
new google.maps.LatLng(27.23164,-80.28507),
new google.maps.LatLng(27.21061,-80.28545),
new google.maps.LatLng(27.20586,-80.30931),
new google.maps.LatLng(27.20579,-80.3449),
new google.maps.LatLng(27.2056,-80.37776),
new google.maps.LatLng(27.20565,-80.38431),
new google.maps.LatLng(27.20571,-80.39266),
new google.maps.LatLng(27.20577,-80.39966),
new google.maps.LatLng(27.2058,-80.40361),
new google.maps.LatLng(27.20608,-80.43899),
new google.maps.LatLng(27.20636,-80.48003),
new google.maps.LatLng(27.20634,-80.49995),
new google.maps.LatLng(27.20639,-80.512),
new google.maps.LatLng(27.20637,-80.52353),
new google.maps.LatLng(27.20625,-80.53781),
new google.maps.LatLng(27.20615,-80.57329),
new google.maps.LatLng(27.20623,-80.61966),
new google.maps.LatLng(27.20599,-80.67786),
new google.maps.LatLng(27.20746,-80.67787),
new google.maps.LatLng(27.24453,-80.67799),
new google.maps.LatLng(27.26056,-80.67843),
new google.maps.LatLng(27.303,-80.67773),
new google.maps.LatLng(27.34669,-80.67799),
new google.maps.LatLng(27.37275,-80.67808),
new google.maps.LatLng(27.38271,-80.67818),
new google.maps.LatLng(27.38851,-80.67835),
new google.maps.LatLng(27.39102,-80.67838),
new google.maps.LatLng(27.39494,-80.67836),
new google.maps.LatLng(27.42529,-80.67877),
new google.maps.LatLng(27.43386,-80.67876),
new google.maps.LatLng(27.43714,-80.67873),
new google.maps.LatLng(27.44012,-80.6787),
new google.maps.LatLng(27.44313,-80.67866),
new google.maps.LatLng(27.44735,-80.67862),
new google.maps.LatLng(27.44874,-80.67861),
new google.maps.LatLng(27.45683,-80.67927),
new google.maps.LatLng(27.48279,-80.67918),
new google.maps.LatLng(27.4914,-80.67936),
new google.maps.LatLng(27.49902,-80.6795),
new google.maps.LatLng(27.51483,-80.67984),
new google.maps.LatLng(27.52214,-80.67987),
new google.maps.LatLng(27.531,-80.68),
new google.maps.LatLng(27.54276,-80.67982),
new google.maps.LatLng(27.55776,-80.67979),
new google.maps.LatLng(27.55847,-80.67982),
new google.maps.LatLng(27.55847,-80.67981),
new google.maps.LatLng(27.5585,-80.66545),
new google.maps.LatLng(27.55844,-80.65755),
new google.maps.LatLng(27.55847,-80.64657),
new google.maps.LatLng(27.55866,-80.61552),
new google.maps.LatLng(27.55847,-80.56187),
new google.maps.LatLng(27.55844,-80.52833),
new google.maps.LatLng(27.55854,-80.51692),
new google.maps.LatLng(27.55831,-80.50313),
new google.maps.LatLng(27.55803,-80.47848),
new google.maps.LatLng(27.55803,-80.47042),
new google.maps.LatLng(27.5579,-80.45947),
new google.maps.LatLng(27.55779,-80.44754),
new google.maps.LatLng(27.55767,-80.43708),
new google.maps.LatLng(27.55754,-80.42898),
new google.maps.LatLng(27.55746,-80.41872),
new google.maps.LatLng(27.55753,-80.4002),
new google.maps.LatLng(27.55754,-80.37902),
new google.maps.LatLng(27.5573,-80.37039),
new google.maps.LatLng(27.55732,-80.36808),
new google.maps.LatLng(27.55722,-80.35947),
new google.maps.LatLng(27.55724,-80.35028),
new google.maps.LatLng(27.55725,-80.33694),
new google.maps.LatLng(27.56016,-80.33209),
new google.maps.LatLng(27.55726,-80.32759),
new google.maps.LatLng(27.55678,-80.26354),
new google.maps.LatLng(27.5493,-80.26114),
new google.maps.LatLng(27.54914,-80.26109),
new google.maps.LatLng(27.53788,-80.25622),
new google.maps.LatLng(27.52739,-80.25245),
new google.maps.LatLng(27.52661,-80.25217),
new google.maps.LatLng(27.52063,-80.25),
new google.maps.LatLng(27.52032,-80.24989),
new google.maps.LatLng(27.52,-80.24977),
new google.maps.LatLng(27.51979,-80.24977),
new google.maps.LatLng(27.51919,-80.24977),
new google.maps.LatLng(27.51898,-80.24977),
new google.maps.LatLng(27.51335,-80.24586),
new google.maps.LatLng(27.51282,-80.24586),
new google.maps.LatLng(27.5116,-80.24583),
new google.maps.LatLng(27.51017,-80.24579),
new google.maps.LatLng(27.50798,-80.24302),
new google.maps.LatLng(27.50489,-80.24),
new google.maps.LatLng(27.5014,-80.23725),
new google.maps.LatLng(27.50031,-80.23712),
new google.maps.LatLng(27.49472,-80.23313),
new google.maps.LatLng(27.49093,-80.23153),
new google.maps.LatLng(27.48563,-80.2293),
new google.maps.LatLng(27.48279,-80.229),
new google.maps.LatLng(27.47804,-80.2285),
new google.maps.LatLng(27.47291,-80.22796),
new google.maps.LatLng(27.46312,-80.22796),
new google.maps.LatLng(27.463,-80.22796),
new google.maps.LatLng(27.44696,-80.22239),
new google.maps.LatLng(27.44131,-80.2201),
new google.maps.LatLng(27.43672,-80.21823),
new google.maps.LatLng(27.4299,-80.21545),
new google.maps.LatLng(27.42472,-80.21335),
new google.maps.LatLng(27.4099,-80.20604),
new google.maps.LatLng(27.40328,-80.20278),
new google.maps.LatLng(27.39769,-80.20003),
new google.maps.LatLng(27.38091,-80.19176),
new google.maps.LatLng(27.37532,-80.189),
new google.maps.LatLng(27.37516,-80.18893),
new google.maps.LatLng(27.375,-80.18886),
new google.maps.LatLng(27.35269,-80.17912),
new google.maps.LatLng(27.33059,-80.16946),
new google.maps.LatLng(27.28528,-80.14844),
new google.maps.LatLng(27.26303,-80.1998),
new google.maps.LatLng(27.2631,-80.20985),
new google.maps.LatLng(27.26312,-80.23678),
new google.maps.LatLng(27.2632,-80.24002),
new google.maps.LatLng(27.26334,-80.25734),
new google.maps.LatLng(27.26373,-80.28394),
new google.maps.LatLng(27.25649,-80.28499),
new google.maps.LatLng(27.24362,-80.2853)
];
 // Construct the polygon.
FLStLuciePolygon = new google.maps.Polygon({
    paths: FLStLucieCoords,
    strokeColor: '#08088A',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#5882FA',
    fillOpacity: 0.35
  });
    FLStLuciePolygon.setMap(map);
} 
  
function FLIndianRiver() {
// Define the LatLng coordinates for the polygon's path.
FLIndianRiverCoords = [
new google.maps.LatLng(27.56209,-80.77719),
new google.maps.LatLng(27.58174,-80.77731),
new google.maps.LatLng(27.58506,-80.7773),
new google.maps.LatLng(27.59673,-80.77736),
new google.maps.LatLng(27.60067,-80.77739),
new google.maps.LatLng(27.60709,-80.77742),
new google.maps.LatLng(27.61049,-80.77744),
new google.maps.LatLng(27.61248,-80.77746),
new google.maps.LatLng(27.61586,-80.77748),
new google.maps.LatLng(27.61769,-80.77749),
new google.maps.LatLng(27.62039,-80.7775),
new google.maps.LatLng(27.62729,-80.77779),
new google.maps.LatLng(27.63218,-80.77787),
new google.maps.LatLng(27.64304,-80.79379),
new google.maps.LatLng(27.64269,-80.83272),
new google.maps.LatLng(27.64263,-80.84482),
new google.maps.LatLng(27.64238,-80.85214),
new google.maps.LatLng(27.64235,-80.85306),
new google.maps.LatLng(27.64228,-80.85845),
new google.maps.LatLng(27.64221,-80.86484),
new google.maps.LatLng(27.64228,-80.86932),
new google.maps.LatLng(27.64254,-80.87318),
new google.maps.LatLng(27.64313,-80.87323),
new google.maps.LatLng(27.64831,-80.87318),
new google.maps.LatLng(27.65154,-80.87326),
new google.maps.LatLng(27.65665,-80.8733),
new google.maps.LatLng(27.6598,-80.87332),
new google.maps.LatLng(27.66347,-80.87335),
new google.maps.LatLng(27.66415,-80.87335),
new google.maps.LatLng(27.66497,-80.87336),
new google.maps.LatLng(27.66557,-80.87336),
new google.maps.LatLng(27.67074,-80.8734),
new google.maps.LatLng(27.68317,-80.87348),
new google.maps.LatLng(27.69145,-80.87354),
new google.maps.LatLng(27.6946,-80.87356),
new google.maps.LatLng(27.69922,-80.87359),
new google.maps.LatLng(27.709,-80.87366),
new google.maps.LatLng(27.71341,-80.87368),
new google.maps.LatLng(27.73151,-80.87379),
new google.maps.LatLng(27.7337,-80.88007),
new google.maps.LatLng(27.74608,-80.88016),
new google.maps.LatLng(27.74833,-80.88015),
new google.maps.LatLng(27.75835,-80.88047),
new google.maps.LatLng(27.77692,-80.88077),
new google.maps.LatLng(27.77834,-80.88077),
new google.maps.LatLng(27.80917,-80.88117),
new google.maps.LatLng(27.82228,-80.88153),
new google.maps.LatLng(27.82251,-80.87478),
new google.maps.LatLng(27.82252,-80.86888),
new google.maps.LatLng(27.82245,-80.85254),
new google.maps.LatLng(27.82292,-80.82751),
new google.maps.LatLng(27.82298,-80.81215),
new google.maps.LatLng(27.82364,-80.76657),
new google.maps.LatLng(27.82315,-80.74519),
new google.maps.LatLng(27.82301,-80.74166),
new google.maps.LatLng(27.82293,-80.70716),
new google.maps.LatLng(27.82288,-80.67392),
new google.maps.LatLng(27.82239,-80.6136),
new google.maps.LatLng(27.82226,-80.57799),
new google.maps.LatLng(27.82221,-80.56164),
new google.maps.LatLng(27.82219,-80.55474),
new google.maps.LatLng(27.82211,-80.53557),
new google.maps.LatLng(27.82207,-80.51354),
new google.maps.LatLng(27.82206,-80.50947),
new google.maps.LatLng(27.82642,-80.50786),
new google.maps.LatLng(27.82861,-80.50581),
new google.maps.LatLng(27.83234,-80.50193),
new google.maps.LatLng(27.83489,-80.49957),
new google.maps.LatLng(27.84593,-80.49439),
new google.maps.LatLng(27.85291,-80.49361),
new google.maps.LatLng(27.8546,-80.49061),
new google.maps.LatLng(27.85461,-80.47849),
new google.maps.LatLng(27.85658,-80.45164),
new google.maps.LatLng(27.86026,-80.4481),
new google.maps.LatLng(27.86136,-80.38507),
new google.maps.LatLng(27.85899,-80.38389),
new google.maps.LatLng(27.85662,-80.38272),
new google.maps.LatLng(27.84883,-80.37886),
new google.maps.LatLng(27.84104,-80.375),
new google.maps.LatLng(27.84057,-80.37477),
new google.maps.LatLng(27.839,-80.37393),
new google.maps.LatLng(27.82711,-80.36756),
new google.maps.LatLng(27.7922,-80.34957),
new google.maps.LatLng(27.77702,-80.34187),
new google.maps.LatLng(27.77254,-80.33932),
new google.maps.LatLng(27.76492,-80.335),
new google.maps.LatLng(27.76116,-80.33253),
new google.maps.LatLng(27.75031,-80.32811),
new google.maps.LatLng(27.75015,-80.32806),
new google.maps.LatLng(27.75,-80.32801),
new google.maps.LatLng(27.74807,-80.32736),
new google.maps.LatLng(27.74456,-80.32618),
new google.maps.LatLng(27.74136,-80.3251),
new google.maps.LatLng(27.73913,-80.32435),
new google.maps.LatLng(27.73193,-80.32192),
new google.maps.LatLng(27.72486,-80.31954),
new google.maps.LatLng(27.71028,-80.31477),
new google.maps.LatLng(27.70305,-80.31241),
new google.maps.LatLng(27.70003,-80.31142),
new google.maps.LatLng(27.69383,-80.30939),
new google.maps.LatLng(27.69094,-80.30852),
new google.maps.LatLng(27.6879,-80.3076),
new google.maps.LatLng(27.67929,-80.305),
new google.maps.LatLng(27.67376,-80.30334),
new google.maps.LatLng(27.66712,-80.30117),
new google.maps.LatLng(27.66209,-80.29887),
new google.maps.LatLng(27.6537,-80.29654),
new google.maps.LatLng(27.65341,-80.29646),
new google.maps.LatLng(27.64479,-80.29526),
new google.maps.LatLng(27.64441,-80.2952),
new google.maps.LatLng(27.63928,-80.29493),
new google.maps.LatLng(27.62531,-80.2849),
new google.maps.LatLng(27.62204,-80.28192),
new google.maps.LatLng(27.62117,-80.28135),
new google.maps.LatLng(27.61957,-80.28087),
new google.maps.LatLng(27.61472,-80.27944),
new google.maps.LatLng(27.59837,-80.27483),
new google.maps.LatLng(27.59824,-80.2748),
new google.maps.LatLng(27.59666,-80.27442),
new google.maps.LatLng(27.58671,-80.27206),
new google.maps.LatLng(27.58173,-80.2709),
new google.maps.LatLng(27.5729,-80.26855),
new google.maps.LatLng(27.57251,-80.26842),
new google.maps.LatLng(27.55743,-80.26375),
new google.maps.LatLng(27.55678,-80.26354),
new google.maps.LatLng(27.55726,-80.32759),
new google.maps.LatLng(27.56016,-80.33209),
new google.maps.LatLng(27.55725,-80.33694),
new google.maps.LatLng(27.55724,-80.35028),
new google.maps.LatLng(27.55722,-80.35947),
new google.maps.LatLng(27.55732,-80.36808),
new google.maps.LatLng(27.5573,-80.37039),
new google.maps.LatLng(27.55754,-80.37902),
new google.maps.LatLng(27.55753,-80.4002),
new google.maps.LatLng(27.55746,-80.41872),
new google.maps.LatLng(27.55754,-80.42898),
new google.maps.LatLng(27.55767,-80.43708),
new google.maps.LatLng(27.55779,-80.44754),
new google.maps.LatLng(27.5579,-80.45947),
new google.maps.LatLng(27.55803,-80.47042),
new google.maps.LatLng(27.55803,-80.47848),
new google.maps.LatLng(27.55831,-80.50313),
new google.maps.LatLng(27.55854,-80.51692),
new google.maps.LatLng(27.55844,-80.52833),
new google.maps.LatLng(27.55847,-80.56187),
new google.maps.LatLng(27.55866,-80.61552),
new google.maps.LatLng(27.55847,-80.64657),
new google.maps.LatLng(27.55844,-80.65755),
new google.maps.LatLng(27.5585,-80.66545),
new google.maps.LatLng(27.55847,-80.67981),
new google.maps.LatLng(27.55847,-80.67982),
new google.maps.LatLng(27.55839,-80.70141),
new google.maps.LatLng(27.55859,-80.74051),
new google.maps.LatLng(27.55855,-80.74357),
new google.maps.LatLng(27.55871,-80.745),
new google.maps.LatLng(27.56208,-80.77718)
];
 // Construct the polygon.
FLIndianRiverPolygon = new google.maps.Polygon({
    paths: FLIndianRiverCoords,
    strokeColor: '#08088A',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#5882FA',
    fillOpacity: 0.35
  });
  FLIndianRiverPolygon.setMap(map);
} 

function loadD4Counties(){
	FLBroward();
	FLPalmBeach();
	FLMartin();
	FLStLucie();
	FLIndianRiver();
	document.getElementById('BrowardCheckBox').checked=!document.getElementById('BrowardCheckBox').checked;
	document.getElementById('PalmBeachCheckBox').checked=!document.getElementById('PalmBeachCheckBox').checked;
	document.getElementById('MartinCheckBox').checked=!document.getElementById('MartinCheckBox').checked;
	document.getElementById('StLucieCheckBox').checked=!document.getElementById('StLucieCheckBox').checked;
	document.getElementById('IndianRiverCheckBox').checked=!document.getElementById('IndianRiverCheckBox').checked;
}

function FLBrowardToggle(){
	if(document.getElementById('BrowardCheckBox').checked){ 
		FLBrowardPolygon.setMap(map); }
	else { FLBrowardPolygon.setMap(null); }
 }
 
function FLPalmBeachToggle(){
	if(document.getElementById('PalmBeachCheckBox').checked){ 
		FLPalmBeachPolygon.setMap(map); }
	else { FLPalmBeachPolygon.setMap(null); }
 }
 
function FLMartinToggle(){
	if(document.getElementById('MartinCheckBox').checked){ 
		FLMartinPolygon.setMap(map); }
	else { FLMartinPolygon.setMap(null); }
 }
 
 function FLStLucieToggle(){
	if(document.getElementById('StLucieCheckBox').checked){ 
		FLStLuciePolygon.setMap(map); }
	else { FLStLuciePolygon.setMap(null);	}
 }

function FLIndianRiverToggle(){
	if(document.getElementById('IndianRiverCheckBox').checked){ 
		FLIndianRiverPolygon.setMap(map);			}
	else { FLIndianRiverPolygon.setMap(null); }
 }
  
 


