import React from 'react';
import { Link } from 'react-router-dom';


const Header = ({loginStatus, logoutClick}) => {
  return (
    <div>
      <h1><center><Link to="/" style={{color:'grey'}}>CodeRaising</Link></center></h1>
       <div style={{display : 'inline-block'}}><Link to="/posts" style={{color:'grey'}}>Posts</Link>   <Link to="/charities" style={{color:'grey'}}>Charities</Link></div>
        {!loginStatus
        ? <div style={{display : 'inline-block'}}><a href="/auth/google" style={{color:'grey'}}>Log In/Sign Up with Google</a></div>
        : <div style={{display : 'inline-block'}}><Link to="/profile" style={{color:'grey'}}>Profile</Link>   <a href='#' style={{color:'grey'}} onClick={() => logoutClick()}>Log Out</a></div>}
      <hr/>
    </div>
  );

};

export default Header;
