const Parent = require('../models/parentModel');

// Add a new parent
exports.addParent = async (req, res) => {
    try {
        const { name, contact, studentId } = req.body;
        const newParent = new Parent({ name, contact, studentId });
        await newParent.save();
        res.status(201).json(newParent);
    } catch (error) {
        res.status(500).json({ message: 'Failed to add parent', error: error.message });
    }
};

// Get all parents
exports.getAllParents = async (req, res) => {
    try {
        const parents = await Parent.find();
        res.status(200).json(parents);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch parents', error: error.message });
    }
};
