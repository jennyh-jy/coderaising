const Post = require('./postModel');

exports.createOne = (req, res) => {
  const post = new Post(req.body);
  console.log(post);
  post.save((err, newObj) => {
    if (err) {
      res.sendStatus(500);
    } else {
      console.log('Your post has been created!')
      res.json(newObj);
    }
  });
};

exports.retrieve = (req, res) => {
  Post.find((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
};

exports.retrieveOne = (req, res) => {
  Post.findOne({number: req.params.number}, (err, obj) => {
    if (err) {
      res.sendStatus(500);
    } else {
      if (obj) {
        res.json(obj);
      } else {
        res.status(404).send('No post found');
      }
    }
  });
};
