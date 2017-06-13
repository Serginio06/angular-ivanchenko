// Условия задачи
// Создайте директиву dialogBox, которая будет выводить на экран в диалоговом
// окне содержимое элемента, к которому привязана директива.

                                                                                                                                   myModule.controller ('MainCtrl', MainCtrl);
myModule.directive ('dialogBox', dialogBox);
// myModule.directive ('secondDirective', secondDirective);


function dialogBox() {
    ddo = {
        restict: 'A',

        priority: 1,
        replace: false,
        // transclude: true,
        link: function (scope, elem, attr) {

            var parent = elem;
            // console.log(parent[0].innerHTML);
            alert(parent[0].innerHTML)

        }

    };
    return ddo;
}



//============== CONTROLLER ===============
MainCtrl.$inject = ['$scope'];
function MainCtrl($scope) {
    
}

