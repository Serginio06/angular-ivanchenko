// Условия Задачи:
// Создайте директиву, которая на основе массива будет создавать определенное количество параграфов:
//     1) генерация должна происходить не с помощью jqLite, а с помощью шаблона,
//     2) директиву можно применить только как атрибут,
//     3) сгенерированный контент должен полностью заменить собой элемент, к которому применяется директива,
//     4) у неё должен быть независимый scope.


myModule.controller ('MainCtrl', MainCtrl);
myModule.directive ('myTag', myTag);

//=========== DIRECTIVES =================
function myTag() {
    ddo = {
        restict: 'A',
        templateUrl:'Templates/tableTempl.html',
        scope:{items:'='},
        replace: true
    };
    return ddo;

}


// =========== CONTROLLERS ==================

MainCtrl.$inject = ['$scope'];
function MainCtrl($scope ) {


    $scope.items = [
        {
            id: '1',
            header: 'Lorem',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'
        },
        {
            id: '2',
            header: 'Cum',
            text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
        },
        {
            id: '3',
            header: 'Quam',
            text: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.'
        },
        {id: '4', header: 'Pede', text: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.'},
        {
            id: '5',
            header: 'Enim',
            text: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.'
        },
        {
            id: '6',
            header: 'Integer',
            text: 'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.'
        },
        {id: '7', header: 'Aenean', text: 'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.'},
        {
            id: '8',
            header: 'Aliquam',
            text: 'Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.'
        },
        {
            id: '9',
            header: 'Quisque',
            text: 'Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.'
        },
        {
            id: '10',
            header: 'Etiam',
            text: 'Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.'
        },
        {
            id: '11',
            header: 'Nam',
            text: 'Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.'
        },
        {
            id: '12',
            header: 'Vitae',
            text: 'Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.'
        },
        {id: '13', header: 'Fringilla', text: 'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.'},
        {
            id: '14',
            header: 'Consequat',
            text: 'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien.'
        },
        {
            id: '15',
            header: 'Vestibulum',
            text: 'Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi"'
        }
    ];


}



