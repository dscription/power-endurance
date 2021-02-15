const express = require('express');
const router = express.Router();
const sessionsCtrl = require('../controllers/sessions')

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(require('../config/auth'));
// router.get('/', checkAuth, sessionsCtrl.index);
router.get('/:id',checkAuth, sessionsCtrl.getOne)
router.post('/', checkAuth, sessionsCtrl.create)
router.put('/:id', checkAuth, sessionsCtrl.update)

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;
