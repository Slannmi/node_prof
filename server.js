import http from 'http'

const server = http.createServer((req, res) =>{
    res.writeHead(200, {
        'content-type' : 'text/plain'
    })
    res.end("Servidor rodando")
})

server.listen(3000, () => {
    console.log("servidor rodando");
})