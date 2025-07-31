const events = require('events');
const myEvents = new events.EventEmitter();
myEvents.on('userJoined',(username) =>{
    console.log(`User: ${username} has joined`);
}) 
myEvents.emit('userJoined','luksona')