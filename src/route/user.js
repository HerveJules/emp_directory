const express = require('express');
const user = require('../controllers/user.js');

const router = express.Router();

const {dispaly_user} = user;

router.get('/',(req,res)=>{
	res.render('all-emp',{
		dispaly_user
	})
})

module.exports = router;