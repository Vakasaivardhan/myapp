const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.write("Hello! Your Jenkins + Docker pipeline deployed this Node app.");
    res.end();
});

server.listen(port, () => {
    console.log("Server running on port", port);
});
