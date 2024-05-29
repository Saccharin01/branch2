const http = require(`http`)

let server = http.createServer((req, res)=>{
  console.log(req.method)
  console.log(req.url)
  if(req.method === `GET`){
    if(req.url === `/`){
      
    };
  };
});