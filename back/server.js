const express = require('express');
const bodyparser = require('body-parser')
const cors = require('cors');
const morgan = require('morgan');


// settings

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.set('port', process.env.PORT || 3002);

//middlewares
app.use(bodyparser.json());

//Routes
app.use(require('./src/routes/UnidadFuncional'));
app.use(require('./src/routes/Locatario'));
app.use(require('./src/routes/Locador'));
app.use(require('./src/routes/Contrato'));



// server listening

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});