var app = angular.module("BestsellerApp", []);

app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = '이달의 베스트셀러';
  $scope.books = [ 
    { 
      name: '미움받을 용기',
      author: '기시미 이치로, 고가 후미타케',
      price: 14900,
      likes: 0,
    }, 
    { 
      name: '딸에게 주는 레시피', 
      author: '공지영',
      price: 13500, 
      likes: 0,
    }, 
    { 
      name: '담론', 
      author: '신영복',
      price: 18000,
      likes: 0,
    }
  ];
  $scope.like = function(index) { 
    $scope.books[index].likes += 1; 
  };
}]);