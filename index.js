const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// MIDDLE WARE 
app.use(cors());
app.use(express.json());









app.get('/', (req, res) => {
    res.send('Hello from volunteer network');
})

app.listen(port, () => {
    console.log('listening the port', port);
})
