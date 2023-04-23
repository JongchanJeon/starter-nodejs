const express = require('express');

const router = express.Router();

//GET /user 라우터
router.get('/:id', function(req, res) {
    console.log(req.params, req.query);
});

module.exports = router;