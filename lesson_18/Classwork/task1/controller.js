// Условия Задачи:
// Создайте директиву, которая создает кнопку, при нажатии на которую запускается счетчик (на экран
// начинают выводиться числа в возрастающей последовательности с интервалом в 1 с).

myModule.controller ('MainCtrl', MainCtrl);
myModule.controller ('buttonCtrl', buttonCtrl);

myModule.directive ('myTag', myTag);

function myTag() {
    ddo = {
        restict: "E",
        templateUrl: 'Templates/buttonTempl.html',
        replace: true,
        controller: 'buttonCtrl'
    };
    return ddo;
}

buttonCtrl.$inject = ['$scope', '$interval'];
function buttonCtrl($scope, $interval) {
    "use strict";

    $scope.message = "Counter";
    $scope.counter = 0;

    $scope.startCounter = function () {

        // start count from 0 each time button pressed
        $scope.counter = 0;
        $interval (function () {
            $scope.counter++;
        }, 1000);


    }


}


MainCtrl.$inject = ['$scope'];
function MainCtrl($scope) {

    $scope.items = ['Vasya', 'Masha', 'Petya', 'John', 'Jane'];

}
