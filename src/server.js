const express = require('express');
const path = require('path');
const user = require('./route/user.js');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views',path.join(__dirname,'views'));
app.engine('handlebars',hbs({defaultLayout:'layout'}));
app.set('view engine','handlebars');

app.use(bodyParser.urlencoded({extended:true}))      
app.use(bodyParser.json());
app.use(user);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

module.export = app;