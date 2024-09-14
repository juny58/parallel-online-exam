const express = require('express');
const sequelize = require('./config/database');
const questionRoutes = require('./routes/question.route');
const app = express();
require('dotenv').config();

// Middleware
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/', questionRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    await sequelize.sync({ alter: true });
});
