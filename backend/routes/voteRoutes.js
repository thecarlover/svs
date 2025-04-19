// routes/voteRoutes.js
import express from 'express';
const router = express.Router();
import { vote, addVoter } from '../controllers/votecontroller.js';  // Corrected import

router.post('/add-voter', addVoter);  // Add voter route
router.post('/', vote);  // Vote submission route

export default router;
