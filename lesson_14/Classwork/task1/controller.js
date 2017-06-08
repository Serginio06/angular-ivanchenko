// Условия Задачи:
// Создайте страницу с элементом div и кнопкой. Реализуйте следующее:
//     При нажатии на кнопку элементу div присваиваются два произвольных CSS-класса


myModule.controller ('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$scope'];
function MainCtrl($scope) {

    $scope.classToggle = "";

    $scope.changeClass = function () {
        !$scope.classToggle ? $scope.classToggle = "rectangle blue" : $scope.classToggle = "";
    }


}
