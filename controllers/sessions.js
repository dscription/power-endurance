const Session = require('../models/session');
const User = require('../models/user');

module.exports = {
  create,
  getOne,
};

function create(req, res) {
  Session.create(req.body).then((session) => {
    User.findById(req.user._id).then((user) => {
      user.sessions.push(session);
      user.save();
    });
    res.status(200).json(session);
  });
}

function getOne(req, res) {
  Session.findById(req.params.id, (err, session) => {
    res.status(200).json(session);
  });
}
