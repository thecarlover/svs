// routes/voteRoutes.js
import express from 'express';
const router = express.Router();
import { vote, addVoter } from '../controllers/votecontroller.js';  
import { authenticate } from '../middlewares/auth.js';



router.post('/add-voter', addVoter);  // Add voter route
router.post('/', vote);  // Vote submission route

router.post('/vote', authenticate, vote); 

export default router;
