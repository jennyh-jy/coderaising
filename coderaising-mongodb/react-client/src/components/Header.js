import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = ({loginStatus, logoutClick}) => {
  return (
    <div id="header">
      <NavLink to="/" style={{display: 'inline', textAlign: 'left'}}>CodeRaising</NavLink>
       <div style={{display: 'inline', textAlign: 'right'}}>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/charities">Charities</NavLink>
       </div>
        {!loginStatus
        ? <div style={{textAlign: 'right'}}><a href="/auth/google" className="login-btn">Log In/Sign Up with Google</a></div>
        : <div style={{textAlign: 'right'}}><NavLink to="/profile">Profile</NavLink>   <a href='#' onClick={() => logoutClick()}>Log Out</a></div>}
    </div>
  );

};

export default Header;
