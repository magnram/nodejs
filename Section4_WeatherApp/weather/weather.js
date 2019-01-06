const request = require("request");

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/2763c9304b24bc7a8985708724cade4b/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if(error) {
            callback("Unable to connect to forecast.io servers.");
        } else if (response.statusCode !== 200) {
            callback("Unable to fetch weather.");
        } else if (response.statusCode === 200) {
            callback(undefined, {
                weather: body.currently.summary,
                temperature: ((body.currently.temperature-32)/(1.8)).toFixed(2),
                apparentTemperature: ((body.currently.apparentTemperature-32)/(1.8)).toFixed(2)
            });
        }
    });
};

module.exports = {
    getWeather
};