//libreria 
const request = require('request');

request('http://google.com',function(){
    console.log('termine la peticion de google')
})

console.log('yo voy despues de la peticion del codigo')