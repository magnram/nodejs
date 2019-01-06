const yargs = require("yargs");
const axios = require("axios");

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: "address",
            describe: "Address to fetch weather from",
            string: true
        }
    })
    .help()
    .alias("help", "h")
    .argv;

var geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=3Ahbrjn0yAjeG9gQgTTSRu4ubu2LXDB4&location=${encodeURIComponent(argv.address)}`;


axios.get(geocodeUrl).then((response) => {
    var lat = response.data.results[0].locations[0].latLng.lat;
    var lng = response.data.results[0].locations[0].latLng.lng;
    var weatherUrl = `https://api.darksky.net/forecast/2763c9304b24bc7a8985708724cade4b/${lat},${lng}`;
    console.log(JSON.stringify({ 
        address: `${response.data.results[0].locations[0].street}  ${response.data.results[0].locations[0].postalCode}, ${response.data.results[0].locations[0].adminArea3}`,
        latitude: lat,
        longitude: lng
    }, undefined, 2));
    return axios.get(weatherUrl);
}).then((response) => {
    console.log(JSON.stringify({
        weather: response.data.currently.summary,
        temperature: ((response.data.currently.temperature-32)/(1.8)).toFixed(2),
        apparentTemperature: ((response.data.currently.apparentTemperature-32)/(1.8)).toFixed(2)
    }, undefined, 2));
})
.catch((e) => {
    if (e.code === "ENOTFOUND") {
        console.log("Unable to connect to API servers")
    }
});