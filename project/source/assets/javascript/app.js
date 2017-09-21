(
    function () {
        "use strict";
        angular.module ('myModule', ['duScroll', 'ngAnimate', 'angular-inview', 'ngRoute'])
               //basePath for deployment
               .constant('path', {basePath: '/angular-ivanchenko/project/public/'})

               //basePath for local launch
               // .constant ('path', {basePath: '/project/public/'})
               .controller ('BodyCtrl', BodyCtrl)
               .controller ('articleCtrl', articleCtrl)
               .service ('MainService', MainService)
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
                    templateUrl: path.basePath + 'assets/templates/news-article.html',
                    controller: 'articleCtrl'
                })
                .otherwise ({
                    redirectTo: '/'
                });
        }

// ================================== DIRECTIVES ("./directives.js") ===========================================


// ==================================== CONTROLLERS("./controllers.js") =======================================


// ================== SERVICES ("./services.js") =========================


    }
) ();