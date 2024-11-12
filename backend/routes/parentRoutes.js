const express = require('express');
const { addParent, getAllParents } = require('../controllers/parentController');
const router = express.Router();

router.post('/', addParent);
router.get('/', getAllParents);

module.exports = router;
