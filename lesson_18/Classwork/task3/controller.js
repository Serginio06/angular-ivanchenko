// Условия Задачи:
// Имеется html-разметка:
// ```
// <div custom-directive>’myButton’</div>
// ```
// Создайте директиву, результатом работы которой станет кнопка с текстом 'myButton'.
//     Используйте свойство transclude.

myModule.controller ('MainCtrl', MainCtrl);
// myModule.controller ('buttonCtrl', buttonCtrl);

myModule.directive ('customDirective', customDirective);

function customDirective() {
    ddo = {
        restict: "A",
        transclude:true,
        template: '<div><button class="btn btn-primary"><ng-transclude></ng-transclude></button></div>',
        replace: true,
    };
    return ddo;
}


MainCtrl.$inject = ['$scope'];
function MainCtrl($scope) {


}
