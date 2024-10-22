const http = require('http');
const port = 3006;

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('Jose Julian 319177127');
    res.end();


});

server.listen(port, ()=>{
console.log(`El servidor esta en http://localhost:${port}`);
});