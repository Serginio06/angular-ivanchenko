// Условия задачи
// Создайте директиву, которая создает форму и добавляет ее на страницу. В форме должны быть следующие поля:
//     Username, login, password, email.

myModule.controller ('MainCtrl', MainCtrl);
myModule.directive('myTag',myTag);

function myTag() {
    ddo = {
        restict:"E",
        templateUrl:'Templates/contact.html',
        replace:true
    };
    return ddo;

}

MainCtrl.$inject = ['$scope'];
function MainCtrl($scope) {

}
