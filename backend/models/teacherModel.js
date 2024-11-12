const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    name: { type: String, required: true },
    subject: { type: String, required: true },
    schoolId: { type: mongoose.Schema.Types.ObjectId, ref: 'School' },
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
