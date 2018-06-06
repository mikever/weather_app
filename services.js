weatherApp.service('cityService', function () {
    this.city = "";
});

weatherApp.service('weatherService', ['$resource', function ($resource) {
    
    this.getWeather = function (city, days) {
         let weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/", 
            {
                callback: "JSON_CALLBACK"
            },
            {
                get: {
                    method: "JSONP" 
                }
            }    
        );

        return weatherAPI.get({ 
            q: city + ',840',
            units: "imperial",
            appid: "e6e0066795ba25c2f4490cd311290891",
            cnt: days
        });
    };
    
}]);