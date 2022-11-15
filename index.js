const express = require("express")
const app = express()
const port =  process.env.PORT || 3000;


app.use(express.static("public"));

app.set('views', './views');

app.get("/", (req, res) => {
    res.sendFile(__dirname +  "/public/index.html")
})

app.get("/qrcode", (req, res) => {
    res.sendFile(__dirname +  "/views/qrcode.html")
})

app.listen(port, () => {
    console.log('Listening in port: ' + port)
})

