var appy = angular.module('myApp', []);
appy.controller('submitTweet', function ($scope, $http) {
    $http.post("/api/Tweet", { Message: "TestMessage", ImageURL: "http://target.scene7.com/is/image/Target/17131134?wid=450&hei=450&fmt=pjpeg" })
});

    app.controller('myCtrl', function($scope, $http) {
        $http.get("welcome.htm")
        .then(function(response) {
            $scope.myWelcome = response.data;
        });
    });