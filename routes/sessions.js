const express = require('express');
const router = express.Router();
const sessionsCtrl = require('../controllers/sessions')

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(require('../config/auth'));
// router.get('/', checkAuth, sessionsCtrl.index);
router.get('/',checkAuth, sessionsCtrl.getOne)
router.post('/', checkAuth, sessionsCtrl.create)

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;
