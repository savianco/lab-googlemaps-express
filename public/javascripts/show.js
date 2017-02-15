$(document).ready(function(){
	const sol = {
    lat: 40.437661,
    lng: -3.686677
    };
  const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: sol
    });

    // Add restaurant markers to map
      let title = myRestaurant.name
      let position = {
        lat: myRestaurant.location.coordinates[1],
        lng: myRestaurant.location.coordinates[0]
      };
      var pin = new google.maps.Marker({ position, map, title  });
			map.setCenter(position);

});
