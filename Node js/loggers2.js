
console.log(module);

url='http://loggers/io/log';


class Logger extends EventEmitter{

  log(message){
      //send http request
      console.log(message);
    

    this.emitter.emit('messageLogged',{id:1}); //emit mean make a noise or produce sth. 
  }
}
module.exports.log=log;
module.exports.url=url;
console.log(module);
