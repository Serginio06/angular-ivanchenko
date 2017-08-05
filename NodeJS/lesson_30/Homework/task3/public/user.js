function getUserDetails(userId, cb) {
    // console.log ('click! = ', userId);

    var xhttp = new XMLHttpRequest ();

    xhttp.onload = function (data) {
        // console.log ('server response with user data= ', xhttp.responseText);
         return cb(xhttp.responseText)


    };

    xhttp.open ("GET", `/users/${userId}`, true);
    xhttp.send ();

}


function getUsers( cb) {
    // var users = [
    //     {name: 'Jane', age: 23}, {name: 'John', age: 30}, {name: 'Vasya', age: 25},
    //     {name: 'Yvonne', age: 34}, {name: 'Will', age: 18}, {name: 'Jack', age: 26}
    // ];

    var xhttp = new XMLHttpRequest ();

    xhttp.onload = function (data) {

        // console.log ('users data from server = ', xhttp.responseText);
        return cb(xhttp.responseText);


    };

    xhttp.open ('GET', '/usersArray', true);
    xhttp.send ();


}

function showUsers() {
     getUsers (function (data) {

         var users = JSON.parse(data);


         var mainElem = document.getElementById ('users-list');

         var listElem = document.createElement ('ol');
         listElem.setAttribute ('class', 'list-group ');


         var liElem = document.createElement ('li');
         liElem.setAttribute ('class', 'list-group-item header');
         liElem.innerHTML = "User name";
         listElem.appendChild (liElem);


         users.map (function (item, index) {
             var liElem = document.createElement ('li');
             liElem.setAttribute ('onclick', `showUserDetails(${index})`);
             liElem.setAttribute ('class', 'list-group-item list-group-item-success');
             liElem.style.cursor = 'pointer';
             liElem.innerHTML = item.name;
             listElem.appendChild (liElem);
         });


         mainElem.appendChild (listElem);
    });
}

function showUserDetails(id){

    getUserDetails(id,function (data) {

        var userDetails = JSON.parse(data);

        var elem = document.getElementById('user-details');
        while  (elem.firstChild){
            elem.removeChild(elem.firstChild);
        }

        var h3Elem = document.createElement('h3');
        h3Elem.innerHTML = 'Name: ';
        var spanElem = document.createElement('span');
        spanElem.setAttribute('class','label label-primary');
        spanElem.innerHTML = userDetails.name;
        h3Elem.appendChild(spanElem);
        elem.appendChild(h3Elem);

        var h3Elem2 = document.createElement('h3');
        var spanElem2 = document.createElement('span');
        h3Elem2.innerHTML = 'Age: ';
        spanElem2.setAttribute('class','label label-primary');
        spanElem2.innerHTML = userDetails.age;
        h3Elem2.appendChild(spanElem2);
        elem.appendChild(h3Elem2);
    })

}