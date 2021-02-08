let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 39.942, lng: -74.075 },
        zoom: 12,

    });
}

var userFeed = new Instafeed({
    get: 'user',
    target: "instafeed-container",
    limit: 12,
    resolution: 'low_resolution',
    accessToken: 'IGQVJWOTVvdzhISkRPWjVlUWttNWpZAOXFPSi1oZAGNNbmNhQXo4MW9rdUszOUlYZAXJBamlTbGRUY24zODhEZADlDYW1VbEEzOE82dmM3c1NSN1ZADYjhnc2VWQ3QwQTJaWjhRRXI2SUhJNGJqNUptNTJCTgZDZD'
});
userFeed.run();