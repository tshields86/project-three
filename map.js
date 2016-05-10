var grand = {
  map :"",
  userLong: "",
  userLat: "",
  geocodeURL: "",
  fsQueryLimit: 20,
  fsQueryDesc: "food",
  fsCandidateToNYC: "",
  bothRestaurantEndPoint: "",
  k: 0,
  building:"",
  street: "",

  geoLocateUser: function(){
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("user latitude" + position.coords.latitude);
      console.log("user longitude" + position.coords.longitude);
      grand.userLat = position.coords.latitude;
      grand.userLong = position.coords.longitude;

      L.mapbox.accessToken = ajaxInfo.mbKey;
      grand.map = L.mapbox.map('map', 'mapbox.streets').setView([grand.userLat, grand.userLong], 16);

      var geocoder = L.mapbox.geocoder('mapbox.places')

      L.mapbox.featureLayer({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          grand.userLong,
          grand.userLat
        ]
      },
      properties: {
        title: 'You are here',
        // description: '1718 14th St NW, Washington, DC',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'large',
        'marker-color': '#f86767',
        'marker-symbol': 'pitch'
      }
    }).addTo(grand.map);
      var fsEndPoint = 'https://api.foursquare.com/v2/venues/search?oauth_token=' + ajaxInfo.fsKey + '&limit=' + grand.fsQueryLimit  + '&ll=' + grand.userLat + ',' + grand.userLong + '&query=' + grand.fsQueryDesc;
      grand.AjaxModel(grand.fsAction, fsEndPoint);
      console.log("B:" +fsEndPoint);
    });
  },

  pointOnMap:function(longitude, latitude, color){
    L.mapbox.featureLayer({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          latitude,
          longitude
        ]
      },
      properties: {
        title: 'Restaurant',
        'marker-size': 'large',
        'marker-color': color,
        'marker-symbol': 'restaurant'
      }
    }).addTo(grand.map)
  }
};


Window.map.featureLayer.on('ready', function(e) {
    var markers = [];
    this.eachLayer(function(marker) { markers.push(marker); });
    removeLayer(markers);
});
