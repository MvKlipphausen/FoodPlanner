const 
    express = require('express'),
    expressHandlebars = require('express-handlebars'),
    bodyParser = require('body-parser'),
    routing = require('./routes'),
    logUrlMiddleware = require('./middleware/logUrlMiddleware');
require('dotenv').config();


const app = express();

//server settings
app.set('viewDir', 'views');

//middleware
app.use(logUrlMiddleware);
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static('public'));


app.engine('html', expressHandlebars({
    extname: 'html'
}));

app.set('view engine', 'html');
app.use('/', routing);

const port = process.env.PORT;
app.listen(port, () => {
    console.log('App is listening on port: ' + port)
});