import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Dropdown, Table } from 'semantic-ui-react'

const DEFAULT_CATEGORY = ["C++", "JavaScript"];

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
        <a href="#" className="new-btn"><Link to="/newpost">Organize a Meetup</Link></a>
      <img src="https://s3.us-east-2.amazonaws.com/coderaising-cs/pexels-photo-196655-2.jpg" className="background-img" />
      <div className="img-tint-others"></div>
      </div>

  <div className="content-padding">
  Categories:
  <Dropdown
    placeholder='All categories'
    fluid multiple search selection options={[{ value: "C++", text: 'C++' }, { value: "JavaScript", text: 'JavaScript' }]}
    onChange={this.categoryChange.bind(this)}/>

    <Table basic='very'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Meetup Title</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell>By</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
        {this.state.posts.filter((post, i) => {
          if (this.state.selectedCategory === DEFAULT_CATEGORY) {
            return true;
          }
          return this.state.selectedCategory.includes(post.categories);
        })
          .map((post, i) =>
          <Table.Row>
            <Table.Cell><Link to={`/posts/${post.number}`}>{post.title}</Link></Table.Cell>
            <Table.Cell>{post.categories}</Table.Cell>
            <Table.Cell>{post.username}</Table.Cell>
          </Table.Row>
        )}
        </Table.Body>
      </Table>



        </div>
      </div>
    );
  }
}

export default Posts;
