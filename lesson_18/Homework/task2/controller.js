// Условия задачи
// Создайте две директивы. Первая создает список ul с произвольным количеством элементов.
// Вторая директива добавляет четным элементам списка CSS класс ‘red’ со следующим значением:
//     ```
// .red {
// color: red
// }
// ```
// Обе директивы используются в качестве атрибутов и применяются к одному и тому же элементу.
// При решении задачи используйте приоритет директив.

myModule.controller ('MainCtrl', MainCtrl);
myModule.directive ('firstDirective', firstDirective);
myModule.directive ('secondDirective', secondDirective);


function firstDirective() {
    ddo = {
        restict: 'A',

        priority: 1,
        replace: true,
        link: function (scope, elem, attr) {

            var ulEl = angular.element ('<ul id="unorderedList">');

            for (var i = 0; i < 7; i++) {
                var liEl = angular.element ('<li>').text ("This is element " + (i+1));
                ulEl.append (liEl);
            }

            elem.append (ulEl);


        }

    };
    return ddo;

}

function secondDirective() {
    ddo = {
        restict: 'A',
        priority: 2,
        replace: true,
        link: function (scope, elem, attr) {

            var ulChildrenArr = angular.element (document.querySelector ('#unorderedList'))[0].children;

            for (var i = 0; i < ulChildrenArr.length; i++) {
                if (i % 2) {
                    angular.element (document.querySelector ('#unorderedList'))[0].children[i].className = 'red';
                }

            }

        }
    };
    return ddo;

}


//============== CONTROLLER ===============
MainCtrl.$inject = ['$scope'];
function MainCtrl($scope) {

}

