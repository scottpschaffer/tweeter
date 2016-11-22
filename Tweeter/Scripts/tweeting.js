var appy = angular.module('myApp', []);
appy.controller('submitTweet', function ($scope, $http) {
    $http.post("/api/Tweet", { Message: $scope.twet, ImageURL: "http://target.scene7.com/is/image/Target/17131134?wid=450&hei=450&fmt=pjpeg" })
});

appy.controller('obtainTweet', function ($scope, $http) {
    $http.get("/api/Tweet")
    .then(function(response){

    });

});