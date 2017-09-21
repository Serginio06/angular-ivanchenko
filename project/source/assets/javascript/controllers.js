/**
 * Created by sergiiivanchenko on 19/09/2017.
 */

articleCtrl.$inject = ['$scope', '$routeParams'];
function articleCtrl($scope, $routeParams) {
    $scope.articleId = $routeParams.id;
}


BodyCtrl.$inject = ['$scope', '$anchorScroll', '$location', '$timeout', '$document', 'MainService', '$interval', 'path'];
function BodyCtrl($scope, $anchorScroll, $location, $timeout, $document, MainService, $interval, path) {

    $scope.basePath = path.basePath;

    // ===============menu click functions ===============
    $scope.menuOnLoad = function () {

        var el = document.getElementById ('firstMenuItem').focus ();
    };

    $scope.menuIconClick = function () {

        var x = document.getElementById ("header__menu");
        if (x.className === "header__menu") {
            x.className += " responsive";
        } else {
            x.className = "header__menu";
        }
    };


    //=============== Anchor smooth scroll =====================

    var top = 0;
    var duration = 2000; //milliseconds

    $timeout (function () {

        // $location.url('/');
        $location.path ("");
        $location.hash ("");
        $location.search ("");
        $anchorScroll ();
    });

    $scope.goTo = function (id) {
        // console.log('event.parentElement= ', event.target.parentElement);

        $location.path ("");

        var offset = 40;
        var targetElement = angular.element (document.getElementById (id));


        if (targetElement.length > 0) {
            $document.scrollToElement (targetElement, offset, duration);
        } else {

            $timeout (function () {

                targetElement = angular.element (document.getElementById (id));

                if (targetElement.length > 0) {
                    $document.scrollToElement (targetElement, offset, duration);
                } else {
                    targetElement = angular.element (document.getElementById ('top'));
                    $document.scrollToElement (targetElement, offset, duration);
                }

            },200);


        }

        // $scope.menuIconClick();


    };


    //=============== Service switcher =====================

    $scope.serviceMenuItems = ['web', 'graphic', 'programming', 'photography'];

    $scope.serviceMenuItemsSelected = $scope.serviceMenuItems[0];
    $scope.serviceActiveItem = {
        item1: 'service--hr--1',
        item2: '',
        item3: '',
        item4: ''
    };

    $scope.serviceItemClick = function (id) {

        for (var key in $scope.serviceActiveItem) {
            $scope.serviceActiveItem[key] = '';
        }

        key = 'item' + id;
        $scope.serviceActiveItem[key] = 'service--hr--1';
        $scope.serviceMenuItemsSelected = $scope.serviceMenuItems[id - 1];
    };

    //=============== portfolio =====================
    $scope.portfolioStates = {};
    $scope.portfolioStates.activeItem = 'item1';
    $scope.portfolioStates.portfoliofilter = '';
    $scope.portfolioMenuItems = [
        {
            id: 'item1',
            title: 'all',
            filter: ''
        },
        {
            id: 'item2',
            title: 'web',
            filter: 'web'
        },
        {
            id: 'item3',
            title: 'photography',
            filter: 'photography'
        },
        {
            id: 'item4',
            title: 'graphic design',
            filter: 'graphic'
        },
    ];


    $scope.portfolioImg = MainService.getImages ();

    $scope.portfolioBtnClick = function (item) {
        $scope.portfolioStates.activeItem = item.id;
        $scope.portfolioStates.portfoliofilter = item.filter;
    };

    $scope.portfolioHidePopup = function (item, event) {
        // "use strict";
        $scope.portfolio__img__class = '';


    };

    $scope.portfolioShowPopup = function (item, event) {

        var selector = '#img-' + item.id;

        var target = angular.element (document.querySelector (selector));
        var top = target[0].getBoundingClientRect ().top;
        var left = target[0].getBoundingClientRect ().left;
        var right = target[0].getBoundingClientRect ().right;
        var bottom = target[0].getBoundingClientRect ().bottom;
        var middleTop = (
                top + (
                    bottom - top
                ) / 2
            ) - 10;
        var middleSide = (
                left + (
                    right - left
                ) / 2
            ) - 50;
        target.text (item);

        $scope.portfolio__img__category = item.category;
        $scope.portfolio__img__class = 'mouseOver';
        $scope.myStyle = {'top': middleTop + 'px', 'left': middleSide + 'px'};

    };


    //=============== achievements =====================

    $scope.achievementsItems = MainService.getAchievements ();

    $scope.lineInView = function (inview) {

        $scope.acievementValue = [0, 0, 0, 0];

        if (inview) {
            // console.log('$scope.iachievementsItems[0].value=',$scope.achievementsItems[0].value);
            $scope.myInteval = $interval (function () {
                if ($scope.acievementValue[0] < $scope.achievementsItems[0].value) {$scope.acievementValue[0] += 6;} else if ($scope.acievementValue[0] >= $scope.achievementsItems[0].value) {$scope.acievementValue[0] = $scope.achievementsItems[0].value;}
                if ($scope.acievementValue[1] < $scope.achievementsItems[1].value) {$scope.acievementValue[1] += 12167;} else if ($scope.acievementValue[1] >= $scope.achievementsItems[1].value) {$scope.acievementValue[1] = $scope.achievementsItems[1].value;}
                if ($scope.acievementValue[2] < $scope.achievementsItems[2].value) {$scope.acievementValue[2] += 7;} else if ($scope.acievementValue[2] >= $scope.achievementsItems[2].value) {$scope.acievementValue[2] = $scope.achievementsItems[2].value;}
                if ($scope.acievementValue[3] < $scope.achievementsItems[3].value) {$scope.acievementValue[3] += 2;} else if ($scope.acievementValue[3] >= $scope.achievementsItems[3].value) {$scope.acievementValue[3] = $scope.achievementsItems[3].value;}

                if ($scope.acievementValue[2] == $scope.achievementsItems[2].value) {
                    // console.log('$interval has stopped');
                    $interval.cancel ($scope.myInteval);
                }

            }, 2);

        } else {
            $interval.cancel ($scope.myInteval);
            $scope.acievementValue = [0, 0, 0, 0];
        }

    };

    //===================== about ========================

    $scope.blockHeaderItems = MainService.getHeaderItems ();
    $scope.teamMembers = MainService.getTeamMembers ();
    $scope.socialIcons = MainService.getSocialIcons ();


    // ===================== news ========================


    MainService.getNews ().then (function(result) {


        $scope.news = result;
    }, function(err) {

        console.log ("Error: ", err);
    });

    // ====================== contacts ========================

    $scope.nameRegEx = /(.*[a-z]){3,}/i;
    $scope.emailRegEx = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    $scope.messageRegEx = /(.*[a-z0-9._]){20,}/i;
    $scope.contactNameInputValidClass = 'slideup';
    $scope.contactEmailInputValidClass = 'slideup';
    $scope.contactMessageInputValidClass = 'slideup';


    $scope.contacts = {
        userName: "",
        userEmail: "",
        userMessage: ""
    };


    // $scope.passwordRegEx = /[a-zA-Z0-9]{6,}/;


    $scope.nameValidation = function (isNameValide) {

        $scope.contactNameInputValidClass =  isNameValide ? 'slidedown':'slideup';
    };


    $scope.emailValidation = function (isEmailValide) {

        $scope.contactEmailInputValidClass =  isEmailValide ? 'slidedown':'slideup';
    };

    $scope.messageValidation = function (isMessageValide) {

        $scope.contactMessageInputValidClass =  isMessageValide ? 'slidedown':'slideup';
    };

    $scope.submitContactForm = function (isValid) {

        // if (isValid) {
        //     $scope.message = "We sent link to your e-mail. Please follow the link to activate your account";
        // }

    };

}
