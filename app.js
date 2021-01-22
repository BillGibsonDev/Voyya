let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 39.942, lng: -74.075 },
        zoom: 12,
    });
}