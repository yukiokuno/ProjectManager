var myApp = angular.module('myApp',['ui.bootstrap']);
myApp.controller('projectCtrl', function($scope, $uibModal, $log) {
    $scope.movePage = function(path) {
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
    $scope.items = ['item1', 'item2', 'item3'];
    $scope.users = [
      {id: '1', name: 'Yuki'},
      {id: '2', name: 'Boo'},
      {id: '3', name: 'Foo'}
    ];
    $scope.addProject = function() {
      var modalInstance = $uibModal.open({
        templateUrl: 'projectRegisterModal',
        controller: 'ModalInstanceCtrl',
        size: 'lg',
        resolve: {
          items: function () {
            return $scope.items;
          },
          users: function () {
            return $scope.users;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
});
myApp.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items, users) {

  $scope.items = items;
  $scope.users = users;
  $scope.addingUser = false;
  $scope.newProjectDate = new Date();
  var date = $scope.newProjectDate;
  $scope.newProjectDateFormatted = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(); 
  $scope.selected = {
    item: $scope.items[0]
  };
  
  $scope.addUser = function() {
    $scope.addingUser = true;
    $scope.newProjectAuthor = null;
  };

  $scope.cancelAddUser = function() {
    $scope.addingUser = false;
    $scope.newProjectAuthor = users[0];
  };

  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});