// Условия Задачи:
// Используя сервис $compile выведите имя в шаблоне жирным начертанием используя тег <strong>:
//
// ```
// "Hello my name is {{name}}"
// var data = { name: "<strong>Ivan</strong>" }


myModule.controller ('MainCtrl', MainCtrl);
// myModule.directive('myTag',myTag);
//
// function myTag() {
//     ddo = {
//         restict:"E",
//         scope:{'guestname':'@'},
//         template:'<div class="alert alert-success" role="alert">Hello my name is <strong>{{guestname}}</strong>.</div>',
//         replace:true
//     };
//     return ddo;
//
// }

// =========== CONTROLLERS ==================
MainCtrl.$inject = ['$scope', '$interpolate','$compile'];
function MainCtrl($scope, $interpolate, $compile) {

    $scope.welcomeUser = function () {

        var myTag = $compile ('<div class="alert alert-success" role="alert">Hello my name is <strong>{{data.guestname}}</strong>.</div>') ($scope);
        $scope.data = { guestname: "Ivan" };

        angular.element (document.getElementsByClassName('well-lg')).append (myTag);
    }

}


