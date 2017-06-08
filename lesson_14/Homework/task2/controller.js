// Условия задачи
// Создайте страницу с десятью тегами div с текстом, полем ввода и кнопкой. Добавьте фильтр, который
// при вводе значения в поле и после нажатия на кнопку, покажет пользователю только те блоки, текст в
// которых соответствуют введеному значению.Остальные блоки должны быть скрыты.


myModule.controller ('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$scope'];
function MainCtrl($scope) {

    $scope.filterText = "";
    $scope.filter = "";

    $scope.texts = [
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
        'Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
        'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.',
        'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.',
        'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
        'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.',
        'Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.',
        'Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.',
        'Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar'
    ];


    $scope.toFilterText = function () {
        $scope.filterText = $scope.filter;
    };

    $scope.cleanFilter = function () {
        $scope.filterText = "";
        $scope.filter = "";
    }

}

