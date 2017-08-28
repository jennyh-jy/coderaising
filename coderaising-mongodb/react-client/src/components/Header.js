import React from 'react';
import { Link } from 'react-router-dom';


const Header = ({loginStatus, logoutClick}) => {
  return (
    <div>
      <h1><Link to="/">CodeRaising</Link></h1>
       <div><Link to="/posts">Posts</Link>   <Link to="/charities">Charities</Link></div>
        {!loginStatus
        ? <div><Link to="/login">Log In/Sign Up</Link></div>
        : <div><Link to="/profile">Profile</Link>   <a href='#' onClick={() => logoutClick()}>Log Out</a></div>}
      <hr/>
    </div>
  );

};

export default Header;
