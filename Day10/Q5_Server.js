const http =require ('http')
const server = http.createServer((req,res)=>{
    res.writeHead
    (200,{'content-Type': 'text/html'})
    res.end('Hello,from Node Js Server! /n')
})

server.listen(8080)