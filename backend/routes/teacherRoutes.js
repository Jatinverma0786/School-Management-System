const express = require('express');
const { addTeacher, getAllTeachers } = require('../controllers/teacherController');
const router = express.Router();

router.post('/', addTeacher);
router.get('/', getAllTeachers);

module.exports = router;
