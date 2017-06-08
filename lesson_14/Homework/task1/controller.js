// Условия задачи
// Создайте три разных CSS класса, которые по-разному будут оформлять блок текста на странице.
//     Реализуйте возможность выбирать стиль для оформления страницы с помощью кнопок или checkbox

calculatorModule.controller ('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$scope'];
function MainCtrl($scope) {

    $scope.textStyleArr = [];
    $scope.textStyleObjValue = {
        colors: ['blue', 'red', 'green'],
        textStyles: ['italic', 'bold', 'underline']
    };

    $scope.textStyleObjApplied = {
        colors: [],
        textStyles: []
    };

    $scope.BgrClick = function (bkgColorCode) {

        console.log ($scope.textStyleObjValue);

        if (bkgColorCode > $scope.textStyleObjValue.colors.length) {
            throw Error ('no such color');
        } else {

            var bkgColor = $scope.textStyleObjValue.colors[bkgColorCode];

            console.log ('we are in BgrClick.bkgColor=', bkgColor);
            if (!$scope.textStyleObjApplied.colors.length) {
                console.log ('no values. we add it');
                $scope.textStyleObjApplied.colors.push (bkgColor);
            }

            for (var i = 0; i < $scope.textStyleObjApplied.colors.length; i++) {
                console.log ('i=', i);
                if ($scope.textStyleObjApplied.colors[i] == bkgColor) {
                    console.log ('break');
                    break;
                } else if (i + 1 == $scope.textStyleObjApplied.colors.length) {
                    console.log ('no colore. we add it');
                    $scope.textStyleObjApplied.colors = [];
                    $scope.textStyleObjApplied.colors.push (bkgColor);
                    break;
                }
            }
            // $scope.textStyle = $scope.textStyleObjApplied.colors.join (' ');
            updateTextClasses();
            console.log ('$scope.textStyle=' + $scope.textStyle);
        }

    };

    var updateTextClasses = function () {

        $scope.textStyle = $scope.textStyleObjApplied.colors.join (' ') + ' ' + $scope.textStyleObjApplied.textStyles.join (' ');;

    };

    $scope.textStyleClick = function () {

        console.log ($scope.textStyleObjValue);
        console.log ('isUnderline=' + $scope.isUnderline + $scope.isBold + $scope.isItalic);

        // $scope.textStyleObjApplied.textStyles

        $scope.textStyleObjApplied.textStyles =[];
        $scope.isUnderline ? $scope.textStyleObjApplied.textStyles.push('underline'):'';
        $scope.isBold ? $scope.textStyleObjApplied.textStyles.push('bold'):'';
        $scope.isItalic ? $scope.textStyleObjApplied.textStyles.push('italic'):'';
        updateTextClasses();



        // if (styleCode > $scope.textStyleObjValue.textStyles.length) {
        //     throw Error ('no such style');
        // } else {
        //
        //     var textStyleName = $scope.textStyleObjValue.textStyles[styleCode];
        //
        //     console.log ('we are in textStyleClick=', textStyleName);
        //     if (!$scope.textStyleObjApplied.textStyles.length) {
        //         console.log ('no values. we add it');
        //         $scope.textStyleObjApplied.textStyles.push (textStyleName);
        //     }
        //
        //     for (var i = 0; i < $scope.textStyleObjApplied.textStyles.length; i++) {
        //         console.log ('i=', i);
        //         if ($scope.textStyleObjApplied.textStyles[i] == textStyleName) {
        //             console.log ('break');
        //             break;
        //         } else if (i + 1 == $scope.textStyleObjApplied.textStyles.length) {
        //             console.log ('no colore. we add it');
        //             // $scope.textStyleObjApplied.textStyles=[];
        //             $scope.textStyleObjApplied.textStyles.push (textStyleName);
        //             break;
        //         }
        //     }
        //     // $scope.textStyle = $scope.textStyleObjApplied.textStyles.join (' ');
        //     updateTextClasses();
        //     console.log ('$scope.textStyle=' + $scope.textStyle);
        // }

    };

    $scope.cleanStyleClick = function () {
        cleanStyle();
    };

    var cleanStyle = function () {

        $scope.textStyle = "";
        $scope.isUnderline = false;
        $scope.isBold = false;
        $scope.isItalic = false;
    };

    cleanStyle();


}
