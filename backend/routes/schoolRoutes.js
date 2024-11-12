const express = require('express');
const { addSchool, getAllSchools } = require('../controllers/schoolController');
const router = express.Router();

router.post('/', addSchool);
router.get('/', getAllSchools);

module.exports = router;
