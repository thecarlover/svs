import express from 'express';
import {
  addCandidate,
  getAllCandidates,
  getCandidateById,
  deleteCandidate,
} from '../controllers/candidateController.js';

const router = express.Router();

router.post('/add', addCandidate);
router.get('/', getAllCandidates);
router.get('/:id', getCandidateById);
router.delete('/:id', deleteCandidate);

export default router;
