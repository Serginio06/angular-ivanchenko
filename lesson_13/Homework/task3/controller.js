// Условия задачи
// Создайте форму для регистрации нового пользователя. Форма должна содержать поля:
//     ФИО, email, телефон, пароль, подтверждение пароля.
//     Реализуйте real-time валидацию пользовательского ввода.

MyModule.controller ('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$scope'];
function MainCtrl($scope) {

    $scope.nameRegEx = /(.*[a-z]){3,}/i;
    $scope.phoneRegEx = /[0-9]{4,}/;
    $scope.passwordRegEx = /[a-zA-Z0-9]{6,}/;

    $scope.newUser = {
        userName: "",
        userEmail: "",
        userPhone: "",
        userPass1: "",
        userPass2: ""
    };

    $scope.isValideClass = "";
    $scope.submitBtnClass = "btn-default";
    $scope.message = "";

    // $scope.isFormValide =

    $scope.isPass2Equal = function (invalide, dirty) {
        $scope.isPass2Valide = !(!invalide && dirty && ($scope.newUser.userPass1 === $scope.newUser.userPass2));
    };


    $scope.submitUserForm = function (valid) {
        if (valid) {
            $scope.message = "We sent link to your e-mail. Please follow the link to activate your account";
        }
    };


}
