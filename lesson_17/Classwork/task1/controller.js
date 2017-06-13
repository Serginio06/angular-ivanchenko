// Условия Задачи:
// Создайте пользовательскую директиву, которой можно передать массив,
//     а результатом её работы будет сгенерированный список.

myModule.controller ('MainCtrl', MainCtrl);
myModule.directive('myTag',myTag);

function myTag() {
    ddo = {
        restict:"E",
        templateUrl:'Templates/tableTempl.html',
        replace:true
    };
    return ddo;

}

MainCtrl.$inject = ['$scope'];
function MainCtrl($scope) {

    $scope.items = ['Vasya','Masha','Petya','John','Jane'];

}
