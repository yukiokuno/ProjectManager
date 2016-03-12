var myApp = angular.module('myApp',[]);
myApp.controller('projectCtrl', ['$scope', function($scope) {
    $scope.movePage = function(path) {
      console.log("here here");
      window.open(path);
    };
    $scope.projects = [{
      name: "projectC",
      author: "Yuki",
      date: "2016/03/08",
      description: "first",
      projectPath: "./projects/projectC/index.html",
      projectCodePath: "http://google.com" 
    }, {
      name: "projectD",
      author: "Yukio",
      date: "2016/03/09",
      description: "second",
      projectPath: "http://getbootstrap.com/components/",
      projectCodePath: "https://angularjs.org/" 
    },{
      name: "projectE",
      author: "Yukiko",
      date: "2016/03/10",
      description: "abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc ",
      projectPath: "./index.html",
      projectCodePath: "https://github.com/" 
    }];
}]);