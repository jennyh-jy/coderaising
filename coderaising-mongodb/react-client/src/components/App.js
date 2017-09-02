import React from 'react';
import FooterStatic from './FooterStatic';

const App = () => {
  return (
    <div>
      <div id="picture-container">
        <div className="main-statement-index">
          <div className="left-statement">
          <p>
            Programmers ?
            Donate your skills and experience you want to share
            Donate  money time and skills to help those who need it most
            Donate  money back to charities
          </p>
          </div>
          <div className="right-statement">
          <p>
            Charities?
          </p>
          </div>
        </div>
        <img src="https://s3.us-east-2.amazonaws.com/coderaising-cs/pexels-photo-306534-2.jpg" className="background-img" />
        <div className="img-tint-index"></div>
      </div>
      <div id="content-padding" className="index-content">
        <div className="leftpane">left</div>
        <div className="middlepane">middle</div>
        <div className="rightpane">right</div>
      Contact Us (optional)
    </div>
    <FooterStatic />
  </div>
  );
}

export default App;

// <div class="image-wrapper">
//        <img src="someimage" />
//        <p>The text is in a paragraph tag</p>
// </div>
//
// .image-wrapper {
//     position: relative;
//     width: 250px;
// }
// .image-wrapper p {
//     position: absolute;
//     left: 0;
//     top: 0;
//     padding: 10px;
//     border: 1px solid #FFF;
//     width: 218px;
//     color: #FFF;
//     margin: 5px;
// }

// Charities
// List your projects on donate:code
// Find the best people for the job from our network.
//
// **Post a Project
//
// Volunteers
// Developers & designers needed
// Donate your time and skills to help those who need it most
//
// **Create a Profile
