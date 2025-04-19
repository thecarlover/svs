import Voter from '../models/voters.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'yehmerasecrethai'; 

export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingVoter = await Voter.findOne({ email });
    if (existingVoter) {
      return res.status(400).json({ message: 'Email already in use.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const voter = new Voter({ name, email, password: hashedPassword });
    await voter.save();

    const token = jwt.sign({ id: voter._id }, JWT_SECRET, { expiresIn: '1d' });
    res.status(201).json({ token, voter: { name: voter.name, email: voter.email } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const voter = await Voter.findOne({ email });
    if (!voter) {
      return res.status(404).json({ message: 'Voter not found.' });
    }

    const isMatch = await bcrypt.compare(password, voter.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    const token = jwt.sign({ id: voter._id }, JWT_SECRET, { expiresIn: '1d' });
    res.status(200).json({ token, voter: { name: voter.name, email: voter.email } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
