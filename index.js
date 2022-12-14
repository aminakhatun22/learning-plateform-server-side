const express = require('express')
const app = express();
const port = process.env.PORT || 4000;
const categories = require('./data/categories.json');
const cors = require('cors');

//middle-wares
app.use(cors());

// get all data 
app.get('/courses', (req, res) => {
    res.send(categories)
})
// get single data 
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const category = categories.find(item => item.id == id)
    res.send(category);
})

app.get('/', (req, res) => {
    res.send("<h1>Teaching API Running</h1>");
});

app.listen(port, () => {
    console.log('Tutorio server running on port', port)
}
)