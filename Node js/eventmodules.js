//Event is signal that indicate that sth has happened


//class
const EventEmitter=require('events');
//obj
const emitter=new EventEmitter();

//Register Listner
emitter.addListener('messageLogged',function( ){
    console.log('Listener Called!');
})

emitter.addListener('messageLogged',(arg)=>{
    console.log('Listener Called!',arg);
})



emitter.emit('messageLogged'); //emit mean make a noise or produce sth. 
emitter.emit('messageLogged',{id:1}); //emit mean make a noise or produce sth. 