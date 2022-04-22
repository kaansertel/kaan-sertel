const geocode = require('./utils/geocode.js')
const weather = require('./utils/weather.js')

const express = require('express')

const app = express()

const port = process.env.PORT || 3000

app.get('/',(error,response) =>{
    response.send("Homepage")
})

app.get('/test_text',(error,response) =>{
    response.send("Öğrenci No: 18360859014")
})

app.get('/test_html',(error,response) =>{
    response.send("<h1>Kaan Sertel</h1>")
})

app.get('/test_json',(error,response) =>{
    response.send({
        ad : "kaan",
        soyad: "sertel",
        numara: "18360859014"
    })
})







app.listen(port, () => {
    console.log("Port üzerinde calisiyor", port)
})