

const events = require('events');
const myEvents = new events.EventEmitter();
myEvents.on('click', (n1,n2,n3) => {
    console.log(n1,n2,n3)
});
myEvents.emit('click',10,11,12);


