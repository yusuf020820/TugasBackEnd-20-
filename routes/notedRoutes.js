const express = require('express');
const router = express.Router();
const noted = require('../controllers/notedController');

router.get('/GetNoted', noted.getNoted);
router.post('/PostNoted', noted.PostNoted);
router.get('/GetId', noted.GetId);
router.delete('/Delete/:id', noted.Delete);
router.put('/Update/:id', noted.Update);

module.exports = router;
//oh
