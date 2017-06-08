// Условия Задачи:
//     Используйте таблицу с данными массива items из второй задачи. Напишите свой фильтр,
//     который выведет на экран только те элементы масства items, у которых значение свойства expiration больше 10.



myModule.controller ('MainCtrl', MainCtrl);
myModule.filter ('expirationFilter', ExpirationFilter);

MainCtrl.$inject = ['$scope'];
function MainCtrl($scope) {


    $scope.items = [
        {name: "B Item", price: 10.9, category: "Category 1", count: 10, tax: 1.12, expiration: 10},
        {name: "A Item", price: 1.1, category: "Category 1", count: 8, tax: 0.55, expiration: 12},
        {name: "D Item", price: 2.6, category: "Category 2", count: 7, tax: 0.22, expiration: 5},
        {name: "C Item", price: 17.5, category: "Category 2", count: 33, tax: 2.77, expiration: 10}
    ];
}

function ExpirationFilter() {
    return function (arr, maxVal) {

        for (i = 0; i < arr.length; i++) {

            if (arr[i].expiration <= maxVal) {
                arr.splice (i, 1);
            }
        }
        return arr
    }

}
