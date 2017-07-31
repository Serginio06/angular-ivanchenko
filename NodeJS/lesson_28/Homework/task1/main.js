const EventEmmiter = require('events');

const emiter = new EventEmmiter();
let counter = Date.now();


emiter.on('tick', function () {
    let currentTime = Date.now();
    let timeGap = Math.round(((currentTime - counter)/1000)*1000)/1000;
 console.log('First tick was generated ' + timeGap + ' seconds ago');
});

setInterval(()=>{emiter.emit('tick')},1000);