// Условия задачи
// Создайте страницу с панелью навигации со следуюшими пунктами: home, contact.
//     Используйте маршрутизацию для переключения меду пунктами меню.
//     Файлы для задачи находятся в папке Task.

                                                                                                          myModule.controller ('MainCtrl', MainCtrl);
myModule.config (Routes);

Routes.$inject = ['$routeProvider'];
function Routes($routeProvider) {
    $routeProvider
        .when ('/', {
            templateUrl: 'views/home.html',
        })
        .when ('/contact', {
            templateUrl: 'views/contact.html',
        })
        .otherwise ({
            redirectTo: '/'
        });


}


//============== CONTROLLER ===============
MainCtrl.$inject = ['$scope'];
function MainCtrl($scope) {


}
