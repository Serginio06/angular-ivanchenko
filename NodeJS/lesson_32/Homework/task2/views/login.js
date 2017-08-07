function login() {

    var loginElem = document.getElementById ('loginInput');
    var passElem = document.getElementById ('passInput');
    var alertMsgEl = document.getElementById ('alert-msg');
    var infoMsgEl = document.getElementById ('info-msg');

    if (loginElem.value && passElem.value) {

        var obj = JSON.parse ('{"userName":"' + loginElem.value + '","pass":"' + passElem.value + '"}');

        alertMsgEl.innerHTML = '';
        alertMsgEl.setAttribute ('class', 'alert alert-danger alertMsgUp');


        xhtpUserRegistration (obj, function (err, result) {

            if ( err ) {console.log(err)}

            if (result.status === 1) {
                infoMsgEl.innerHTML = 'User ' + loginElem.value + ' was successfully registered';
                infoMsgEl.setAttribute ('class', 'alert alert-info alertMsgDown');

            } else if (result.status === 2) {

                infoMsgEl.innerHTML = 'User ' + loginElem.value + ' has been registered in database. Try login';
                infoMsgEl.setAttribute ('class', 'alert alert-info alertMsgDown');

            } else {
                console.log ('Server error. Sorry');
            }

            setTimeout (()=> {
                infoMsgEl.setAttribute ('class', 'alert alert-info alertMsgUp');
                loginElem.value = '';
                passElem.value = '';
            }, 2000)

        })

    } else {
        alertMsgEl.innerHTML = 'Please enter login and password';
        alertMsgEl.setAttribute ('class', 'alert alert-danger alertMsgDown');
    }
}


function xhtpUserRegistration(dataObj, cb) {

    const xhtr = new XMLHttpRequest ();

    xhtr.open ('POST', '/registerUser', true);
    xhtr.setRequestHeader ('Content-type', 'application/json');
    xhtr.send (JSON.stringify (dataObj));

    xhtr.onload = function () {

        var obj = JSON.parse (xhtr.responseText);

        if (xhtr.status === 200) {
            return cb ('', obj);
        }
    }

}



