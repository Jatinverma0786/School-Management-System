const mongoose = require('mongoose');

const feeSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    amount: { type: Number, required: true },
    dueDate: { type: Date, required: true },
});

const Fee = mongoose.model('Fee', feeSchema);

module.exports = Fee;
