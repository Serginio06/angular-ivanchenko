/**
 * Created by sergiiivanchenko on 19/09/2017.
 */


function achievements(path) {
    var ddo = {
        templateUrl: path.basePath + 'assets/templates/achievements.html'
    };
    return ddo;
}

function blockHeader(path) {
    var ddo = {
        restrict: 'E',
        // templateUrl: '../assets/templates/block-header.html',
        templateUrl: path.basePath + 'assets/templates/block-header.html',
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
        templateUrl: path.basePath + 'assets/templates/team-members.html'
    };
    return ddo;
}

function newsBlock(path) {
    var ddo = {
        // templateUrl: '../assets/templates/news-block.html'
        templateUrl: path.basePath + 'assets/templates/news-block.html'
    };
    return ddo;
}

function contactForm(path) {
    var ddo = {
        // templateUrl:'../assets/templates/contact-form.html'
        templateUrl: path.basePath + 'assets/templates/contact-form.html'
    };
    return ddo;
}

function headerBlock(path) {
    var ddo = {
        // templateUrl:'../assets/templates/contact-form.html'
        templateUrl: path.basePath + 'assets/templates/header-block.html'
    };
    return ddo;

}