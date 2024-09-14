const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Question = sequelize.define('Question', {
    questionText: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.ENUM('MCQ', 'Descriptive'),
        allowNull: false,
    },
    options: {
        type: DataTypes.JSON, // For MCQ options
        allowNull: true,
    },
    image: {
        type: DataTypes.STRING, // To store image file path
        allowNull: true
    }
}, {
    timestamps: true,
});

module.exports = Question;
