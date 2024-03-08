const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// User registration
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = new User({ email, password });
    await user.save();
    const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '24h' });
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

// User login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send({ error: 'Login failed!' });
    }
    const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '24h' });
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
