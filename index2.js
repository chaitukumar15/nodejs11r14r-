var http=require("http");

var url=require("url");

var server=http.createServer((req,res)=>{

    var j=[
        
    ]
 

    var parsed=url.parse(req.url,true);

    console.log(parsed);
    

    console.log(parsed.pathname.split("/"),"hello");

    var num=parsed.pathname.split("/")[parsed.pathname.length-1]


    
    res.end(JSON.stringify(parsed.query))

});

var port =3006
server.listen(port,()=>{
    console.log("hi i am conected to " + "http:/localhost:"+port);
    
})