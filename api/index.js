var express = require('express');
var router = express.Router();

router.route('/movies').get(require('./routes/movies'));
router.route('/series').get(require('./routes/series'));
router.route('/reviews').get(require('./routes/reviews'));
router.route('/saved').get(require('./routes/saved'));

router.route('/save').post(require('./routes/save'));


module.exports = router;
