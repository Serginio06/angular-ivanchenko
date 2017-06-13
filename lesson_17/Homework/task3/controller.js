// Условия задачи
// Создайте директиву для генерации меню.
//     В качестве источника данных директива должна использовать массив объектов, одно
// из свойств объекта должено содержать текст элемента меню, второе свойство
// должно использоватся для определения адреса перехода при клике по элементу меню.

myModule.controller ('MainCtrl', MainCtrl);
myModule.controller ('CMSController', CMSController);
myModule.directive('myTag',myTag);
myModule.config (Routes);

function myTag() {
    ddo = {
        restict: 'E',
        templateUrl:'Templates/menuNav.html',
        scope:false,
        replace: true
    };
    return ddo;

}

Routes.$inject = ['$routeProvider'];
function Routes($routeProvider) {
    $routeProvider.when('/views/:index', { template: '<h4>{{itemPrice}}</h4>', controller: CMSController });

}


//============== CONTROLLER ===============
MainCtrl.$inject = ['$scope'];
function MainCtrl($scope) {


    $scope.menuItems = [
        {
            id: 'salad_1',
            dishName: 'Hearty Greens',
            description: 'Roasted Red Grapes, Hazelnut-White Wine Mustard Dressing 8'
        },
        {
            id: 'salad_2',
            dishName: 'Grilled White',
            description: 'Black Quinoa, Mint, Cured Duck Egg, Charred Lemon Vinaigrette 10'
        },
        {
            id: 'salad_3',
            dishName: 'Bourbon-Maple',
            description: 'Horseradish Cream Sauce, Micro Herb Salad, Cracked Black Pepper 11'
        },
    ]


}
CMSController.$inject = ['$scope', '$route', '$routeParams'];
function CMSController($scope, $route, $routeParams) {
    // $route.current.templateUrl = '/pages/' + $routeParams.name + ".html";

    $scope.itemPrice = $scope.menuItems[$routeParams.index].description;
}

