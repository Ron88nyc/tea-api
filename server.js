const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

const tea = {
    'oolong': {
        'type':'black' ,
        'steepTime': 'yo mmommas house',
        'caffeine':true,
        'waterTemp':200,
        'steepTimeSeconds': 180,
        'flavor':'delicious'
    },
    'matcha': {
        'type':'green' ,
        'steepTime': 'yo mmommas house',
        'caffeine':true,
        'waterTemp':200,
        'steepTimeSeconds': 180,
        'flavor':'delicious'
    },
    'unknown': {
        'type':'black' ,
        'steepTime': 'yo mmommas house',
        'caffeine':true,
        'waterTemp':200,
        'steepTimeSeconds': 180,
        'flavor':'delicious'
    }
}

app.get('/', (request, response)=> {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=> {
    const teaName = request.params.name.toLowerCase()

    if (tea[teaName]) {
        response.json(tea[teaName])
    } else {
        response.json(tea['unknown'])
    }
})

app.listen(process.env.PORT || PORT,() =>{
    console.log(`The server is running on ${PORT}! Betta go Catch It!`)
})