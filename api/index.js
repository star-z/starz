var express = require('express');
var router = express.Router();

router.route('/movies').get(require('./routes/movies'));
router.route('/reviews').get(require('./routes/reviews'));

module.exports = router;
