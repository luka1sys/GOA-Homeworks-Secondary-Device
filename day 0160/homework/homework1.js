const events = require('events')
const myEvents= new events.EventEmitter()
myEvents.on('greet',  (name) =>{
    console.log(`my name is ${name}`)
})
myEvents.emit('greet','luka')


