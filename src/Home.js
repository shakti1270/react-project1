
import React from 'react';
import './Home.css'; 

const Home = () => {
  return (
    <div>
      <div className="header">
        <h2>Blog Name</h2>
      </div>

      <div className="row">
        <div className="leftcolumn">
          {posts.map((post) => (
            <div key={post.slug} className="card">
              <h2>{post.title}</h2>
              <h5>{post.description}, {post.date}</h5>
              <div className="fakeimg" />
              <p>{post.content}</p>
            </div>
          ))}
        </div>

        <div className="rightcolumn">
          <div className="card">
            <h2>About Me</h2>
            <div className="fakeimg" />
            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
          </div>

          <div className="card">
            <h3>Popular Post</h3>
            <div className="fakeimg" /><br />
            <div className="fakeimg" /><br />
            <div className="fakeimg" />
          </div>

          <div className="card">
            <h3>Follow Me</h3>
            <p>Some text..</p>
          </div>
        </div>
      </div>

      <div className="blog-description">
        <h2>Blog Description</h2>
        <p>This is a sample blog description.</p>
      </div>

      <div className="footer">
        <h2>Footer</h2>
      </div>
    </div>
  );
};

const posts = [
  {
    title: 'Post 1',
    description: 'Title description, Sep 9, 2024',
    content: 'Some text..',
    slug: 'post-1',
    date: 'Sep 9, 2024',
  },
  {
    title: 'Post 2',
    description: 'Title description, Sep 10, 2024',
    content: 'Some text..',
    slug: 'post-2',
    date: 'Sep 10, 2024',
  },
  
];

export default Home;