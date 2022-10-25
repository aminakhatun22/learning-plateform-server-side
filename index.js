const express = require('express')
const app = express();
const port = process.env.PORT || 4000;

const categories = require('./data/categories.json');


app.get('/teaching-categories', (req, res) => {
    res.send(categories)
})

app.get('/', (req, res) => {
    res.send('Teaching API Running');
});

app.listen(port, () => {
    console.log('Teaching server running on port', port)
}
)