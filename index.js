const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=> {
    console.log("Server request made", req.method, req.url)
    
    let path = './views/'
    switch (req.url) {
        case '/':
            path += 'home.html'
            break;
            
        case '/about':
            path += 'about.html'
            break;
        
        case '/contact':
            path += 'contact.html'
            break;

        case '/home':
            path += 'home.html'
            break;
        
        default:
            path += 'home.html'
            break;
    }

    res.setHeader("Content-Type", "text/html")
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