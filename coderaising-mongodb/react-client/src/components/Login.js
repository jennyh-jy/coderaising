import React from 'react';


class Login extends React.Component{
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="content-padding loginpage">
      <div className="login-text">Log In</div>

      <div className="googlelogin-btn">
        <a href="/auth/google">
          <div>
            <img
              src="https://image.flaticon.com/icons/svg/124/124013.svg"
              style={{width: "55px", height:"55px", float: "left"}}/>
          </div>
          <div style={{width: "250px", height:"55px", padding:"20px 0px 0px 0px"}}>Continue with Google</div>
        </a>
      </div>

      </div>
    );
  }

}

export default Login;
<div className="locallogin-email">
  <input className="email-input" required />
<span className="floating-label">Email</span>
</div>


// <input className="password-input" required />
// <span className="floating-label">Password</span>
// </div>

// .locallogin-email{
//   position: relative;
//   padding-top: 10px;
// }
//
// input:focus ~ .floating-label,
// input:not(:focus):valid ~ .floating-label{
//   top: 8px;
//   bottom: 10px;
//   left: 10px;
//   font-size: 11px;
//   opacity: 1;
// }
//
// .email-input{
//   border: 0;
//   border-bottom: 1px solid #d1d1d1;
//   outline: 0;
//   background: transparent;
//   font-size: 17px;
//   width: 200px;
//   height: 35px;
// }
//
// .floating-label {
//   position: absolute;
//   pointer-events: none;
//   left: 10px;
//   top: 18px;
//   transition: 0.2s ease all;
//   color: #4e4e4f;
// }
