const 
    express = require('express'),
    expressHandlebars = require('express-handlebars'),
    bodyParser = require('body-parser'),
    routing = require('./routes'),
    logUrlMiddleware = require('./middleware/logUrlMiddleware'),
    dbService = require('./services/db.services');
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

//mongoDB connection
const uri = process.env.MONGO_DB_URI;
dbService.connect(uri);

const port = process.env.PORT;
app.listen(port, () => {
    console.log('App is listening on port: ' + port)
});