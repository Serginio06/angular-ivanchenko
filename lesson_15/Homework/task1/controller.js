// Условия Задачи:
// Создайте страницу с двумя кнопками Start и Stop. Реализуйте следующее:
//     * при нажатии на кнопку start, на страницу начинают выводиться чила в возрастающем порядке
// с интервалом 1 с.
// * При нажатии на кнопку stop вывод чисел останавливается.
// * При нажатии на кнопку start отсчет начинается всегда с 0.



myModule.controller ('MainCtrl', MainCtrl);

// =========== CONTROLLERS ==================
MainCtrl.$inject = ['$scope', '$interval'];
function MainCtrl($scope, $interval ) {

        $scope.counter = 0;
        var counterPromise;

        $scope.startCounter = function () {

            if ( angular.isDefined(counterPromise) ) return;

            $scope.counter = 0;
          counterPromise = $interval(function () {
              $scope.counter++;

          },1000);

        };

        $scope.stopCounter = function () {
            if ( angular.isDefined(counterPromise )) {
                $interval.cancel(counterPromise);
                counterPromise = undefined;
            }
        };


}


