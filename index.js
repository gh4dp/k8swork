const express = require('express')
const os = require('os')

const app = express()
app.get('/', (req, res) => {
        res.send(`Version 2.0.0, do you think this will show node name: from ${os.hostname()}!`)
})

const port = 3000
app.listen(port, () => console.log(`listening on port ${port}`))

