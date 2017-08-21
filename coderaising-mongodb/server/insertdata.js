const data = require('../data/testdata.json');
const db = require('./db')
const mongoose = require('mongoose');
const Post = require('./resources/Post')
// Fill in the definition of insertAllPokemon so that when
// this file is run in the terminal with `node insertAllPokemon.js`,
// all 151 pokemon are inserted into the database
const insertData = () => {

  data.forEach((obj) => {
    const post = new Post(obj);
    post.save((err, obj) => {
      if (err) {
        console.log(err);
      }
      console.log(obj);
    });
  });
};



// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertData();
