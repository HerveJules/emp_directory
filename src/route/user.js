import express from 'express';
import User from'../controllers/user';

const router = express.Router();

router.get('/staff',User.display_user);


export default router;