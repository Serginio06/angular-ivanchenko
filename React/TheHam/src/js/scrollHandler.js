/**
 * Created by sergiiivanchenko on 19/07/2017.
 */

export function  handleScroll(elementId){

    let element = document.getElementById(elementId);
    let ElelementTop = element.getBoundingClientRect ().top;
    let windowHeight = window.innerHeight;

    let promise = new Promise((resolve,reject)=>{

        if ( ElelementTop <= windowHeight ) {
            console.log('appeared');
            return resolve(true);

        } else {
            console.log('out ............');
            return resolve(false);
        }
    });


    if ( ElelementTop <= windowHeight ) {
        console.log('appeared');
        return resolve(true);

    } else {
        console.log('out ............');
        return resolve(false);
    }

    return promise;


    // if ( ElelementTop <= windowHeight ) {
    //     console.log('appeared');
    //     return cb(true);
    //
    // } else {
    //     console.log('out ............');
    //     return cb(false);
    // }
}

