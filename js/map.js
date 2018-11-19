function initMap(){
  var childhood = {lat: 39.913724, lng: 116.443683};
  var middeschool = {lat: 39.902829, lng : 116.255998};
  var highschool = {lat: 39.963121, lng : 116.335584};
  var university = {lat : 39.963067, lng: 116.358178};
  var weekend = {lat : 39.927823, lng: 116.682894};
  var map = new google.maps.Map(
    document.getElementById('map'), {
    zoom: 11, center: childhood
    }
  );

  var marker1 = new google.maps.Marker({
    position: childhood,
    map: map
  });
  
  var marker2 = new google.maps.Marker({
    position: middeschool,
    map: map
  });
  
  var marker3 = new google.maps.Marker({
    position: highschool,
    map: map
  });
  
  var marker4 = new google.maps.Marker({
    position: university,
    map: map
  });
  
  var marker5 = new google.maps.Marker({
    position: weekend,
    map: map
  });
}