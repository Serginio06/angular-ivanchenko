// Условия Задачи:
// Используя сервис $compile выведите имя в шаблоне жирным начертанием используя тег <strong>:
//
// ```
// "Hello my name is {{name}}"
// var data = { name: "<strong>Ivan</strong>" }


myModule.controller ('MainCtrl', MainCtrl);

// =========== CONTROLLERS ==================
MainCtrl.$inject = ['$scope', '$compile'];
function MainCtrl($scope,  $compile) {

    $scope.welcomeUser = function () {

        var myTag = $compile ('<div class="alert alert-success" role="alert">Hello my name is <strong>{{data.guestname}}</strong>.</div>') ($scope);
        $scope.data = { guestname: "Ivan" };

        angular.element (document.getElementsByClassName('well-lg')).append (myTag);
    }

}


