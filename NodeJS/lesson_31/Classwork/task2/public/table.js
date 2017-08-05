var data = '';

function xhttpRequest(cb) {

    var xhttp = new XMLHttpRequest ();

    xhttp.onload = function () {

        // console.log ('xhttp.responseText with data from db = ', xhttp.responseText);
        return cb (xhttp.responseText)
    };


    xhttp.open ('GET', '/get-data', true);
    xhttp.send ()

}

function getData() {

    xhttpRequest (function (DBdata) {
        // console.log ('DBdata= ', DBdata);
        createTable (DBdata);

    })

}

function createTable(incomeData) {

    var data = JSON.parse (incomeData);

    if (data) {
        var dataProperties = Object.getOwnPropertyNames (data[0]);


        var elem = document.getElementById ('results-table');
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


        cellElem= [];
        
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

