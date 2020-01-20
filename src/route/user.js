import express from 'express';
import User from'../controllers/user.js';

const router = express.Router();

router.get('/alight/rw/staff',User.display_user);
router.post('/alight/rw/staff/profile/:id',User.single);


export default router;