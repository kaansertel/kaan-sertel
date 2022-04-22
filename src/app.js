const express = require('express')

const app = express()

const port = process.env.PORT || 3000

app.get('/',(error,response) =>{
    response.send("Homepage")
})

app.get('/test_text',(error,response) =>{
    response.send("Öğrenci No: 18360859014")
})







app.listen(port, () => {
    console.log("Port üzerinde calisiyor", port)
})