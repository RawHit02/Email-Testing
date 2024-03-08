const express = require('express');
const router = express.Router();

// Importing the controller methods
const {
  getEmailSequences,
  getEmailSequenceById,
  createEmailSequence,
  updateEmailSequence,
  deleteEmailSequence
} = require('../controllers/emailSequenceController'); // Adjust the path as necessary

// Route to create a new email sequence
router.post('/', createEmailSequence);

// Route to get all email sequences
router.get('/', getEmailSequences);

// Route to get a specific email sequence by ID
router.get('/:id', getEmailSequenceById);

// Route to update a specific email sequence
router.patch('/:id', updateEmailSequence);

// Route to delete a specific email sequence
router.delete('/:id', deleteEmailSequence);

module.exports = router;
