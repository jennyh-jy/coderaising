import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Newpost from './Newpost.js';
import $ from 'jquery';
import axios from 'axios';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <h1>CodeRaising</h1>
          <button type="button"><Link to="/newpost">New Post</Link></button>

          <hr/>
          <Route path="/newpost" component={Newpost} />

        </div>
      </Router>

    );
  }
}

export default App;
