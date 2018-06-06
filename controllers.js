weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function ($scope, $location, cityService) {
    $scope.city = cityService.city;

    $scope.$watch('city', function () {
        cityService.city = $scope.city;
    });

    $scope.submit = function () {
        $location.path("/forecast");
    };
}]);

weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', function ($scope, $routeParams, cityService, weatherService) {
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || '2';

    $scope.weatherResult = weatherService.getWeather($scope.city, $scope.days);

    $scope.convertToDate = function (timestamp) {
        return new Date(timestamp * 1000);
    }
    
    $scope.convertToHour = function (timestamp) {
        let options = {
            hour12: true,
            formatMatcher: "basic"
        }

        return new Date(timestamp * 1000).toLocaleTimeString('en-us', options);
    }

    console.log($scope.weatherResult);
    
}]);