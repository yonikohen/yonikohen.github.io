function bleh() {
  var database = firebase.database();
  var reservations = document.getElementById("bleh-body");
  var name = document.getElementById("name").value;
  var date = document.getElementById("date").value;
  var newReservation = document.createElement("tr");
  var reservationsListRef = firebase.database().ref("Reservations");
  var newReservationsListRef = reservationsListRef.push();
  
  newReservationsListRef.set({
    name: name,
    date: date
  });

  newReservation.setAttribute("class", "submitted");

  newReservation.innerHTML = `<td class="reservation-names submitted-name">${name}</td><td class="submitted-date">${date}</td>`;

  reservations.appendChild(newReservation);
}

document.getElementById("subtmit-button").onclick = bleh();

function initMap() {
  // The location of Uluru
  var location = { lat: 28.3852, lng: -81.5639 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: location
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: location, map: map });
}
