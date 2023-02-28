const path=require('path');

var pathObj=path.parse(__filename);

console.log(pathObj);


const os=require('os');
console.log(os.totalmem());
console.log(os.freemem());

console.log(`Total memory ${os.totalmem()}`);

const fs=require('fs');
const files=fs.readdirSync('./');
console.log(files);


fs.readdirSync('./',function(err,files){
    if (err){console.log('Error',err);}
    else{ console.log('Result',files);}
})