// Условия Задачи:
// Используйте сервис $http для получения данных из файла data.json, который находится в папке data.
//     Отобразите полученные данные на странице в виде таблицы.
//     Предусмотрите обработку ошибок в запросе (используя Promise).


myModule.controller ('MainCtrl', MainCtrl);
myModule.provider ('MainService', MainServiceProvider);

// =========== CONTROLLERS ==================
MainCtrl.$inject = ['$scope', 'MainService'];
function MainCtrl($scope, MainService) {
    $scope.items = [];

    $scope.increseCounter = function () {
        console.log (MainService.increseCount ());
    };

    $scope.getFileData = function () {
        var fileDataPromise = MainService.getData ();

        fileDataPromise.then ((data) => {
            "use strict";
            $scope.items = data;
        }, (err) => {
            "use strict";
            $scope.items = "";
            // console.log ('Error occurs during data fatching.\n', err);
            // console.log('Error Status: '+ err.status + '. Error Message:'+ err.statusText);

        });

    };

}

// =========== SERVICES ==================
function MainService(http) {
    var service = this;
    service.counter = 1;

    service.increseCount = function () {
        return service.counter++;
    };

    service.getData = function () {
        var promise = http ({
            method: 'GET',
            url: 'data/data.json'
        });

        return promise.then ((response) => {
            return response.data;
        }, (err)=> {
            console.log('Error Status: '+ err.status + '. Error Message: '+ err.statusText);
        });
    }
}

// =========== PROVIDERS ==================
function MainServiceProvider() {
    var provider = this;

    provider.$get = [
        '$http', function ($http) {
            return new MainService ($http);
        }
    ]
}
