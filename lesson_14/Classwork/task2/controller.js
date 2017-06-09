// Условия Задачи:
// Создайте страницу с кнопкой.
//     Разработайте сервис, который будет считать количество кликов по кнопке и выводить его в консоль.
//    Создайте сервис используя метод провайдера.


myModule.controller ('MainCtrl', MainCtrl);
myModule.provider ('MainService', MainServiceProvider);

MainCtrl.$inject = ['$scope', 'MainService'];
function MainCtrl($scope, MainService) {

    $scope.increseCounter = function () {
        console.log(MainService.increseCount());
    }
}

function MainService() {
    var service = this;
    service.counter = 1;

    service.increseCount = function () {
        return service.counter++;
    }
}

function MainServiceProvider() {
    var provider = this;

    provider.$get = function () {
        return new MainService()
    }
}
