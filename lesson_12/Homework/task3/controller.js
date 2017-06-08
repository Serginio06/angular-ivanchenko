// Right answers on the questions is 3,3,3,3,3

// Условия Задачи:
// Реализуйте SPA приложение, в котором пользователю представляется пройти тест из 5 вопросов,
//     в каждом вопросе по 4 варианта ответа. Вопросы должны выбираться с помощью radio-button
// и когда выбран, например, вопрос №1, то на странице должны появится варианты ответа только для этого вопроса.
//     В конце тестирования отобразите результат теста. При решении данной задачи используйте директиву ng-switch.
//


calculatorModule.controller ('MainCtrl', MainCtrl);


MainCtrl.$inject = ['$scope'];
function MainCtrl($scope) {

    $scope.selectedQuestion = 0;
    $scope.selectedAnswer = [0, 0, 0, 0, 0];
    $scope.result;

    $scope.questinary = [
        {
            question: "This is question 1",
            answers: ["Answer 11", "Answer 12", "Answer 13", "Answer 14"],
            rightAnswer: function () {return 2}
            // checkAnswer: function (givenAnswer) {return this.rightAnswer () == givenAnswer}
        },
        {
            question: "This is question 2",
            answers: ["Answer 21", "Answer 22", "Answer 23", "Answer 24"],
            rightAnswer: function () {return 2}
            // checkAnswer: function (givenAnswer) {return this.rightAnswer () == givenAnswer}
        },
        {
            question: "This is question 3",
            answers: ["Answer 31", "Answer 32", "Answer 33", "Answer 34"],
            rightAnswer: function () {return 2}
            // checkAnswer: function (givenAnswer) {return this.rightAnswer () == givenAnswer}
        },
        {
            question: "This is question 4",
            answers: ["Answer 41", "Answer 42", "Answer 43", "Answer 44"],
            rightAnswer: function () {return 2}
            // checkAnswer: function (givenAnswer) {return this.rightAnswer () == givenAnswer}
        },
        {
            question: "This is question 5",
            answers: ["Answer 51", "Answer 52", "Answer 53", "Answer 54"],
            rightAnswer: function () {return 2}
            // checkAnswer: function (givenAnswer) {return this.rightAnswer () == givenAnswer}
        }
    ];


    $scope.checkResult = function () {
        var result;

        for (var i = 0; i < $scope.questinary.length; i++) {
            result = $scope.questinary[i].rightAnswer () - $scope.selectedAnswer[i];
            console.log ('result ' + i + ' || ' + result);
            if (result != 0) {break;}
        }

        $scope.result = !result;
        console.log('$scope.result= '+ $scope.result);

    }

}
