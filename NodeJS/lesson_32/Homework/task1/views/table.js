function getData() {

    xhtGetItems (function (DBdata) {
        createTable (DBdata);
    })

}

function deleteItem() {

    var e = document.getElementById ('change-input');
    var alertMsgEl = document.getElementById ('change-alert-msg');

    if (e.value) {

        alertMsgEl.innerHTML = 'Please enter name and info to add';
        alertMsgEl.setAttribute ('class', 'alert alert-danger alertMsgUp');

        xhtDeleteItem (e.value, function (status, result) {

            var isDeleted = +result;

            if (status === 200 && isDeleted) {
                console.log ('we found this id and delete item succesfully');
                window.location.href = '/';
            } else if (status === 200 && !isDeleted) {
                alertMsgEl.innerHTML = 'No such record in database. Please check data you entered';
                alertMsgEl.setAttribute ('class', 'alert alert-danger alertMsgDown');
            } else {
                console.log ('Something goes wrong. Response from server = ', isDeleted);
            }
        })
    } else {
        alertMsgEl.innerHTML = 'Please enter id';
        alertMsgEl.setAttribute ('class', 'alert alert-danger alertMsgDown');
    }
}

function edititem() {

    var e = document.getElementById ('change-input');
    var alertMsgEl = document.getElementById ('change-alert-msg');
    var idToChange = e.value;

    if (idToChange) {
        alertMsgEl.innerHTML = 'Please enter name and info to add';
        alertMsgEl.setAttribute ('class', 'alert alert-danger alertMsgUp');

        xhtCheckId (idToChange, function (isIdExist) {
            if (isIdExist) {
                window.location.href = '/editItem/' + idToChange;
            } else {
                alertMsgEl.innerHTML = 'No such record in database. Please check data you entered';
                alertMsgEl.setAttribute ('class', 'alert alert-danger alertMsgDown');
            }
        });
    } else {
        alertMsgEl.innerHTML = 'Please enter id';
        alertMsgEl.setAttribute ('class', 'alert alert-danger alertMsgDown');
    }

}

function createTable(incomeData) {

    var data = JSON.parse (incomeData);

    if (data) {
        var dataProperties = Object.getOwnPropertyNames (data[0]);
        var elem = document.getElementById ('results-table');

        while (elem.firstChild) {elem.removeChild (elem.firstChild)}

        var tableElem = document.createElement ('table');
        tableElem.setAttribute ('class', 'table table-bordered');
        var trElem = [];
        var cellElem = [];
        var theadElem, tbodyElem;

        theadElem = document.createElement ('thead');
        tbodyElem = document.createElement ('tbody');
        trElem[0] = document.createElement ('tr');

        for (var n = 0; n < dataProperties.length; n++) {
            cellElem[n] = document.createElement ('th');
            cellElem[n].innerHTML = dataProperties[n];
            trElem[0].appendChild (cellElem[n]);
        }

        theadElem.appendChild (trElem[0]);
        tableElem.appendChild (theadElem);

        cellElem = [];

        for (var m = 0; m < data.length; m++) {
            trElem[m + 1] = document.createElement ('tr');
            trElem[m + 1].setAttribute ('class', 'info');

            for (var y = 0; y < dataProperties.length; y++) {
                cellElem[y] = document.createElement ('td');
                cellElem[y].innerHTML = data[m][dataProperties[y]];
                trElem[m + 1].appendChild (cellElem[y]);
            }
            tbodyElem.appendChild (trElem[m + 1]);
        }
        tableElem.appendChild (tbodyElem);
        elem.appendChild (tableElem);

    } else {
        console.log ('No data from server available');
    }
}

