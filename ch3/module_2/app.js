var myApp = angular.module('myApp', []);

myApp.controller('HelloCtrl', function ($scope, HelloService){
        $scope.title = 'Hello';

            // service 함수 선언
        $scope.addWorldService = function(){
           $scope.title = HelloService.addWorld($scope.title);  
        };
});


//서비스란? 컨트롤러의 부담을 줄이기 위해 부가적인 행위, 데이터를 출력한다던가, 데이터를 검증하거나
//이런 일은 서비스가 대신 한다.
myApp.service('HelloService', function(){
        $scope.addWorld = function(title){
            return title + " world";
    };
});