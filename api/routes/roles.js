const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({success: true, message: "Roles route works!"});
});

module.exports = router; // Router nesnesini dışa aktar
