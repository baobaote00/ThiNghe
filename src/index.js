const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const routes = require('../routes/routes');

const app = express();
app.use(bodyParser.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()) // for parsing application/json
app.use(cors());

app.use('/', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});





