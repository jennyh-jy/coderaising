import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Dropdown, Table } from 'semantic-ui-react';
import TimeAgo from 'react-timeago';

import FooterStatic from './FooterStatic';


const DEFAULT_CATEGORY = ["HTML", "CSS", "JavaScript", "React", "AngularJS", "Node.js", "Python", "Django", "Java", "C++", "SQL", "Git", "Etc"];

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      selectedCategory: DEFAULT_CATEGORY,
    };
  }

  categoryChange(event, { value }) {
    this.setState({
      selectedCategory: value.length ? value : DEFAULT_CATEGORY,
    });
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/posts')
    .then(res => {
      this.setState({posts: res.data});
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div id="picture-container">
          <span className="main-statement-others">
            Upcoming meetups
          </span>
          <Link to="/newpost" className="new-btn">Organize a Meetup</Link>
        <img src="https://s3.us-east-2.amazonaws.com/coderaising-cs/pexels-photo-196655-2.jpg" className="background-img" />
        </div>

        <div id="content-padding">
          <div style={{marginBottom: "50"}}>
            <h3 style={{marginLeft: "60"}}>Categories:</h3>
            <center>
            <Dropdown
              placeholder='All categories'
              fluid multiple search selection options={[
                { value: "HTML", text: 'HTML' },
                { value: "CSS", text: 'CSS' },
                { value: "JavaScript", text: 'JavaScript' },
                { value: "React", text: 'React' },
                { value: "AngularJS", text: 'AngularJS' },
                { value: "Node.js", text: 'Node.js' },
                { value: "Python", text: 'Python' },
                { value: "Django", text: 'Django' },
                { value: "Java", text: 'Java' },
                { value: "C++", text: 'C++' },
                { value: "SQL", text: 'SQL' },
                { value: "Git", text: 'Git' },
                { value: "Etc", text: 'Etc' },
              ]}
              onChange={this.categoryChange.bind(this)}
              style={{width: 1000}} />
            </center>
          </div>

          <center>
          <Table basic='very' style={{width: 1000}}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell><h4>Meetup Title</h4></Table.HeaderCell>
                  <Table.HeaderCell><h4>Category</h4></Table.HeaderCell>
                  <Table.HeaderCell><h4>By</h4></Table.HeaderCell>
                  <Table.HeaderCell><h4>Posted At</h4></Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
              {this.state.posts.filter((post, i) => {
                if (this.state.selectedCategory === DEFAULT_CATEGORY) {
                  return true;
                }
                return this.state.selectedCategory.includes(post.categories);
              })
                .reverse().map((post, i) =>
                <Table.Row>
                  <Table.Cell><Link to={`/posts/${post.number}`}><b>{post.title}</b></Link></Table.Cell>
                  <Table.Cell>{post.categories}</Table.Cell>
                  <Table.Cell>{post.username}</Table.Cell>
                  <Table.Cell><TimeAgo date={post.createdAt} /></Table.Cell>
                </Table.Row>
              )}
              </Table.Body>
            </Table>
            </center>
          </div>
        <FooterStatic />
      </div>
    );
  }
}

export default Posts;
