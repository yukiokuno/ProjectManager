var myApp = angular.module('myApp',['ui.bootstrap', 'ngTagsInput']);
myApp.controller('projectCtrl', function($scope, $uibModal, $log) {
    $scope.movePage = function(path) {
      window.open(path);
    };
    $scope.parseDate = function (dateObj) {
      return dateObj.getFullYear() + "-" + (dateObj.getMonth() + 1) + "-" + dateObj.getDate();
    };
    $scope.projects = [{
      name: "projectC",
      author: {id: '1', name: 'Yuki'},
      date: new Date(),
      projectPath: "./projects/projectC/index.html",
      projectCodeLink: "http://google.com", 
      description: "first",
      tags: [{text:"a"}, {text: "b"}]
    }, {
      name: "projectD",
      author: {id: '2', name: 'Boo'},
      date: new Date(),
      projectPath: "http://getbootstrap.com/components/",
      projectCodeLink: "https://angularjs.org/", 
      description: "second",
      tags: [{text:"JavaScript"}, {text:"AngularJS"}, {text:"Bootstrap"}]
    },{
      name: "projectE",
      author: {id: '3', name: 'Foo'},
      date: new Date(),
      projectPath: "./index.html",
      projectCodeLink: "https://github.com/", 
      description: "abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc abc abc abc abc abc abc abc def abc abc abc ",
      tags: [{text:"Java"}, {text:"AngularJS"}, {text:"Bootstrap"}]
    }];
    $scope.users = [
      {id: 1, name: 'Yuki'},
      {id: 2, name: 'Boo'},
      {id: 3, name: 'Foo'}
    ];
    $scope.addProject = function() {
      var modalInstance = $uibModal.open({
        templateUrl: 'projectRegisterModal',
        controller: 'ModalInstanceCtrl',
        size: 'lg',
        resolve: {
          users: function () {
            return $scope.users;
          },
          parseDate: function () {
            return $scope.parseDate;
          }
        }
      });

      modalInstance.result.then(function (newProject) {
        $scope.projects.push(newProject);
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
});
myApp.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, users, parseDate) {

  $scope.users = users;
  $scope.addingUser = false;
  $scope.newProjectDate = new Date();
  $scope.newProjectDateFormatted = parseDate($scope.newProjectDate);
  $scope.addUser = function() {
    $scope.addingUser = true;
    $scope.newProjectAuthor = null;
  };

  $scope.cancelAddUser = function() {
    $scope.addingUser = false;
    $scope.newProjectAuthor = users[0];
  };
  $scope.newProjectTags = [
  ];
  $scope.loadTags = function(query) {
    return $http.get('/tags?query=' + query);
  };
  $scope.ok = function () {
    if($scope.addingUser === true) {
      addingUserId = $scope.users.length;
      $scope.newProjectAuthor = {id: addingUserId, name: $scope.newUserName};
    }
    var newProject = {
      name: $scope.newProjectName,
      author: $scope.newProjectAuthor,
      date: $scope.newProjectDate,
      projectPath: $scope.newProjectPath,
      projectCodeLink: $scope.newProjectCodeLink,
      description: $scope.newProjectDescription,
      tags: $scope.newProjectTags
    };
    $uibModalInstance.close(newProject);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});