const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=964530bb145f5bddbd6d636ccbd89fd7&query=40.1917,29.0611'


const weather = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=964530bb145f5bddbd6d636ccbd89fd7&query=' + latitude + ',' + longitude + '&units=m'


