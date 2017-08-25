const User = require('./userModel');

exports.createOne = (req, res) => {
  Pokemon.findOne({number: req.body.number}, (err, obj) => {
    if (err) {
      res.sendStatus(500);
    } else if (obj) {
      console.log('This pokemon already exists!');
      res.sendStatus(200);
      return;
    } else {
      const pokemon = new Pokemon(req.body);
      pokemon.save((err, newObj) => {
        if (err) {
          res.sendStatus(500);
        } else {
          console.log('Your pokemon has been created!')
          res.json(newObj);
        }
      });
    }
  })
};

exports.retrieve = (req, res) => {
  Pokemon.find((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
};

exports.retrieveOne = (req, res) => {
  Pokemon.findOne({number: req.params.number}, (err, obj) => {
    if (err) {
      res.sendStatus(500);
    } else {
      if (obj) {
        res.json(obj);
      } else {
        res.status(404).send('No pokemon found');
      }
    }
  });
};

exports.updateOne = (req, res) => {
  Pokemon.findOne({number: req.params.number}, (err, obj) => {
    if (err) {
      res.sendStatus(500);
    } else {
      obj.number = req.body.number || obj.number;
      obj.name = req.body.name || obj.name;
      obj.types = req.body.types || obj.types;
      obj.imageUrl = req.body.imageUrl || obj.imageUrl;

      obj.save((err, obj) => {
        if (err) {
          res.sendStatus(500);
        } else {
          console.log('Your pokemon has been updated!')
          res.json(obj);
        }
      });
    }
  });
};

exports.delete = (req, res) => {
  Pokemon.find()
  .then(allPokemons => {
    Pokemon.remove()
    .then(() => {
      console.log('All of your pokemon have been deleted!')
      res.json(allPokemons);
    });
  })
  .catch(() => {
    res.sendStatus(500);
  });
};

exports.deleteOne = (req, res) => {
  Pokemon.findOne({number: req.params.number})
  .then(obj => {
    if (obj) {
      obj.remove()
      .then(() => {
        console.log('Your pokemon has been deleted!')
        res.json(obj);
      });
    } else {
      console.log("This pokemon doesn't exist");
      res.sendStatus(404);
    }
  })
  .catch(() => {
    res.sendStatus(500);
  });
};
