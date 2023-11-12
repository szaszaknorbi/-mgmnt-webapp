const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

// ... other middleware

app.use('/users', userRoutes);

// ... error handling, server start
