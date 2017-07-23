/**
 * Created by sergiiivanchenko on 23/07/2017.
 */

var map;

export function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}
