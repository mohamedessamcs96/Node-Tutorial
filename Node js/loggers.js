
console.log(module);

url='http://loggers/io/log';
function log(message){
  //send http request
  console.log(message);

}
module.exports.log=log;
module.exports.url=url;


console.log(module);
