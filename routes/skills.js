var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controller/skills');

// All actual paths start with "/skills"

router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create);
router.get('/:id/edit', skillsCtrl.edit)
router.delete('/:id', skillsCtrl.delete)
router.put('/:id', skillsCtrl.update)



module.exports = router;
