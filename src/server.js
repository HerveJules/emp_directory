// const express = require('express');
import express from 'express';
import path from 'path';
import user from './route/user.js';
import User from './controllers/user.js';
import hbs from 'express-handlebars';
import bodyParser from 'body-parser';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views',path.join(__dirname,'views'));
app.engine('handlebars',hbs({defaultLayout:'layout'}));
app.set('view engine','handlebars');

app.use(bodyParser.urlencoded({extended:true}))      
app.use(bodyParser.json());
app.use(user);


app.get('/profile',(req,res)=>{
	res.render('profile');
});
app.post('/profile/:id',User.single);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

export default app;