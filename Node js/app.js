function sayHello(name){
  console.log('Hello '+name);// global object we can acess it everywhere.
}

//some of js global objects:
setTimeout();
clearTimeout();


setInterval();
clearInterval();


sayHello("Mohamed");



//console.log(window); Node doesn't contain window or document.  it's the default of window.console.log
/*
var message='Hello';
window.message;

we can use:

global.setTimeout();

*/


var message='';
console.log(global.message); //undifined because it's not in global
//it's not avaiiable outside this file.
//instead we need to don't use global scope and make modules and defines the variables and functions in
//to do not overwrite two functions and variables with the same name



var logger=require('./logger.js'); //to do not overwrite the module.
logger.log('message');

const Logger2=require('./logger2.js'); //to do not overwrite the module.
const logger2=new Logger2();
logger2.log(message);
