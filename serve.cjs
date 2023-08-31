const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname)));

app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(8080, () => {
    console.log(`Aplicacao rodando na porta 8080`);
});