// routes/adminRoutes.js
import express from 'express';
import { registerAdmin, loginAdmin } from '../controllers/adminController.js';

const router = express.Router();

// Register Admin
router.post('/register', registerAdmin);

// Admin Login
router.post('/login', loginAdmin);

export default router;
