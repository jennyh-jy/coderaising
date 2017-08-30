import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = ({loginStatus, logoutClick}) => {
  return (
    <div id="header">
      <div className="logo"><NavLink to="/">CodeRaising</NavLink></div>
       <div className="menu">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/charities">Charities</NavLink>
        {!loginStatus
        ? <span className="login"><NavLink to="/login">Log In/Sign Up with Google</NavLink></span>
        : <span className="profile-logout"><NavLink to="/profile">Profile</NavLink>
        <a href='#' onClick={() => logoutClick()}>Log Out</a></span>}
      </div>

    </div>
  );

};

export default Header;
