

//모듈 생성
var app = angular.module('HelloApp', []);

// app.js에서 생성한 app모듈에 HelloController라는 컨트롤러를 사용하겠다!
app.controller('HelloController', function($scope) {
  $scope.friends = ['이예린', '이정윤', '김민재'];
});