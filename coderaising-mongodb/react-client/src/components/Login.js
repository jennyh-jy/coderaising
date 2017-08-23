import React from 'react';
import { GoogleLogin } from 'react-google-login-component';
import axios from 'axios';

class Login extends React.Component{
  constructor (props, context) {
    super(props, context);
  }

  responseGoogle (googleUser) {
    const id_token = googleUser.getAuthResponse().id_token;
    console.log({accessToken: id_token});
    //anything else you want to do(save to localStorage)...

    // axios.post('http://localhost:8000/newpost', newpost)
    //   .then(response => {
    //     console.log('Post has been submitted!');
    //     alert('Your post has been submitted!');
    //   })
    //   .then(() => {
    //     this.props.history.push('/posts');
    //   })
    //   .catch(response => console.log('Failed to post'));
    //

  }

  onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  signOut() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      console.log('User signed out.');
    });
  }

  componentDidMount() {
    gapi.signin2.render('g-signin2', {
      'scope': 'profile email',
      'width': 200,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': this.onSignIn
    });
  }

  render () {
    return (
      <div>
        Username: <input type="text" id="username-input" /><br />
        Password: <input type="text" id="password-input" /><br />
        <button type="button">Log In</button><p/>

        <div id="g-signin2" data-onsuccess={this.onSignIn} />

          <div>
            <a href="#" onClick={this.signOut}>Google Sign out</a>
          </div>
      </div>
    );
  }

}

export default Login;
