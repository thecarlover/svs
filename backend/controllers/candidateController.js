import Candidate from '../models/candidate.js';

// Add a new candidate
export const addCandidate = async (req, res) => {
    const { name, party, age, bio, photoUrl } = req.body;
  
    try {
      const candidate = new Candidate({
        name,
        party,
        age,
        bio,
        photoUrl,
      });
  
      await candidate.save();
  
      res.status(201).json({ message: 'Candidate added successfully!', candidate });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

// Get all candidates
export const getAllCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.status(200).json(candidates);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a specific candidate by ID (optional)
export const getCandidateById = async (req, res) => {
  const { id } = req.params;

  try {
    const candidate = await Candidate.findById(id);
    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found.' });
    }

    res.status(200).json(candidate);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a candidate (optional)
export const deleteCandidate = async (req, res) => {
  const { id } = req.params;

  try {
    const candidate = await Candidate.findByIdAndDelete(id);
    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found.' });
    }

    res.status(200).json({ message: 'Candidate deleted successfully.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
