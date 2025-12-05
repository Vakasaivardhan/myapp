const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.write("🚀 New Build Deployed Successfully! This is the updated version of the Node.js application.");
    res.end();
});

server.listen(port, () => {
    console.log("Server running on port", port);
});
