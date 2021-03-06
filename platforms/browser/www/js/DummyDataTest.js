$(document).ready(function(){
  var markers = new listOfLocation();
//dummy data
  var location1 = new location(0,43.318364, 21.891335,"Restoran1","Restaurant","018/561663","8-21h","nikolan92@hotmail.com");
  var location2 = new location(1,43.317365, 21.892333,"Restoran2","Restaurant","018/561663","8-21h","nikolan92@hotmail.com");
  var location3 = new location(2,43.316362, 21.893334,"Caffe1","Caffe","018/561663","8-21h","nikolan92@hotmail.com");
  var location4 = new location(3,43.312363, 21.894336,"Caffe2","Caffe","018/561663","8-21h","nikolan92@hotmail.com");
  var location5 = new location(4,43.314367, 21.898332,"Kafana1","Kafana","018/561663","8-21h","nikolan92@hotmail.com");
  var location6 = new location(5,43.311367, 21.89212,"Pab","Pub","018/561663","8-21h","nikolan92@hotmail.com");
  markers.addLocation(location1);
  markers.addLocation(location2);
  markers.addLocation(location3);
  markers.addLocation(location4);
  markers.addLocation(location5);
  markers.addLocation(location6);

  markers.removeLocation(3);

  for(var i=0;i<markers.getLength();i++)
    console.log(markers.getLocation(i));

  var locInJSON = markers.getLocationsInJSON();//funkcija vraca JSON string

    console.log(locInJSON);

  markers.setLocationsFromJSON(locInJSON);// funkcija brise postojeci niz lokacija ako postoji i postavlja novi iz JSON stringa


  for(var i=0;i<markers.getLength();i++)//nakon parsiranja moze da se koristi kao sto se i koristio pre
      console.log(markers.getLocation(i).name);

//add new location in dataBase on server then read all locations and show on map
//Get all locations from server
$.ajax({
  type: "GET",
  url: "http://localhost:3000/api/getAllLocations",
  //data: location1,
  success: function(data){
    console.log("Server response: All locations from server:");
    console.log(data);
    var locations = new listOfLocation();
    locations.setLocationsFromJSON(JSON.stringify(data));
    prepareAndShowLocations(locations);
  }
});
//insert location on server
$.ajax({
  type: "POST",
  url: "http://localhost:3000/api/insertLocation",
  data: location5,
  success: function(data){
    console.log("Server response: Insert locations:");
    console.log(data);
  }
});


});
