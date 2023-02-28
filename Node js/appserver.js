const http=require('http');




// we will not do it like that because we add them in a linear way so i will use express.
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("Welcome Home");
        res.end();
    }
    if(req.url==='/course/api'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});
server.listen(3000);

/*
server.addListener('connection',(socket)=>{
    console.log('New Connection!');
});
*/

console.log('Listenning on port 3000 ...');