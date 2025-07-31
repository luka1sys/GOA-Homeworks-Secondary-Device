

const events = require('events');
// events მოდულის გამოყენება შეიძლება  სერვერზე სხვადასხვა მოქმედებების პასუხად
const myEvents = new events.EventEmitter();
myEvents.on('click', () => {
    console.log("helooo")
});
myEvents.on('submit' , () =>{
    console.log('helo world')
});
myEvents.emit('click');
myEvents.emit("submit")
// on —  ეუბნები პროგრამას: როდესაც click მოხდება, გააკეთე ეს.
// emit მეთოდით ვიწვევთ მოვლენებს 

