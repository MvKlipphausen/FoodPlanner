const 
    express = require('express'),
    expressHandlebars = require('express-handlebars'),
    bodyParser = require('body-parser');
require('dotenv').config();


const port = process.env.PORT;
const app = express();
app.listen(port, () => {
    console.log('App is listening on port: ' + port)
});