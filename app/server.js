const cors = require('cors');
const app = require('express')();
const logger = require('morgan');
const bodyParser = require('body-parser');

const companiesRouter = require('./routes/companiesRouter');
const productsRouter = require('./routes/productsRouter');

const PORT = 3001;

app.use(logger('dev'));

// these two bodyParser middlewares are needed
// to accept json and edit/delete requests from the client
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

// the cors middleware is needed in order to process
// http requests from a different "origin" than the one
// associated with our express server
app.use(cors());


// routers for the app's two resources
app.use('/companies', companiesRouter);
app.use('/products', productsRouter);

// app.get('/', (req,res) => { 
//     res.send("Hello World")
// });

app.listen(PORT, () => console.log('listening on port: ', PORT));
