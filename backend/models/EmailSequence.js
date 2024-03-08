const mongoose = require('mongoose');

const emailSequenceSchema = new mongoose.Schema({
  name: String,
  nodes: [{
    type: { type: String, enum: ['sendEmail', 'wait', 'decision'], required: true },
    parameters: mongoose.Schema.Types.Mixed
  }]
});

const EmailSequence = mongoose.model('EmailSequence', emailSequenceSchema);

module.exports = EmailSequence;
