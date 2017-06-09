// Условия задачи
// Создайте сервис, который предоставляет стандартные математические
// операции – сложение, умножение и т.д. Используйте три разных способа для создания сервиса.

calculatorModule.controller ('MainCtrl', MainCtrl);
calculatorModule.service ('MainService', MainService);
calculatorModule.factory ('DivisionService', DivisionServiceFactory);
calculatorModule.provider ('MultiplicationService', MultiplicationServiceProvider);

//============== CONTROLLER ===============
MainCtrl.$inject = ['$scope', 'MainService', 'DivisionService', 'MultiplicationService'];
function MainCtrl($scope, MainService, DivisionService, MultiplicationService) {

    $scope.value1 = 0;
    $scope.value2 = 0;
    $scope.result = 0;


    $scope.getSum = function () {
        $scope.result = MainService.getSum ($scope.value1, $scope.value2);
    };

    $scope.getSubtraction = function () {
        $scope.result = MainService.getSubtraction ($scope.value1, $scope.value2);
    };

    $scope.getMultiplication = function () {

        $scope.result = MultiplicationService.getMultiplication ($scope.value1, $scope.value2);
    };

    $scope.getDivision = function () {
        $scope.result = DivisionService ($scope.value1, $scope.value2);
    }

}

//============== SERVICE ===============
function MainService() {
    var service = this;

    service.getSum = function (val1, val2) {
        return val1 + val2;
    };

    service.getSubtraction = function (val1, val2) {
        return val1 - val2;
    };

}

function MultiService() {
    var service = this;

    service.getMultiplication = function (val1, val2) {
        return val1 * val2;
    };
}


//============== FACTORY ===============

function DivisionServiceFactory() {

    return function (val1, val2) {

        var output;
        val2 == 0 ? output = "NAN" : output = val1 / val2;
        return output;
    }
}

//============== PROVIDER ===============

function MultiplicationServiceProvider() {
    var provider = this;

    provider.$get = function () {
        return new MultiService();
    }
}