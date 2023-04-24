const express = require('express');
const app = express();
const path = require('path')
const http = require('http');
const port = 3001
app.use(express.static('teerex'));
app.use("/public", express.static(path.join(__dirname, 'public')));

const server = http.createServer(app);


server.listen(port, () => {
    console.log(`server is running on port ${port}...`)
})