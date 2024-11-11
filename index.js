

var http=require("http");


var server =http.createServer((req,res)=>{

    console.log(req.url,"herllo");
    
    if(req.url=="/chaitanya"){

        res.end("chaitnaya");

    }

    else{
        res.end("ending")
    }


})

var port=3005;
server.listen(port,()=>{


console.log("hi server started "+port);


})