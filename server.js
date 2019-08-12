const express = require('express');
const bodyparser = require('body-parser')
const cors = require('cors');
const morgan = require('morgan');


// settings

const app = express();
app.use(cors());
app.use(morgan('dev'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.set('port', process.env.PORT || 5000);

//middlewares
app.use(bodyparser.json());

//Routes
app.use(require('./src/routes/UnidadFuncional'));
app.use(require('./src/routes/Locatario'));
app.use(require('./src/routes/Locador'));
app.use(require('./src/routes/Contrato'));


// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {

    console.log(process.env.NODE_ENV)

    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
} else {
    console.log(process.env.NODE_ENV)
};


// server listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
    console.log('the process.env.node_env is:',process.env.NODE_ENV)
});
