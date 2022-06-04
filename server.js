const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const aliens = {}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:alienName', (request, response) => {
    const aliensName = request.params.alienName.toLowerCase()
    if(aliens[aliensName]){
         response.json(aliens[aliensName])
    } else {
        response.json(aliens['humans'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log('Sever is running.')
})