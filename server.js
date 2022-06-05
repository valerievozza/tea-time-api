const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const tea = {
    'oolong': {
        'type': 'black',
        'origin': 'Asia',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffeinated': true,
        'flavor': 'delicious'
    },
    'unknown': {
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 'unknown',
        'steepTimeSeconds': 'unknown',
        'caffeinated': false,
        'flavor': 'unknown'
    }
}

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    console.log(req.params.name.toLowerCase())
    if (tea[teaName]) {
        res.json(tea(teaName))
    } else {
        res.json(tea['unknown'])
    }
    res.json(tea)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})