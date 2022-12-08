const { response, application, request } = require('express');
const express = require('express');
const app = express();
const PORT = 3000

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Billy',
        'birthLocation': 'Rappers Town'
    },
    'chance the rapper': {
        'age': 29,
        'birthName': "Lance The Fapper",
        'birthLocation': "Turkey"
    },
    'unknown': {
        'age': 'unknown',
        'birthName': 'Unknown',
        'birthLocation': 'Unknown'
    }
}

app.get('/', (req, res) =>{
    res.sendFile(__dirname + "/index.html")
});

app.get('/api/:name', (req, res) => {
    const rapperName = req.params.name.toLocaleLowerCase();
    if( rappers[rapperName]) {
        res.json(rappers[rapperName])
    }else {
        res.json(rappers['unknown'])
    }
})
app.listen(PORT, (err) => {
    console.log(`Hello ${PORT}`)
})