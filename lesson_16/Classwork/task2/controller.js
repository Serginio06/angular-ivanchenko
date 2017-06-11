// Условия задачи
// Создайте страницу с двумя ссылками view1 и view2.
//     Реализуйте переключение view между view1 и view2 при клике по ссылкам.
//     Файлы для задачи находятся в папке Task
// Добавьте в код предыдущей задачи путь, который будет использоваться по умолчанию и поддержку режима html5Mode

myModule.controller ('MainCtrl', MainCtrl);
myModule.config (Routes);

Routes.$inject = ['$routeProvider', '$locationProvider'];
function Routes($routeProvider, $locationProvider) {
    $routeProvider
        .when ('/', {
            templateUrl: 'views/view1.html',
        })
        .when ('/view2', {
            templateUrl: 'views/view2.html',
        })
        .when ('/view1', {
            templateUrl: 'views/view1.html'
        })
        .otherwise ({
            redirectTo: '/'
        });

    $locationProvider.html5Mode (true);
}


//============== CONTROLLER ===============
MainCtrl.$inject = ['$scope'];
function MainCtrl($scope) {


}
