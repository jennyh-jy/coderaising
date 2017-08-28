import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import './styles.css';
import MainRouter from './components/MainRouter'

ReactDOM.render((
<Router>
  <MainRouter />
</Router>), document.getElementById('app'));
