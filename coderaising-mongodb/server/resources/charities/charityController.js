const Charity = require('./charityModel');

exports.createOne = (req, res) => {
    const {name, content} = req.body;

    Charity.findOne({
      name,
    })
    .then((charity) => {
      if(charity) {
        console.log('charity already exist', charity);
        res.sendStatus(200);
        return;
      }
      else if(!charity) {
        const newcharity = new Charity({name, content});
        return newcharity.save()
        .then(() =>
          res.sendStatus(200));
      }
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
  };

exports.retrieve = (req, res) => {
  Charity.find((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
};

exports.charityBalanceUpdate = (req, res) => {
  Charity.findOne({'name': req.body.name}, (err, obj) => {
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
          console.log("Charity's account balance has been updated!")
          res.json(obj);
        }
      });
    }
  });
};
