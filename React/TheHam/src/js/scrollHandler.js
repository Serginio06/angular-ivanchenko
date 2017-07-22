/**
 * Created by sergiiivanchenko on 19/07/2017.
 */

export function  handleScroll(elementId){

    let element = document.getElementById(elementId);
    let ElelementTop = element.getBoundingClientRect ().top;
    let windowHeight = window.innerHeight;

    if ( ElelementTop <= windowHeight ) {
        console.log('appeared');
        return true;

    } else {
        console.log('out ............');
        return false;
    }
}

