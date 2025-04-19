import mongoose from 'mongoose';

const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  party: {
    type: String,
    required: false,
  },
  age: {
    type: Number,
    required: false,
  },
  bio: {
    type: String,
    required: false,
  },
  photoUrl: {
    type: String,
    required: false,
  },
  votes: {
    type: Number,
    default: 0,
  },
});

const Candidate = mongoose.model('Candidate', candidateSchema);
export default Candidate;
