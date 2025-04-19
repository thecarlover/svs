import mongoose from 'mongoose';

const voterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  hasVoted: { type: Boolean, default: false },
});

const Voter = mongoose.model('Voter', voterSchema);
export default Voter;
