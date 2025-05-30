// controllers/voteController.js
import Voter from '../models/voters.js';
import Candidate from '../models/candidate.js';

export const vote = async (req, res) => {
  const { voterName, candidateId } = req.body;

  try {
    // Only allow registered voters
    const voter = await Voter.findOne({ name: voterName });
    if (!voter) {
      return res.status(404).json({ message: 'Voter not found. Please register first.' });
    }

    if (voter.hasVoted) {
      return res.status(400).json({ message: 'You have already voted.' });
    }

    const candidate = await Candidate.findById(candidateId);
    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found.' });
    }

    candidate.votes += 1;
    voter.hasVoted = true;

    await candidate.save();
    await voter.save();

    res.status(200).json({ message: 'Vote submitted successfully!' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addVoter = async (req, res) => {
  const { voterName } = req.body;

  try {
    // Checking if the voter already exists
    let voter = await Voter.findById(req.user.id);
    if (voter) {
      return res.status(400).json({ message: 'Voter already exists.' });
    }

    // Create a new voter
    voter = new Voter({ name: voterName });

    // Save the new voter
    await voter.save();

    res.status(201).json({ message: 'Voter added successfully!', voter });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
