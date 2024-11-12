const mongoose = require('mongoose');

const parentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contact: { type: String, required: true },
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
});

const Parent = mongoose.model('Parent', parentSchema);

module.exports = Parent;
