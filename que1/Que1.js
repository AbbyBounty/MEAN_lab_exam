const http= require('http')
const url=require('url')
const Server = http.createServer((request,response)=>{

var url_parse=url.parse(request.url,true)
var uname=url_parse.query.name;

response.writeHead(200,{'Content-Type':'text/html'})
  
 response.write("<h1>Welcome "+uname +"</h1>")

})
const port=7070
Server.listen(port,'0.0.0.0',()=>{
console.log(`Server started on port ${port}`)
})



