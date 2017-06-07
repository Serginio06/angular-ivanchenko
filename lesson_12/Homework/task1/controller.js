calculatorModule.controller ('MainCtrl', MainCtrl);

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
        $scope.value2 == 0 ? $scope.result="NAN": $scope.result = $scope.value1 /  $scope.value2;
    }


}
