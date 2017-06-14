// Условия Задачи:
// Используя сервис $interpolate выведите имя в шаблоне жирным начертанием используя тег strong:
//     ```
// "Hello my name is {{name}}"
// var data = { name: "<strong>Ivan</strong>" }


myModule.controller ('MainCtrl', MainCtrl);


// =========== CONTROLLERS ==================
MainCtrl.$inject = ['$scope', '$interpolate'];
function MainCtrl($scope, $interpolate, ) {

    $scope.welcomeUser = function () {


        var fn = $interpolate ('<div class="alert alert-success" role="alert">Hello, my name is {{guestname}}.</div>');
        var data = { guestname: "<strong>Ivan</strong>" };


        angular.element (document.getElementsByClassName('well-lg')).append (fn(data));


    }

}


