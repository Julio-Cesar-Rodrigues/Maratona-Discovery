const express = require("express");
const server = express();
const routes = require("./routes");

server.set('view engine', 'ejs')
//habilita os arquivos estativos
server.use(express.static("public"))

server.use(routes)
server.listen(3000, () => console.log('rodando'))