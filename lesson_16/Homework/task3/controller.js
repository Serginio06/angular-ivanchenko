// Условия задачи
// Добавьте на страницу следующий функционал:
//     * При клике по элементу списка на странице home, пользователь перенаправляется на страницу
// contact по адресу ‘/contact + routeParams’, где routeParams – параметры маршрутизации,
//     созданные с помощью сервиса $routeParams, представляющие собой значения свойств
// массива people для элемента, по которому кликнул пользователь.
// * Используйте данные, переданные через $routeParams, для автозаполнения формы на странице contact

myModule.controller ('MainCtrl', MainCtrl);
myModule.controller ('HomeCtrl', HomeCtrl);
myModule.controller ('ContactCtrl', ContactCtrl);
myModule.config (Routes);

Routes.$inject = ['$routeProvider', '$locationProvider'];
function Routes($routeProvider, $locationProvider) {
    $routeProvider
        .when ('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        })
        .when ('/contact/:userName/:userAge/:userEmail', {
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl'
        })
        .when ('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl'
        })

        .otherwise ({
            redirectTo: '/'
        });

    $locationProvider.html5Mode ({
        enabled: true,
        requireBase: true
    });
}


//============== CONTROLLER ===============
MainCtrl.$inject = ['$scope'];
function MainCtrl($scope) {
    "use strict";

}

ContactCtrl.$inject = ['$scope', '$routeParams'];
function ContactCtrl($scope, $routeParams) {

    $scope.userName = $routeParams.userName;
    $scope.userAge = $routeParams.userAge;
    $scope.userEmail = $routeParams.userEmail;

}

HomeCtrl.$inject = ['$scope'];
function HomeCtrl($scope) {

    $scope.people = [
        {name: 'Vasya', age: 20, email: 'vasya@mail.ru', employed: false},
        {name: 'Masha', age: 25, email: 'm@m', employed: true},
        {name: 'Petya', age: 27, email: 'petya@stuff', employed: true},
        {name: 'John', age: 36, email: 'johnDoe@mail', employed: true},
        {name: 'Jane', age: 28, email: 'janeDoe@mail', employed: false}
    ]


}
