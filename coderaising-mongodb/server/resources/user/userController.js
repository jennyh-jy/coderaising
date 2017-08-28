const User = require('./userModel');

exports.retrieveOne = (req, res) => {
  User.findOne({'_id': req.session.passport.user}, (err, obj) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      if (obj) {
        res.json(obj);
      } else {
        res.status(404).send('No user found');
      }
    }
  });
};

exports.retrieve = (req, res) => {
  User.find((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
};
