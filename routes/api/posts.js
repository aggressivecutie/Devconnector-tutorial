const express = require('express');
const router = express.Router();

// @route GET request api/post/test
// @desc Tests post routes
// @access Public
router.get('/test', (req, res) => res.json({msg: "Posts Works"}));

module.exports = router;
