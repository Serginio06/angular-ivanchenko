function changeItem(id) {

    var nameElem = document.getElementById ('nameInput');
    var infoElem = document.getElementById ('infoInput');
    var alertMsgEl = document.getElementById('insert-alert-msg');

    if (nameElem.value && infoElem.value) {

        alertMsgEl.innerHTML = '';
        alertMsgEl.setAttribute('class', 'alert alert-danger insertAlertMsgUp');

        var obj = JSON.parse ('{"name":"' + nameElem.value + '", "info":"' + infoElem.value + '", "id":"' + id + '"}');

        xhtmlChangeItem (obj, function (respondCode) {

            if (respondCode === 200) {
                nameElem.value = '';
                infoElem.value = '';
                window.location.href = '/';
            }
        })

    } else {
        alertMsgEl.innerHTML = 'Please enter name and info to change';
        alertMsgEl.setAttribute('class', 'alert alert-danger insertAlertMsgDown');
    }
}


function xhtmlChangeItem(data, cb) {

    console.log('post sending');
    let xhttp = new XMLHttpRequest ();

    xhttp.open ('PUT', '/changeItem', true);
    xhttp.setRequestHeader ('Content-type', 'application/json');
    xhttp.send (JSON.stringify (data));

    xhttp.onload = function () {
        return cb (xhttp.status);
    }
}
