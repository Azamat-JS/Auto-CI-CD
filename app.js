const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, '/frontend/build')));

app.get('/names', (req, res) => {
    res.send('My app is running')
});

app.listen(5000, () => {
    console.log('server is running on port: 5000')
})