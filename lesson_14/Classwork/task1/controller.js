// Условия Задачи:
// Создайте страницу с кнопкой.
//     Разработайте сервис, который будет считать количество кликов по кнопке и выводить его в консоль.
//     Используйте фабричную функцию для создания сервиса.


myModule.controller ('MainCtrl', MainCtrl);
myModule.factory ('MainServiceFactory', MainServiceFactory);

// =========== CONTROLLERS ==================
MainCtrl.$inject = ['$scope', 'MainServiceFactory'];
function MainCtrl($scope, MainServiceFactory) {

    var mainService = MainServiceFactory();

    $scope.increseCounter = function () {
        console.log(mainService.increseCount());
    }

}

// =========== SERVICES ==================
function MainService() {
    var service = this;
    service.counter = 1;

    service.increseCount = function () {
        return service.counter++;
    }
}

// =========== FACTORIES ==================
function MainServiceFactory() {
    return function () {
        return new MainService ();
    };

}
