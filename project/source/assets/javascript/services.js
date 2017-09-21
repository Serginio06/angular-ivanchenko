/**
 * Created by sergiiivanchenko on 19/09/2017.
 */
MainService.$inject = ['$http', '$location', 'path'];
function MainService($http, $location, path) {
    var service = this;


    var socialIcons = [
        {
            name: 'facebook',
            src: path.basePath + 'assets/images/icons/facebook.png'
        },
        {
            name: 'google',
            src: path.basePath + 'assets/images/icons/google.png'
        },
        {
            name: 'tweeter',
            src: path.basePath + 'assets/images/icons/tweeter.png'
        },
        {

            name: 'dribble',
            src: path.basePath + 'assets/images/icons/dribble.png'
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


        return $http.get (url, config).then (function(result) {
            // "use strict";
            // console.log ('Primary result= ', result);
            return result.data;

        }, function(err){
            // "use strict";
            console.log ('ERROR on http:', err);
        });

    };


}