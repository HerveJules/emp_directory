import express from 'express';
import User from'../controllers/user.js';

const router = express.Router();

router.get('/log',(req,res)=>{
	res.render('index');
});
router.get('/about',(req,res)=>{
	res.render('about');
})
router.get('/contact',User.display_user)
router.get('/alight/rw/staff',User.display_user);
router.post('/profile/:id',User.single);


export default router;