const express = require('express');
const router = express.Router();

// @route GET request api/profile/test
// @desc Tests profile routes
// @access Public
router.get('/test', (req, res) => res.json({msg: "Profile Works"}));

module.exports = router;
