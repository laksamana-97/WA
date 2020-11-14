const express = require('express')
const http = require('http')
const app = express()


app.get('/', (req, res) => res.send(`

LP BOT SIAP DIGUNAKAN.
BOT BY ©LKS Project

`))

app.listen(process.env.PORT, () => console.log("Your app is listening on port " + process.env.PORT))

setInterval(() => {

  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);

}, 270000);
/*
app.listen(process.env.PORT, () => console.log(`Example app listening on port ${port}!`))
*/