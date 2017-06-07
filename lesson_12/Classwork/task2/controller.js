myModule.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$scope'];
function MainCtrl($scope) {

    $scope.showColumn = {};
    $scope.showColumn.name=true;
    $scope.showColumn.price=true;
    $scope.showColumn.category=true;
    $scope.showColumn.count=true;
    $scope.showColumn.tax=true;
    $scope.showColumn.expiration=true;

    $scope.items = [
        { name: "B Item", price: 10.9, category: "Category 1", count: 10, tax: 1.12, expiration: 10 },
        { name: "A Item", price: 1.1, category: "Category 1", count: 8, tax: 0.55, expiration: 12 },
        { name: "D Item", price: 2.6, category: "Category 2", count: 7, tax: 0.22, expiration: 5 },
        { name: "C Item", price: 17.5, category: "Category 2", count: 33, tax: 2.77, expiration: 10 }];
}
