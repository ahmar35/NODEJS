const express=require("express")
const app=express()
const fs=require("fs")
const bodyparser=require('body-parser')
const { send } = require("process")
app.use(bodyparser.urlencoded({extended:false}))



    app.get("/login",(req,res,next)=>{
        res.send(`<form action='/login' method='POST' onsubmit="localStorage.setItem('username', document.getElementById('username').value)"><input type='text' id= 'username'name='username'><Button type='submit'>LOGIN</Button>
        </form>`)
        
        
        
    } )
    app.post('/login',(req,res)=>{

  
        res.redirect("/")
        })

    
    app.get("/",(req,res,next)=>{
        fs.readFile("username.txt",{encoding:"utf-8"},(err,data)=>{
            if (err){
                console.log(err)
                data='no chat exist'
            }
        res.send (`${data}<form action='/' onsubmit ="document.getElementById('username').value=localStorage.getItem('username')" method='POST'>
        <input type='text' id='message' name='message' placeholder='message'>
        <input type='hidden' name='username' id='username'> 
        <button type='submit'>SEND</button>
        </form>`)
        })
    })
    
        
    app.post("/",(req,res)=>{
        console.log(req.body)
        const msg=req.body.message
        const usr=req.body.username

        fs.appendFile("username.txt", `${req.body.username}: ${req.body.message}`,(err)=>{
            if (err){
                console.log(err)
            }

        })
        res.redirect("/")

 
        
        

    })



    



    

   


    
  /*   

  if(url==="/"){

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
} */

app.listen(4000)