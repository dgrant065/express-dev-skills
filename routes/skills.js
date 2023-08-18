var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controller/skills');

// All actual paths start with "/skills"

router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);
router.get('/new', skillsCtrl.new);
router.post('/', skillsCtrl.create);
router.get('/:id/edit', skillsCtrl.edit)



module.exports = router;
