/**
 * Created by sergiiivanchenko on 29/07/2017.
 */
const EventEmmiter = require ('events');


class MyEmmiter extends EventEmmiter{};

const myEmitter = new MyEmmiter();
var counter = 0;

myEmitter.on('test_event_1',()=>{
    counter++;
    console.log('event 1 occured ' + counter + ' times');
});

setInterval(()=>myEmitter.emit('test_event_1'),3000);

