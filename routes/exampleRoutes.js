const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/exampleController');

router.get('/examples', exampleController.getExamples);
router.post('/examples', exampleController.createExample);

module.exports = router;
