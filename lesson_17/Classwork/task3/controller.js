// Условия задачи
// Создайте директиву, которая создает форму и добавляет ее на страницу. В форме должны быть следующие поля:
//     Username, login, password, email.

myModule.controller ('MainCtrl', MainCtrl);
myModule.directive('myTag',myTag);

function myTag() {
    ddo = {
        restict:"E",
        templateUrl:'Templates/contact.html',
        replace:true
    };
    return ddo;

}

MainCtrl.$inject = ['$scope'];
function MainCtrl($scope) {

    $scope.nameRegEx = /(.*[a-z]){3,}/i;
    $scope.userLoginRegEx = /(.*[a-z]){3,}/i;
    $scope.userPassRegEx = /[a-zA-Z0-9]{6,}/;
    $scope.userEmailRegEx = /[a-zA-Z0-9]{6,}/;

    $scope.submitBtnClass = "btn-default";


    $scope.newUser = {
        userName: "",
        userEmail: "",
        userlogin: "",
        userPassword: ""
    };

    $scope.submitUserForm = function (valid) {
        if (valid) {
            $scope.message = "We sent link to your e-mail. Please follow the link to activate your account";
        }
    };



}
