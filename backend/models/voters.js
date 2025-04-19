import mongoose from 'mongoose';

const voterSchema = new mongoose.Schema({
  name: String,
  hasVoted: { type: Boolean, default: false }
});

const Voter = mongoose.model('Voter', voterSchema);
export default Voter;
