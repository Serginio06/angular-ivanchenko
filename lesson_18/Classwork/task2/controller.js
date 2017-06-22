// Условия Задачи:
// Создайте директиву, которая создает кнопку, при нажатии на которую запускается счетчик (на экран
// начинают выводиться числа в возрастающей последовательности с интервалом в 1 с).
// ### Задача 2
// Добавьте в код предыдущей задачи еще одну директиву, которая будет
// выводить значение переменной счетчика в консоль.
//     Организуйте код так, чтобы обе директивы использовали один и
// тот же контроллер. Используйте свойство require.

myModule.controller ('MainCtrl', MainCtrl);
myModule.controller ('buttonCtrl', buttonCtrl);

myModule.directive ('myTag', myTag);
myModule.directive ('consoleDir', consoleDir);

function myTag() {
    ddo = {
        restict: "E",
        scope: true,
        templateUrl: 'Templates/buttonTempl.html',
        replace: true,
        controller: 'buttonCtrl'
    };
    return ddo;
}

function consoleDir() {
    ddo = {
        restict: "A",
        replace: true,
        require: 'myTag',
        link: function (scope, elem, attr, myTagCtrl) {

            console.log ('scope.counter= ', scope.counter);
        }
    };
    return ddo;
}

buttonCtrl.$inject = ['$scope', '$interval'];
function buttonCtrl($scope, $interval) {
    "use strict";

    $scope.message = "Counter";
    $scope.counter = 0;
    var myCounter;

    $scope.startCounter = function () {

        // start count from 0 each time button pressed

        if (!myCounter) {
            $scope.counter = 0;
            myCounter = $interval (function () {
                $scope.counter++;
                console.log ('$scope.counter', $scope.counter);
            }, 1000);
        }

    };




}


MainCtrl.$inject = ['$scope'];
function MainCtrl($scope) {

    $scope.items = ['Vasya', 'Masha', 'Petya', 'John', 'Jane'];

}
