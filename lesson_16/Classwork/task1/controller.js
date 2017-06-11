// Условия задачи
// Создайте страницу с двумя ссылками view1 и view2.
//     Реализуйте переключение view между view1 и view2 при клике по ссылкам.
//     Файлы для задачи находятся в папке Task

myModule.controller ('MainCtrl', MainCtrl);
myModule.config (Routes);

Routes.$inject = ['$routeProvider'];
function Routes($routeProvider) {
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


}


//============== CONTROLLER ===============
MainCtrl.$inject = ['$scope'];
function MainCtrl($scope) {


}
