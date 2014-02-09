
function initialize() {
  var latlng = new google.maps.LatLng(35.681382, 139.766084);
  var myOptions = {
    zoom: 10,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
  
  var content = '<div id="infoWindow">' +
    '<h1>提供：</h1>' +
    '<a href="https://www.google.co.jp/" target="_blank">写真<span>（未完成）</span>はこちら</a></p>' +
    '</div>';
  var infowindow = new google.maps.InfoWindow({
    content: content
  });
   
  var image = 'img/ico_lopan.png';
  var lopanMarker = new google.maps.Marker({
    position: latlng,
    map: map,
    icon: image,
    title: 'Lopan cafe'
  });
  
  google.maps.event.addListener(lopanMarker, 'click', function() {
    infowindow.open(map, lopanMarker);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);