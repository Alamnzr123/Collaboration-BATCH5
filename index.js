const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({
        msg: 'OKE'
    })
})

app.listen(3003, () => {
    console.log('listening on PORT 3003')
})