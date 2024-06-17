const express = require('express');
const router = express.Router();
const noted = require('../controllers/notedController');

router.get('/GetNoted', noted.getNoted);
router.post('/PostNoted', noted.PostNoted);

module.exports = router;
