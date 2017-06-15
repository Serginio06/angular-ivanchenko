// Условия задачи
//     Создайте приложение с интерфейсом показанном в файле template.png. Файл находится в папке Task.
//     Напишите сервис, который после каждого изменения формы, будет создавать JSON обьект с новыми данными
//     и отправлять на сервер.
//     Выведите подготовленный к отправке объект на экран.


toDoModule.controller ('ToDoCtrl', ToDoCtrl);
toDoModule.service ('ServerService', ServerService);


ToDoCtrl.$inject = ['$scope', 'ServerService'];
function ToDoCtrl($scope, ServerService) {

    $scope.itemName = "";
    $scope.itemDescription = "";
    $scope.itemDueDate = "";
    $scope.itemIsCompleted = "";
    $scope.newItemSent = false;

    //check regEx for ng-pattern
    // $scope.itemNameRegEx = /(.*[a-z]){3,}/i;
    $scope.itemNameRegEx = /(.){3,}/i;
    $scope.itemDueDateRegEx = /^(0[1-9]|[12][0-9]|3[01])[\/.](?:(0[1-9]|1[012])[\/.](19|20)[0-9]{2})$/;
    $scope.itemDescriptionRegEx = /(.){3,}/i;


    $scope.items = ServerService.getToDoList ();

    $scope.showIsCompleted = function (isCompleted) {

        return isCompleted ? "Да" : "";
    };

    $scope.addNewItem = function (isValide) {

        if (isValide) {
            $scope.newItemObj = ServerService.addNewItem ($scope.itemName, $scope.itemDescription, $scope.itemDueDate, $scope.itemIsCompleted);
            $scope.newItemSent = true;
        }


        // if ($scope.itemName != "" && $scope.itemDescription != "" && $scope.itemDueDate != "") {
        //
        //     $scope.newItemObj = ServerService.addNewItem ($scope.itemName, $scope.itemDescription, $scope.itemDueDate, $scope.itemIsCompleted);
        //
        //     $scope.newItemSent = true;
        //
        // }
    }


}

ServerService.$inject = ['$http'];
function ServerService($http) {
    var service = this;

    var defaultList = [
        {
            name: 'Купить молоко',
            description: 'Сходить на рынок и купить молоко',
            dueDate: '2/18/2015',
            completed: false
        },
        {
            name: 'Посмотреть видео урок по AngularJS',
            description: 'Досмотреть до конца урок',
            dueDate: '2/18/2015',
            completed: false
        }
    ];

    service.toDoList = defaultList;

    service.getToDoList = function () {
        return service.toDoList;
    };

    service.addNewItem = function (itemName, itemDescription, itemDueDate, itemIsCompleted) {
            var obj = {};

            obj.name = itemName;
            obj.description = itemDescription;
            obj.dueDate = itemDueDate;
            obj.completed = itemIsCompleted;

            service.toDoList.push (obj);

            service.postNewListItem (obj);

            return obj;
    };

    service.postNewListItem = function (newItem) {

        var url = 'some-server.com';
        var data = newItem;
        // var data =  { test: 'test' };
        var config = {
            headers: {
                "content-type": "application/json"
            }
        };

        $http.post (url, data, config).then ((success) => {
            "use strict";
            console.log ('Post Data Submitted Successfully!');
            return 'Post Data Submitted Successfully!';
        }, (err)=> {
            "use strict";

            console.log ("Service not Exists. Status: ", err.status + ' ' + err.statusText);

        })


    }


}
