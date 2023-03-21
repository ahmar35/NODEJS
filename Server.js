const http=require ("http")
const requestListener = function (req, res) {
    const url=req.url
    if(url==="/"){
        res.end("MainPage")
    }
    else if(url==="/home"){
        res.end("Welcome home")
    }
    else if (url==="/about"){
        res.end("Welcome to About us page");
    }
    else if (url==="/node"){
        res.end("Welcome to my node js project")
    }


};
const server = http.createServer(requestListener);
server.listen(4000)