function addItem() {

    var nameElem = document.getElementById ('nameInput');
    var infoElem = document.getElementById ('infoInput');
    var alertMsgEl = document.getElementById('change-alert-msg');

    if (nameElem.value && infoElem.value) {

        alertMsgEl.innerHTML = '';
        alertMsgEl.setAttribute('class', 'alert alert-danger alertMsgUp');

        var obj = JSON.parse ('{"name":"' + nameElem.value + '", "description":"' + infoElem.value + '"}');

        xhtmlPostNewItem (obj, function (respondCode) {

            if (respondCode === 200) {
                nameElem.value = '';
                infoElem.value = '';
                window.location.href = '/';
            }
        })

    } else {
        alertMsgEl.innerHTML = 'Please enter name and description to add';
        alertMsgEl.setAttribute('class', 'alert alert-danger alertMsgDown');
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
