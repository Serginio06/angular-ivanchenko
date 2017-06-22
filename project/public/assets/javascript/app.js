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
        "use strict";
        angular.module ('myModule', ['duScroll', 'ngAnimate', 'angular-inview', 'ngRoute'])
               .controller ('BodyCtrl', BodyCtrl)
               .controller ('articleCtrl', articleCtrl)
               .service ('MainService', MainService)
               // .config (myConfig)
               .directive ('achievements', achievements)
               .directive ('blockHeader', blockHeader)
               .directive ('teamMembers', teamMembers)
               .directive ('newsBlock', newsBlock)
               .config (appConfig);

// =================================== ROUTER ============================================
        function appConfig($routeProvider) {

            $routeProvider
                .when ('/', {
                    templateUrl: '../assets/templates/main-content.html',
                })
                .when ('/news', {
                    template: '<news-block></news-block>'
                })
                .when ('/article/:id', {
                    // template:'<p>article id={{myId}} msg={{msg}} should be here</p>',
                    templateUrl: '../assets/templates/news-article.html',
                    controller: 'articleCtrl'
                })
                .otherwise ({
                    redirectTo: '/'
                });
        }

// ================================== DIRECTIVES ===========================================
        function achievements() {
            var ddo = {
                templateUrl: '../assets/templates/achievements.html'
            };
            return ddo;
        }

        function blockHeader() {
            var ddo = {
                restrict: 'E',
                templateUrl: '../assets/templates/block-header.html',
                scope: {
                    content: '='
                },
                replace: true
            };

            return ddo;
        }

        function teamMembers() {
            var ddo = {
                restrict: 'E',
                templateUrl: '../assets/templates/team-members.html'
            };
            return ddo;
        }

        function newsBlock() {
            var ddo = {
                templateUrl: '../assets/templates/news-block.html'
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


        BodyCtrl.$inject = ['$scope', '$anchorScroll', '$location', '$timeout', '$document', 'MainService', '$interval'];
        function BodyCtrl($scope, $anchorScroll, $location, $timeout, $document, MainService, $interval) {




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

                        var targetElement = angular.element (document.getElementById (id));

                        if (targetElement.length > 0) {
                            $document.scrollToElement (targetElement, offset, duration);
                        } else {
                            var targetElement = angular.element (document.getElementById ('top'));
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

            // $scope.getNews = function () {
            //
            //
            //     MainService.getNews ().then (result=> {
            //         "use strict";
            //
            //
            //         $scope.news = result;
            //     }, err=> {
            //         "use strict";
            //         console.log ("Error: ", err);
            //     });
            //
            // }


        }


// ================== SERVICES =========================

        MainService.$inject = ['$http'];
        function MainService($http) {
            var service = this;


            var socialIcons = [
                {
                    name: 'facebook',
                    src: 'assets/images/icons/facebook-active.png'
                },
                {
                    name: 'google',
                    src: 'assets/images/icons/google-active.png'
                },
                {
                    name: 'tweeter',
                    src: 'assets/images/icons/tweeter-active.png'
                },
                {
                    name: 'dribble',
                    src: 'assets/images/icons/dribble-active.png'
                },

            ];

            var teamMembers = [
                {
                    id: 1,
                    name: 'John Doe',
                    position: 'Graphic designer',
                    description: 'Tincidunt. Cras dapibus. Aenean leo ligula',
                    src: 'assets/images/mobile/member1.jpeg'
                },
                {
                    id: 2,
                    name: 'Sarah L. Hitz',
                    position: 'Frontend developer',
                    description: 'Montes, nascetur ridiculus mus. pellentesque eu',
                    src: 'assets/images/mobile/member2.jpeg'
                },
                {
                    id: 3,
                    name: 'Dale P. Pitchford',
                    position: 'Frontend developer',
                    description: 'Nullam dictum felis eu pede mollis pretium.',
                    src: 'assets/images/mobile/member3.jpeg'
                },
                {
                    id: 4,
                    name: 'Provicia Norton',
                    position: 'Backend developer',
                    description: 'Libero venenatis faucibus. Etiam sit amet eros faucibus',
                    src: 'assets/images/mobile/member4.jpeg'
                },
            ];


            var achievements = [
                {
                    id: 1,
                    src: 'assets/images/icons/achievement11.png',
                    value: 3054,
                    name: 'completed products'
                },
                {
                    id: 2,
                    src: 'assets/images/icons/achievement21.png',
                    value: 7234873,
                    name: 'click pressed'
                },
                {
                    id: 3,
                    src: 'assets/images/icons/achievement31.png',
                    value: 4670,
                    name: 'mails sent & received'
                },
                {
                    id: 4,
                    src: 'assets/images/icons/achievement41.png',
                    value: 939,
                    name: 'jokes tolds'
                },
            ];

            var portfolioImages = [
                {
                    id: '1',
                    category: "web design",
                    src: "assets/images/mobile/portfolio_img/1.jpeg"
                }, {
                    id: '2',
                    category: "web design",
                    src: "assets/images/mobile/portfolio_img/2.jpeg"
                },
                {
                    id: '3',
                    category: "web design",
                    src: "assets/images/mobile/portfolio_img/3.jpeg"
                },
                {
                    id: '4',
                    category: "web design",
                    src: "assets/images/mobile/portfolio_img/4.jpeg"
                },
                {
                    id: '5',
                    category: "photography",
                    src: "assets/images/mobile/portfolio_img/5.jpeg"
                },
                {
                    id: '6',
                    category: "photography",
                    src: "assets/images/mobile/portfolio_img/6.jpeg"
                },
                {
                    id: '7',
                    category: "photography",
                    src: "assets/images/mobile/portfolio_img/7.jpeg"
                }, {
                    id: '8',
                    category: "photography",
                    src: "assets/images/mobile/portfolio_img/8.jpeg"
                },
                {
                    id: '9',
                    category: "graphic",
                    src: "assets/images/mobile/portfolio_img/9.jpeg"
                },
                {
                    id: '10',
                    category: "graphic",
                    src: "assets/images/mobile/portfolio_img/10.jpeg"
                },
                {
                    id: '11',
                    category: "graphic",
                    src: "assets/images/mobile/portfolio_img/11.jpeg"
                },
                {
                    id: '12',
                    category: "graphic",
                    src: "assets/images/mobile/portfolio_img/12.jpeg"
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


                var url = '../assets/data/data.json';

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