// Условия задачи
// Создайте сервис, который предоставляет стандартные математические
// операции – сложение, умножение и т.д. Используйте три разных способа для создания сервиса.

calculatorModule.controller ('MainCtrl', MainCtrl);
// calculatorModule.service ('MainService', MainService);
// calculatorModule.factory ('DivisionService', DivisionServiceFactory);
// calculatorModule.provider ('MultiplicationService', MultiplicationServiceProvider);

//============== CONTROLLER ===============
MainCtrl.$inject = ['$scope', '$parse'];
function MainCtrl($scope, $parse) {

    $scope.value1 = 0;
    $scope.value2 = 0;
    $scope.result = 0;


    $scope.getSum = function () {

        $scope.expr = "value1 + value2";
        var fn = $parse($scope.expr);
        $scope.result = fn($scope);

    };

    $scope.getSubtraction = function () {
        // $scope.result = MainService.getSubtraction ($scope.value1, $scope.value2);

        $scope.expr = "value1 - value2";
        var fn = $parse($scope.expr);
        $scope.result = fn($scope);
    };

    $scope.getMultiplication = function () {

        $scope.expr = "value1 * value2";
        var fn = $parse($scope.expr);
        $scope.result = fn($scope);
    };

    $scope.getDivision = function () {



        $scope.value2 == 0 ? $scope.expr = "NAN" : $scope.expr = "value1 / value2";



        var fn = $parse($scope.expr);
        $scope.result = fn($scope);

    }

}
