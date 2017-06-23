var onLoad = function () {
    var el = document.getElementById ('firstMenuItem').focus ();
};

var menuIconClick = function () {
    var x = document.getElementById ("header__menu");
    if (x.className === "header__menu") {
        x.className += " responsive";
    } else {
        x.className = "header__menu";
    }
};

var menuItemClick = function () {
    var x = document.getElementById ("header__menu");
    if (x.className === "header__menu") {
        x.className += " responsive";
    } else {
        x.className = "header__menu";
    }
};


(
    function () {
        // angular.module('app.config',[])
        //        .value('app.config', {f
        //            // basePath: '/' // Set your base path here
        //            basePath: 'project/public/' // Set your base path here
        //        });
        "use strict";
        angular.module ('myModule', ['duScroll', 'ngAnimate', 'angular-inview', 'ngRoute'])
               .constant('path', {basePath: '/angular-ivanchenko/project/public/'})
               // .constant ('path', {basePath: '/project/public/'})
               .controller ('BodyCtrl', BodyCtrl)
               .controller ('articleCtrl', articleCtrl)
               .service ('MainService', MainService)
               // .config (myConfig)
               .directive ('achievements', achievements)
               .directive ('blockHeader', blockHeader)
               .directive ('teamMembers', teamMembers)
               .directive ('newsBlock', newsBlock)
               .directive ('contactForm', contactForm)
               .directive ('headerBlock', headerBlock)
               .config (appConfig);

// =================================== ROUTER ============================================
        function appConfig($routeProvider, path) {

            $routeProvider
                .when ('/', {
                    // templateUrl: '../assets/templates/main-content.html',
                    templateUrl: path.basePath + 'assets/templates/main-content.html',
                })
                .when ('/news', {
                    template: '<news-block></news-block>'
                })
                .when ('/article/:id', {
                    // template:'<p>article id={{myId}} msg={{msg}} should be here</p>',
                    templateUrl: path.basePath + '/assets/templates/news-article.html',
                    controller: 'articleCtrl'
                })
                .otherwise ({
                    redirectTo: '/'
                });


        }

// ================================== DIRECTIVES ===========================================
        function achievements(path) {
            var ddo = {
                templateUrl: path.basePath + '/assets/templates/achievements.html'
            };
            return ddo;
        }

        function blockHeader(path) {
            var ddo = {
                restrict: 'E',
                // templateUrl: '../assets/templates/block-header.html',
                templateUrl: path.basePath + '/assets/templates/block-header.html',
                scope: {
                    content: '=',
                    h2Color: '@'
                },
                replace: true
            };

            return ddo;
        }

        function teamMembers(path) {
            var ddo = {
                restrict: 'E',
                // templateUrl: '../assets/templates/team-members.html'
                templateUrl: path.basePath + '/assets/templates/team-members.html'
            };
            return ddo;
        }

        function newsBlock(path) {
            var ddo = {
                // templateUrl: '../assets/templates/news-block.html'
                templateUrl: path.basePath + '/assets/templates/news-block.html'
            };
            return ddo;
        }

        function contactForm(path) {
            var ddo = {
                // templateUrl:'../assets/templates/contact-form.html'
                templateUrl: path.basePath + '/assets/templates/contact-form.html'
            };
            return ddo;
        }

        function headerBlock(path) {
            var ddo = {
                // templateUrl:'../assets/templates/contact-form.html'
                templateUrl: path.basePath + '/assets/templates/header-block.html'
            };
            return ddo;

        }


// ==================================== CONTROLLERS =======================================

        articleCtrl.$inject = ['$scope', '$routeParams'];

        function articleCtrl($scope, $routeParams) {

            // console.log($routeParams);
            // $scope.msg = 'my message';
            $scope.articleId = $routeParams.id;

        }


        BodyCtrl.$inject = ['$scope', '$anchorScroll', '$location', '$timeout', '$document', 'MainService', '$interval', 'path'];
        function BodyCtrl($scope, $anchorScroll, $location, $timeout, $document, MainService, $interval, path) {

            $scope.basePath = path.basePath;


            //=============== Anchor smooth scroll =====================

            var top = 40;
            var duration = 2000; //milliseconds

            // console.log('$location.hash= ', $location.hash);

            $timeout (function () {

                // $location.url('/');
                $location.path ("");
                $location.hash ("");
                $location.search ("");
                $anchorScroll ();
            });

            $scope.goTo = function (id) {

                $location.path ("");
                // $location.hash("");
                // $location.search("");
                // $anchorScroll ();

                var offset = 70;
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


                    });


                }


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


            MainService.getNews ().then ((result)=> {


                $scope.news = result;
            }, err=> {

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


// ================== SERVICES =========================

        MainService.$inject = ['$http', '$location', 'path'];
        function MainService($http, $location, path) {
            var service = this;


            var socialIcons = [
                {
                    name: 'facebook',
                    src: path.basePath + 'assets/images/icons/facebook-active.png'
                },
                {
                    name: 'google',
                    src: path.basePath + 'assets/images/icons/google-active.png'
                },
                {
                    name: 'tweeter',
                    src: path.basePath + 'assets/images/icons/tweeter-active.png'
                },
                {
                    name: 'dribble',
                    src: path.basePath + 'assets/images/icons/dribble-active.png'
                },

            ];

            var teamMembers = [
                {
                    id: 1,
                    name: 'John Doe',
                    position: 'Graphic designer',
                    description: 'Tincidunt. Cras dapibus. Aenean leo ligula',
                    src: path.basePath + 'assets/images/mobile/member1.jpeg'
                },
                {
                    id: 2,
                    name: 'Sarah L. Hitz',
                    position: 'Frontend developer',
                    description: 'Montes, nascetur ridiculus mus. pellentesque eu',
                    src: path.basePath + 'assets/images/mobile/member2.jpeg'
                },
                {
                    id: 3,
                    name: 'Dale P. Pitchford',
                    position: 'Frontend developer',
                    description: 'Nullam dictum felis eu pede mollis pretium.',
                    src: path.basePath + 'assets/images/mobile/member3.jpeg'
                },
                {
                    id: 4,
                    name: 'Provicia Norton',
                    position: 'Backend developer',
                    description: 'Libero venenatis faucibus. Etiam sit amet eros faucibus',
                    src: path.basePath + 'assets/images/mobile/member4.jpeg'
                },
            ];


            var achievements = [
                {
                    id: 1,
                    src: path.basePath + 'assets/images/icons/achievement11.png',
                    value: 3054,
                    name: 'completed products'
                },
                {
                    id: 2,
                    src: path.basePath + 'assets/images/icons/achievement21.png',
                    value: 7234873,
                    name: 'click pressed'
                },
                {
                    id: 3,
                    src: path.basePath + 'assets/images/icons/achievement31.png',
                    value: 4670,
                    name: 'mails sent & received'
                },
                {
                    id: 4,
                    src: path.basePath + 'assets/images/icons/achievement41.png',
                    value: 939,
                    name: 'jokes tolds'
                },
            ];

            var portfolioImages = [
                {
                    id: '1',
                    category: "web design",
                    src: path.basePath + "assets/images/mobile/portfolio_img/1.jpeg"
                }, {
                    id: '2',
                    category: "web design",
                    src: path.basePath + "assets/images/mobile/portfolio_img/2.jpeg"
                },
                {
                    id: '3',
                    category: "web design",
                    src: path.basePath + "assets/images/mobile/portfolio_img/3.jpeg"
                },
                {
                    id: '4',
                    category: "web design",
                    src: path.basePath + "assets/images/mobile/portfolio_img/4.jpeg"
                },
                {
                    id: '5',
                    category: "photography",
                    src: path.basePath + "assets/images/mobile/portfolio_img/5.jpeg"
                },
                {
                    id: '6',
                    category: "photography",
                    src: path.basePath + "assets/images/mobile/portfolio_img/6.jpeg"
                },
                {
                    id: '7',
                    category: "photography",
                    src: path.basePath + "assets/images/mobile/portfolio_img/7.jpeg"
                }, {
                    id: '8',
                    category: "photography",
                    src: path.basePath + "assets/images/mobile/portfolio_img/8.jpeg"
                },
                {
                    id: '9',
                    category: "graphic",
                    src: path.basePath + "assets/images/mobile/portfolio_img/9.jpeg"
                },
                {
                    id: '10',
                    category: "graphic",
                    src: path.basePath + "assets/images/mobile/portfolio_img/10.jpeg"
                },
                {
                    id: '11',
                    category: "graphic",
                    src: path.basePath + "assets/images/mobile/portfolio_img/11.jpeg"
                },
                {
                    id: '12',
                    category: "graphic",
                    src: path.basePath + "assets/images/mobile/portfolio_img/12.jpeg"
                },

            ];


            var blockHeaderItems = [
                {
                    header: 'Our Portfolio',
                    description: 'id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget erosfaucibus'
                }, {
                    header: 'We are the one',
                    description: 'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget erosfaucibus'
                }, {
                    header: 'Check out news',
                    description: 'Donec vitae sapien ut libero venenatis faucibus. Maecenas nec odio et ante tincidunt tempus.  Nullam quis ante. Etiam sit amet orci eget erosfaucibus'
                }, {
                    header: 'Contact Us',
                    description: 'libero venenatis faucibus donec vitae sapien. Maecenas nec odio et ante tincidunt tempus.  Nullam quis ante. Etiam sit amet orci eget erosfaucibus'
                }
            ];


            service.getImages = function () {
                return portfolioImages;
            };

            service.getAchievements = function () {
                return achievements;
            };

            service.getTeamMembers = function () {
                return teamMembers;
            };

            service.getHeaderItems = function () {
                return blockHeaderItems;
            };

            service.getSocialIcons = function () {
                return socialIcons;
            };

            service.getNews = function () {


                // var url = '../assets/data/data.json';
                // console.log('location.path=',$location.path());
                // console.log('location.url=',$location.url());
                // console.log('location.host=',$location.host());

                // var url = '../assets/data/data.json';
                var url = path.basePath + 'assets/data/data.json';
                // console.log('url=',url);

                var config = {
                    headers: {
                        "content-type": "application/json"
                    },
                    transformResponse: appendTransform ($http.defaults.transformResponse, function (value) {
                        return changeDate (value);
                    })
                };


                var changeDate = function (value) {
                    // console.log ('value=', value);
                    for (var i = 0; i < value.length; i++) {
                        value[i].newDate = new Date (value[i].date);
                    }
                    return value;
                };


                function appendTransform(defaults, transform) {

                    // We can't guarantee that the default transformation is an array
                    defaults = angular.isArray (defaults) ? defaults : [defaults];

                    // Append the new transformation to the defaults
                    return defaults.concat (transform);
                }


                return $http.get (url, config).then (result=> {
                    // "use strict";
                    // console.log ('Primary result= ', result);
                    return result.data;

                }, err=> {
                    // "use strict";
                    console.log ('ERROR on http:', err);
                });

            };


        }

    }
) ();