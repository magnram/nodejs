const request = require("request");

var geocodeAddress = (address, callback) => {
    request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=3Ahbrjn0yAjeG9gQgTTSRu4ubu2LXDB4&location=${encodeURIComponent(address)}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback("Unable to connect to the GeoMap servers");
        } else if(body.results[0].locations[0].adminArea3 == "") {
            callback("Unable to find that address.");
        } else {
            var location = body.results[0].locations[0];
            callback(undefined,{ 
                address: `${location.street}  ${location.postalCode}, ${location.adminArea3}`,
                latitude: location.latLng.lat,
                longitude: location.latLng.lng
            });
        }
    });
}

module.exports = {
    geocodeAddress
}
