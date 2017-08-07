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

    xhttp.open ('DELETE', '/delete-item', true);
    xhttp.setRequestHeader ('Content-type', 'application/json');
    xhttp.send ('{"id":"' + id + '"}');
    xhttp.onload = function () {
        console.log ('post sent and server response = ', xhttp.status);
        return cb (xhttp.status, xhttp.responseText);
    }
}


function xhtCheckId(id, cb) {

    var xhttp = new XMLHttpRequest ();

    var path = '/check-id/' + id;

    xhttp.open ('GET', path, true);
    xhttp.setRequestHeader ('Content-type', 'application/json');
    xhttp.send ('{"id":"' + id + '"}');

    xhttp.onload = function () {
        if (xhttp.status === 200 && +xhttp.responseText) {
            return cb (true);
        } else {
            return cb (false);
        }
    }
}

