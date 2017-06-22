// Условия Задачи:
// Создайте приложение-калькулятор.
//     В приложении должно быть два поля ввода и кнопки «+», «-», «*», «/».
// Реализуйте двунаправленную привязку таким образом, чтобы при нажатии на кнопки результат
// арифметических операций выводился на странице.


                                                                                                                                                                                                                                            myModule.controller ('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$scope'];
function MainCtrl($scope) {
    $scope.value1 = 0;
    $scope.value2 = 0;
    $scope.result = 0;


    $scope.getSum = function () {
        $scope.result = $scope.value1 +  $scope.value2;
    };

    $scope.getSubtraction = function () {
        $scope.result = $scope.value1 -  $scope.value2;
    };

    $scope.getMultiplication = function () {
        $scope.result = $scope.value1 *  $scope.value2;
    };

    $scope.getDivision = function () {
        $scope.value2 == 0 ? $scope.result="Error! Division by Zero forbidden": $scope.result = $scope.value1 /  $scope.value2;
    }


}
