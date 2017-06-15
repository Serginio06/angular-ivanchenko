// Условия Задачи:
// Дано массив items:
//     ```
//      $scope.items = [
//              { name: "B Item", price: 10.9, category: "Category 1", count: 10, tax: 1.12, expiration: 10 },
//              { name: "A Item", price: 1.1, category: "Category 1", count: 8, tax: 0.55, expiration: 12 },
//              { name: "D Item", price: 2.6, category: "Category 2", count: 7, tax: 0.22, expiration: 5 },
//              { name: "C Item", price: 17.5, category: "Category 2", count: 33, tax: 2.77, expiration: 10 }];
// ```
// Создайте страницу с элементом select. Реализуйте следующее:
//     В зависимости от выбранного варианта в списке select, на экране отображаются данные массива или в виде таблицы,
// или в виде списка


myModule.controller ('MainCtrl', MainCtrl);
myModule.directive ('tableData', tableData);
myModule.directive ('listData', listData);



function listData() {
    var ddo = {
        templateUrl: 'Templates/List.html'
    };
    return ddo;
}

function tableData() {
    var ddo = {
        templateUrl: 'Templates/Table.html'
    };

    return ddo;
}


MainCtrl.$inject = ['$scope'];
function MainCtrl($scope) {

    $scope.selectOptions = ["Table", "List"];
    $scope.selected = $scope.selectOptions[0];


    $scope.items = [
        {name: "B Item", price: 10.9, category: "Category 1", count: 10, tax: 1.12, expiration: 10},
        {name: "A Item", price: 1.1, category: "Category 1", count: 8, tax: 0.55, expiration: 12},
        {name: "D Item", price: 2.6, category: "Category 2", count: 7, tax: 0.22, expiration: 5},
        {name: "C Item", price: 17.5, category: "Category 2", count: 33, tax: 2.77, expiration: 10}
    ];

}
