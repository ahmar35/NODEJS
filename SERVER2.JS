const http=require ("http")
const fs=require("fs")
const requestListener = function (req, res) {
    const url=req.url
    const method=req.method
    if(url==="/"){
        fs.readFile("message.txt",{encoding:"utf-8"},(err,data)=>{
            if (err){
                console.log(err)
            }
            res.write("<html>")
            res.write("<head><title>Enter Message</title><head>")
            res.write(`<body>${data}</body>`)
            res.write("<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>SEND</button></form></body>")
            res.write("</html>")
            return res.end()

        })

    }
    if(url==="/message" && method==='POST'){
        const body=[]
        req.on("data",(chunk)=>{
            console.log(chunk)
            body.push(chunk)
            console.log(body)
        })
        req.on("end", ()=>{
            const parsedbody=Buffer.concat(body).toString()
            console.log(parsedbody)
            const message=parsedbody.split('=')[1]
            fs.writeFile("message.txt",message,(err)=>{
                if (err){
                    console.log(err)
                }
                res.statusCode=302
                res.setHeader('Location','/')
                console.log(res.setHeader)
                return res.end()
                
            })
        

        })

    
};
}

const server = http.createServer(requestListener);
server.listen(3000)