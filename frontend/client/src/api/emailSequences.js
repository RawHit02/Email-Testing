import axios from 'axios';

const baseUrl = '/api/emailSequences';

// Create a new email sequence
export const createSequence = async (sequence) => {
  return await axios.post(baseUrl, sequence);
};

// Fetch all email sequences
export const getSequences = async () => {
  return await axios.get(baseUrl);
};

// Fetch a single email sequence by ID
export const getSequenceById = async (id) => {
  return await axios.get(`${baseUrl}/${id}`);
};

// Update an existing email sequence
export const updateSequence = async (id, sequence) => {
  return await axios.patch(`${baseUrl}/${id}`, sequence);
};

// Delete an email sequence
export const deleteSequence = async (id) => {
  return await axios.delete(`${baseUrl}/${id}`);
};
