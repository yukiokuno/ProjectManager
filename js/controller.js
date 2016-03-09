var myApp = angular.module('myApp',[]);
myApp.controller('projectCtrl', ['$scope', function($scope) {
    $scope.projects = [{
      name: "projectC",
      author: "Yuki",
      date: "2016/03/08",
      description: "first"
    }, {
      name: "projectD",
      author: "Yukio",
      date: "2016/03/09",
      description: "second"
    },{
      name: "projectE",
      author: "Yukiko",
      date: "2016/03/10",
      description: "abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc "
    }];
}]);