const Fee = require('../models/feeModel');

// Add a new fee entry
exports.addFee = async (req, res) => {
    try {
        const { studentId, amount, dueDate } = req.body;
        const newFee = new Fee({ studentId, amount, dueDate });
        await newFee.save();
        res.status(201).json(newFee);
    } catch (error) {
        res.status(500).json({ message: 'Failed to add fee', error: error.message });
    }
};

// Get all fee entries
exports.getAllFees = async (req, res) => {
    try {
        const fees = await Fee.find();
        res.status(200).json(fees);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch fees', error: error.message });
    }
};
