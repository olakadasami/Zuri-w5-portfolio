const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=> {
    console.log("Server request made", req.method, req.url)
    res.setHeader("Content-Type", "text/html")
    
    let path = './views/'
    switch (req.url) {
        case '/':
            path += 'home.html'
            res.statusCode = 200
            break;

        case '/home':
            res.statusCode = 301
            res.setHeader("Location", '/')
            res.end()
            break;
            
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break;
        
        case '/contact':
            path += 'contact.html'
            res.statusCode = 200
            break;

        default:
            path += '404.html'
            res.statusCode = 404
            break;
    }

    fs.readFile(path, (err, data)=> {
        if(err) {
            console.log(err)
            res.end()
        } else {
            res.write(data)
            res.end()
        }
    })
            
})

server.listen(3000, 'localhost', ()=>{
    console.log("listening to requests on port 3000")
})