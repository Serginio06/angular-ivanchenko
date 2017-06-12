// Условия задачи
// Добавьте в шаблон страницы home список со свойством name из следующего массива:
//     ```
//    var people = [{name: 'Vasya', age: 20, email: 'vasya@mail.ru', employed: false},
//     {name: 'Masha', age: 25, email: 'm@m', employed: true},
//     {name: 'Petya', age: 27, email: 'petya@stuff', employed: true},
//     {name: 'John', age: 36, email: 'johnDoe@mail', employed: true},
//     {name: 'Jane', age: 28, email: 'janeDoe@mail', employed: false}]
// ```
// Добавьте на страницу поддержку htm5Mode.

myModule.controller ('MainCtrl', MainCtrl);
myModule.controller ('HomeCtrl', HomeCtrl);
myModule.config (Routes);

Routes.$inject = ['$routeProvider','$locationProvider'];
function Routes($routeProvider,$locationProvider) {
    $routeProvider
        .when ('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        })
        .when ('/contact', {
            templateUrl: 'views/contact.html',
        })
        .otherwise ({
            redirectTo: '/'
        });

    // $locationProvider.html5Mode (true);
    // $locationProvider.hashPrefix('!');
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
    });
}


//============== CONTROLLER ===============
MainCtrl.$inject = ['$scope'];
function MainCtrl($scope) {
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
