const Teacher = require('../models/teacherModel');

// Add a new teacher
exports.addTeacher = async (req, res) => {
    try {
        const { name, subject, schoolId } = req.body;
        const newTeacher = new Teacher({ name, subject, schoolId });
        await newTeacher.save();
        res.status(201).json(newTeacher);
    } catch (error) {
        res.status(500).json({ message: 'Failed to add teacher', error: error.message });
    }
};

// Get all teachers
exports.getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find();
        res.status(200).json(teachers);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch teachers', error: error.message });
    }
};
