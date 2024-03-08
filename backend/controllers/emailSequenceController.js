const EmailSequence = require('../models/EmailSequence');

// Inside emailSequenceController.js

// Function to get a single email sequence by its ID
exports.getEmailSequenceById = async (req, res) => {
  try {
    const sequence = await EmailSequence.findById(req.params.id);
    if (!sequence) {
      return res.status(404).send({ message: 'Sequence not found' });
    }
    res.json(sequence);
  } catch (err) {
    res.status(500).send(err);
  }
};


exports.createEmailSequence = async (req, res) => {
  try {
    const newSequence = new EmailSequence(req.body);
    await newSequence.save();
    res.status(201).json(newSequence);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Define other methods for update, delete, etc.
exports.updateEmailSequence = async (req, res) => {
  try {
    const { id } = req.params; // Assuming you pass the sequence ID as a URL parameter
    const update = req.body;
    const options = { new: true }; // Returns the modified document rather than the original

    const updatedSequence = await EmailSequence.findByIdAndUpdate(id, update, options);
    if (!updatedSequence) {
      return res.status(404).send({ message: 'Sequence not found' });
    }
    res.json(updatedSequence);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.deleteEmailSequence = async (req, res) => {
  try {
    const { id } = req.params; // Assuming you pass the sequence ID as a URL parameter
    const deletedSequence = await EmailSequence.findByIdAndDelete(id);
    if (!deletedSequence) {
      return res.status(404).send({ message: 'Sequence not found' });
    }
    res.status(204).send(); // No Content response
  } catch (err) {
    res.status(500).send(err);
  }
};
