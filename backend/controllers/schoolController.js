const School = require('../models/schoolModel');

// Add a new school
exports.addSchool = async (req, res) => {
    try {
        const { name, address, establishedYear, contact } = req.body;
        const newSchool = new School({ name, address, establishedYear, contact });
        await newSchool.save();
        res.status(201).json(newSchool);
    } catch (error) {
        res.status(500).json({ message: 'Failed to add school', error: error.message });
    }
};

// Get all schools
exports.getAllSchools = async (req, res) => {
    try {
        const schools = await School.find();
        res.status(200).json(schools);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch schools', error: error.message });
    }
};
