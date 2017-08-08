function xhtGetItems(cb) {

    var xhttp = new XMLHttpRequest ();

    xhttp.onload = function () {
        return cb (xhttp.responseText)
    };
    xhttp.open ('GET', '/get-data', true);
    xhttp.send ()
}


function xhtDeleteItem(id, cb) {


    var xhttp = new XMLHttpRequest ();

    var path = '/delete/' + id;

    xhttp.open ('DELETE', path, true);
    xhttp.send ();
    xhttp.onload = function () {
        return cb (xhttp.status, xhttp.responseText);
    }
}


function xhtCheckId(id, cb) {

    var xhttp = new XMLHttpRequest ();

    var path = '/check-id/' + id;

    xhttp.open ('GET', path, true);
    xhttp.setRequestHeader ('Content-type', 'application/json');
    xhttp.send ();

    xhttp.onload = function () {

        return cb (JSON.parse(xhttp.responseText));

        // if (xhttp.status === 200 && xhttp.responseText.replace(/[^0-9]/g, "")) {
        //     return cb (true);
        // } else {
        //     return cb (false);
        // }
    }
}

function xhtmlChangeItem(data, cb) {

    console.log('put for editing sending');
    let xhttp = new XMLHttpRequest ();

    xhttp.open ('PUT', '/changeItem', true);
    xhttp.setRequestHeader ('Content-type', 'application/json');
    xhttp.send (JSON.stringify (data));

    xhttp.onload = function () {
        return cb (xhttp.status);
    }
}

function xhtmlPostNewItem(data, cb) {

    let xhttp = new XMLHttpRequest ();

    xhttp.open ('POST', '/addItem', true);
    xhttp.setRequestHeader ('Content-type', 'application/json');
    xhttp.send (JSON.stringify (data));

    xhttp.onload = function () {
        return cb (xhttp.status);
    }
}