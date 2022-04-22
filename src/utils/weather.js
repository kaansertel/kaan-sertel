const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=964530bb145f5bddbd6d636ccbd89fd7&query=40.1917,29.0611'


const weather = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=964530bb145f5bddbd6d636ccbd89fd7&query=' + latitude + ',' + longitude + '&units=m'


    request({ url: url, json:true}, (error, body) => {

        if (error){

            callback('Error', undefined )
        }else if(body.error){

            callback('Error', undefined)
        }else {

            callback(undefined, ' Hava Sıcaklığı ' + body.current.temperature )
            
        }
    })
}




module.exports = weather