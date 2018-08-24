const cors = require('cors');
const app = require('express')();
const logger = require('morgan');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');

const secret = process.env.TOKEN_SECRET || 'supersecuresecret';

const companiesRouter = require('./routes/companiesRouter');
const productsRouter = require('./routes/productsRouter');
const authRouter = require('./routes/authRouter');
const favRouter = require('./routes/favRouter');

const PORT = process.env.PORT || 3001;

app.use(logger('dev'));

// these two bodyParser middlewares are needed
// to accept json and edit/delete requests from the client
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// the cors middleware is needed in order to process
// http requests from a different "origin" than the one
// associated with our express server
app.use(cors());

app.use('/auth', authRouter);

// routers for the app's two resources
app.use('/companies', companiesRouter);
app.use('/products', productsRouter);
app.use('/favorites', favRouter);

// app.get('/', (req,res) => {
//     res.send("Hello World")
// });

app.get('/',
  jwt({ secret }),
  (req, res) => {
    res.json({
      message: `Hello ${req.user.username}! Anyone can see this!`,
    });
  });

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: err,
  });
});

app.listen(PORT, () => console.log('listening on port: ', PORT));
