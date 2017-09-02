import React from 'react';
import { Icon } from 'semantic-ui-react'

import FooterStatic from './FooterStatic';

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div id="picture-container">
        <div className="main-statement-index">
          <div className="left-statement">
          <p style={{fontSize: 45}}>
            Donate TWICE<br/>
            by simply sharing your programming skills
          </p>
          </div>
          <div className="right-statement">
          <p style={{fontSize: 45}}>
            여러분의 프로그래밍 실력을 기부하세요.<br/>
            실제 기부금을 모으실 수 있습니다.
          </p>
          </div>
        </div>
        <img src="https://s3.us-east-2.amazonaws.com/coderaising-cs/pexels-photo-306534-2.jpg" className="background-img" />
        <div className="img-tint-index"></div>
      </div>
      <div id="content-padding" className="index-content">
        <div className="leftpane">
          <Icon circular inverted color='orange' name='book' size='large'/><br/>
          <h4>Current Programmers?</h4>
          <div>
            자신의 경력과 지식을 현재 프로그래밍을 공부 중인 사람들에게 재능기부 형태로 공유하고, 이를 통해 모은 돈을 원하는 자선단체에 기부할 수 있습니다.
          </div>
        </div>
        <div className="middlepane">
          <Icon circular inverted color='olive' name='desktop' size='large'/><br/>
          <h4>Aspiring Programmers?</h4>
          <div>
            본인이 관심 있는 기술 분야에 전문가인 소프트웨어 엔지니어가 개설한 모임에 소액으로 등록해 독학으로 이해하기 어려운 부분에 대한 학습을 할 수 있습니다.
          </div>
        </div>
        <div className="rightpane">
          <Icon circular inverted color='red' name='heart' size='large'/><br/>
          <h4>Charities?</h4>
          <div>
            자신이 속한(혹은 지원하고 싶은) 자선단체를 간단한 소개와 함께 등록하면 CodeRaising 유저들의 기부를 받을 수 있습니다.
          </div>
        </div>
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
