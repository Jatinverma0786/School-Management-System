const express = require('express');
const { addFee, getAllFees } = require('../controllers/feeController');
const router = express.Router();

router.post('/', addFee);
router.get('/', getAllFees);

module.exports = router;
