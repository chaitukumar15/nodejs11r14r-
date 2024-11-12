var http = require("http");

var url = require("url");


var server = http.createServer(async(req, res) => {

   var f=""
    req.on("data",(chunk)=>{

        f+=chunk;
    })
    req.on("end",()=>{
        console.log(JSON.parse(f));
        
    })
    console.log(req.method);

    console.log(req.url);

    console.log(url.parse(req.url,true))

    console.log(req.headers["content-type"]);

    console.log(req.query);


    res.redirect(200,"https://fakestoreapi.com/products")
    
    res.end("j");
});

var port = 3005;
server.listen(port, () => {
  console.log("hi server started " + port);
});
