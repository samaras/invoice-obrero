var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

// Routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var invoicesRouter = require('./routes/invoice');
var clientsRouter = require('./routes/client');
var itemsRouter = require('./routes/item');
var companiesRouter = require('./routes/company');

/* // Mongoose // */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise // Native node promise


// const url = process.env.MONGODB_URI || "mongodb://localhost:27017/invoice"
mongoose.connect('mongodb://localhost:27017/invoice-obrero')
	then(() => console.log('connection established to db ...'))
	.catch((err) => console.err(err));

var app = express();

// let port = 5000 || process.env.PORT;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/items', itemsRouter);
app.use('/invoices', invoicesRouter);
app.use('/clients', clientsRouter);
app.use('/companies', companiesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
