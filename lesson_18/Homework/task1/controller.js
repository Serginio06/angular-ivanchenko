// Условия задачи
// Есть массив items:
//     ```
// [
//                 { name: "Table", price: 44.10 },
//                 { name: "Chair", price: 21.20 },
//                 { name: "Pillow", price: 12.20 },
//                 { name: "Picture", price: 112.70 },
//                 { name: "Lamp", price: 28.31 }
//             ];
// ```
// Создайте две директивы. Первая создает панель меню с элементами, взятыми из свойства name массива items.
// Вторая директива при клике по элементу на панели меню, показывает пользователю соответсствующий контент,
// взятый из свойства price массива items.
//     Директивы используют общий контроллер.

myModule.controller ('MainCtrl', MainCtrl);
myModule.controller ('firstDirectiveCtrl', myTagCtrl);
myModule.directive ('myTag', myTag);
myModule.directive ('priceShow', priceShow);


function myTag() {
    ddo = {
        restict: 'E',
        templateUrl: 'Templates/menuNav.html',
        scope: {items:'='},
        replace: true,
        controller: 'firstDirectiveCtrl',
        controllerAs: 'TagCtrl'
    };
    return ddo;

}

function priceShow() {
    ddo = {
        restict: 'A',

        require: '^myTag',
        replace: true,
        link: function (scope, elem, attr, myCtrl) {
            console.log ('myCtrl', myCtrl.price);
            console.log ('scope', scope);

            scope.localPrice = myCtrl.price;


            scope.$watch(
                function(){
                    return myCtrl.price;
                },
                function(newVal){
                    if (newVal){
                        scope.localPrice = newVal;
                        // console.log('newVal=',newVal);
                        var priceElem = angular.element(document.querySelector("#priceElemenet"));
                        priceElem.text(newVal);
                    }
                });


            var wellElem = angular.element ('<div class="well-lg">');
            var divElem = angular.element ('<div id="priceElemenet" class="alert alert-success" ng-if="price">').text (scope.localPrice);
            wellElem.append(divElem);
            elem.append (wellElem);
        }
    };
    return ddo;

}


//============== CONTROLLER ===============
MainCtrl.$inject = ['$scope'];
function MainCtrl($scope) {


    $scope.items = [

        {name: "Table", price: 44.10},
        {name: "Chair", price: 21.20},
        {name: "Pillow", price: 12.20},
        {name: "Picture", price: 112.70},
        {name: "Lamp", price: 28.31}
    ]
}

myTagCtrl.$inject = ['$scope'];
function myTagCtrl($scope) {
    var TagCtrl = this;

    TagCtrl.price = 0;

    TagCtrl.showPrice = function (index) {
        TagCtrl.price = $scope.items[index].price;
        // console.log('TagCtrl.price',TagCtrl.price);
        return TagCtrl.price
    }


}

