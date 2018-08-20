const cors = require('cors');
const app = require('express')();
const logger = require('morgan');
// const bodyParser = require('body-parser');

// const bookRouter = require('./routes/Books');
// const authorRouter = require('./routes/Authors');

const PORT = 3001;

app.use(logger('dev'));

// these two bodyParser middlewares are needed
// to accept json and edit/delete requests from the client
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: true}));

// the cors middleware is needed in order to process
// http requests from a different "origin" than the one
// associated with our express server
app.use(cors());

// routers for the app's two resources
// app.use('/books', bookRouter);
// app.use('/authors', authorRouter);

app.listen(PORT, () => console.log('listening on port: ', PORT));
