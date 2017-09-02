import React from 'react';
import { Icon, Divider } from 'semantic-ui-react';

import FooterStatic from './FooterStatic';

const About = () => {
  return (
    <div>
      <img src="https://s3.us-east-2.amazonaws.com/coderaising-cs/people-coffee-tea-meeting-2.jpg" className="background-img" />
        <div id="content-padding">
          <center>
            <h2>About CodeRaising</h2>
            <h3>Donate TWICE<br/>by simply sharing your programming skills</h3>
          </center>
          <p/>
          <p>
          CodeRaising is a platform where experienced software engineers can share their knowledge and experience in the field
          with aspiring software engineers seeking to improve their skills in a certain area. By allowing users to organize
          either online or in-person meetups and register for them for a dollar, seek out mentors by skill-set, CodeRaising aims to make the way we learn and teach a more open and communal experience.
          <p/>
          <center><Divider style={{width: 200}}/></center>
          <p/>
          CodeRaising은


          *********
          The world of software engineering is complex and can often be daunting. With frameworks constantly falling
          in and out of favor it can be difficult to keep pace with the ever-changing landscape. And although Google
          and Stack Overflow are invaluable tools, they cant replace in-person mentorship.

          MatchJS is an app designed to connect current and aspiring software engineers seeking to improve their skills
          in a certain area with mentors who have real-world experience and are willing to share their knowledge.
          By allowing users to post their availability and seek out mentors by skill-set, MatchJS aims to
          make the way we learn and teach a more open and communal experience.

          **********
          At it’s simplest, donate:code is a way for charities to find people to help with projects
          that they can’t afford to allocate a budge to, and for IT professionals to use their expertise
          as something to donate to charities.

          Every charity, school and community group has technology needs. Sometimes it’s a simple website update,
          or perhaps they need help getting a social network up and running. How about more ambitious charities
          who want to build an app to generate some extra revenue? There’s just one problem – the cost of
          getting someone with the technical skills to help. Wouldn’t it be great if someone could donate their time?

          Software developers, web and graphic designers excel in their fields. But they know that to be better,
          they need more experience. Instead of putting time into side projects that go nowhere,
          why not donate time and expertise to a group that really needs your help. Increase your portfolio,
          and gain some extra karma while you do. Learn how to work with diverse customers, and make your CV stand out.
          </p>

      <center>
      <h3>Meet Our Team</h3>
        <span className="team-member">
          <img src="https://s3.us-east-2.amazonaws.com/coderaising-cs/imageedit_2_2193126685.gif" className="team-img"/>
          <br/>
          <h4>Yohan Kim</h4>
          Full-stack developer<br/>
          <a href="https://github.com/yodoree">
          <Icon name='github' size='large' /></a>
          <Icon name='linkedin' size='large' />
        </span>

        <span className="team-member">
          <img src="https://s3.us-east-2.amazonaws.com/coderaising-cs/imageedit_4_3739680007.gif" className="team-img"/>
          <br/>
          <h4>Jenny Hong</h4>
          Full-stack developer<br/>
          <a href="https://github.com/jennyh-jy">
          <Icon name='github' size='large' /></a>
          <a href="https://www.linkedin.com/in/jennyhong2/">
          <Icon name='linkedin' size='large' /></a>
        </span>

      <p/>
      <h3>Special thanks to...</h3>
        <span className="team-member">
          <img src="https://s3.us-east-2.amazonaws.com/coderaising-cs/imageedit_6_7435749694.gif" className="team-img"/>
          <br/>
          <h4>Namse</h4>
        </span>

        <span className="team-member">
          <img src="https://s3.us-east-2.amazonaws.com/coderaising-cs/imageedit_8_6330731965.gif" className="team-img"/>
          <br/>
          <h4>Zao</h4>
        </span>

        <span className="team-member">
          <img src="https://s3.us-east-2.amazonaws.com/coderaising-cs/imageedit_10_5644892919.gif" className="team-img"/>
          <br/>
          <h4>Yungooyungoo</h4>
        </span>
      </center>

      </div>
      <FooterStatic />
    </div>
  );
}

export default About;
