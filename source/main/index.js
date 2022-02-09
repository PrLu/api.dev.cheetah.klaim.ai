const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(
    PORT,
    () => console.log(`its alive on http://localhost:${PORT}`)
)

app.get('/', (req, res) => {
    res.send('Hello World, from express');
});



// edited on 10-02-2022 for ProProject