import http from 'http';

const server = http.createServer((req,res)=>{
  if(req.method === 'GET'){
    if(req.url === "/"){
      res.writeHead(200,{'Content-Type':'text/plain'})
      res.write("hi")
      res.end();
    }
  }
})
server.listen(3000, ()=>{
    console.log("http://localhost:8080")
})