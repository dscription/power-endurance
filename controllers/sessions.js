const Session = require('../models/session');
const User = require('../models/user');

module.exports = {
  create,
  getOne,
};

function create(req, res) {
  
}

function getOne(req, res) {
  Session.findById(req.params.id, (err, session) => {
    res.status(200).json(session);
  });
}
