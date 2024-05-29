const http = require(`http`)
const fs = require(`fs`)

let server = http.createServer((req, res)=>{
  console.log(req.method)
  console.log(req.url)
  if(req.method === `GET`){
    if(req.url === `/`){
      fs.readFile(`index.html`, (err,data)=>{
        if(err){
          console.log(`readFile error : `, err)
        }else{
          res.write(data)
          res.end()
        }
      })
    };
  };
});
let PORT = 8080
server.listen(PORT)
console.log(`server open on : http://localhost:${PORT}/`)

//test clear