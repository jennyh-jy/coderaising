const User = require('./userModel');

exports.loggedInUserRetrieve = (req, res) => {
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

// exports.postOwnerRetrieve = (req, res) => {
//   User.findOne({'google.name': req.body.username}, (err, obj) => {
//     if (err) {
//       console.log(err);
//       res.sendStatus(500);
//     } else {
//       if (obj) {
//         res.json(obj);
//       } else {
//         res.status(404).send('No user found');
//       }
//     }
//   });
// };

exports.retrieve = (req, res) => {
  User.find((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
};

exports.loggedInUserBalanceUpdate = (req, res) => {
  User.findOne({'_id': req.session.passport.user}, (err, obj) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      obj.balance -= 1000;
      obj.save((err, obj) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          console.log("User's account balance has been updated!")
          res.json(obj);
        }
      });
    }
  });
};

exports.postOwnerBalanceUpdate = (req, res) => {
  User.findOne({'google.email': req.body.email}, (err, obj) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      obj.balance += 1000;
      obj.save((err, obj) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          console.log("Post owner's account balance has been updated!")
          res.json(obj);
        }
      });
    }
  });
};
