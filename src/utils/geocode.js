const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoia2FhbnNlcnRlbCIsImEiOiJjbDJhMXg5YmkwMTVmM2lwamN5b2cyNXg1In0.cK1jt1Yyj33bKVkx3CjZQg'

    request( {url: url, json:true}, (error, body) => {
        if (error){
            callback('Error', undefined )
        }else if (body.features.length === 0) {
            callback('Error', undefined)
         }
        else {
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
            
        }
    })
}


module.exports = geocode
