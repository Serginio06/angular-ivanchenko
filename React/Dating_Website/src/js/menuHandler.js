/**
 * Created by sergiiivanchenko on 19/07/2017.
 */

export function menuIconClick () {
    var x = document.getElementById ("header__menu");
    if (x.className === "header__menu") {
        x.className += " responsive";
    } else {
        x.className = "header__menu";
    }
};

//  function closeIconMenu () {
//     var x = document.getElementById ("header__menu");
//     x.class = "header__menu";
//
//     // if (x.className === "header__menu") {
//     //     x.className += " responsive";
//     // } else {
//     //     x.className = "header__menu";
//     // }
// };

export function menuItemClick () {
    var x = document.getElementById ("header__menu");
    if (x.className === "header__menu") {
        x.className += " responsive";
    } else {
        x.className = "header__menu";
    }
};
